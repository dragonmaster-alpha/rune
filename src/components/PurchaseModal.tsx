import React, { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { Button, InjectedModalProps, Skeleton, Modal, Text, Flex, AutoRenewIcon } from '@arcanefinance/uikit'
import { useWeb3React } from '@web3-react/core'
import history from 'routerHistory'
import useInventory from 'hooks/useInventory'
import { decodeItem } from 'utils/decodeItem'
import { useToast } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { useArcaneItems, useRouter, useRune } from 'hooks/useContract'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import useGetWalletItems from 'hooks/useGetWalletItems'
import styled from 'styled-components'
import { Router } from 'react-router'
import contracts from 'config/constants/contracts'
import { getBalanceNumber } from 'utils/formatBalance'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import { getContract } from 'utils/contractHelpers'
import useRuneBalance from 'hooks/useRuneBalance'
import useWeb3 from 'hooks/useWeb3'
import ApproveConfirmButtons from 'components/ApproveConfirmButtons'
import NumericalInput from './NumericalInput'

interface PurchaseModalProps extends InjectedModalProps {
  defaultAmount?: string
  onSuccess: () => void
}

const ModalContent = styled.div`
  margin-bottom: 16px;
`

const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
  width: 100%;
`
const InputContainer = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`

const InputRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
`

const BuyLink = styled.a`
  color: #fff;
  padding: 3px 15px;
  margin-top: 20px;
  text-align: center;
  font-family: unset;

  &:hover {
    color: #bb955e;
  }
`
function round(num, precision) {
  const _precision = 10 ** precision
  return Math.ceil(num * _precision) / _precision
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ defaultAmount, onSuccess, onDismiss }) => {
  const TranslateString = useI18n()
  const { toastError, toastSuccess } = useToast()
  const arcaneItemsContract = useArcaneItems()
  // const { refresh } = useGetWalletItems()
  const [amount, setAmount] = useState('')
  const [bnbBalance, setBnbBalance] = useState('')
  const [estimate, setEstimate] = useState('0')
  const [tabIndex, setTabIndex] = useState(0)
  const [runeAllowance, setRuneAllowance] = useState<BigNumber>(new BigNumber(0))
  const runeContract = useRune('RUNE')
  const routerContract = useRouter()
  const runeBalance = useRuneBalance('RUNE')

  const web3 = useWeb3()
  const { account } = useWeb3React()

  const {
    isApproving,
    isApproved,
    isConfirmed,
    isConfirming,
    handleApprove,
    handleConfirm,
  } = useApproveConfirmTransaction({
    onRequiresApproval: async () => {
      try {
        const response = await runeContract.methods.allowance(account, getAddress(contracts.pancakeFactory)).call()
        const currentAllowance = new BigNumber(response)
        return currentAllowance.gte(amount ? parseFloat(amount) : 0)
      } catch (error) {
        return false
      }
    },
    onApprove: () => {
      return runeContract.methods
        .approve(getAddress(contracts.pancakeFactory), ethers.constants.MaxUint256)
        .send({ from: account })
    },
    onConfirm: () => {
      const _amount = ethers.utils.parseEther(parseFloat(amount) + '')
      const _estimate = ethers.utils.parseEther(parseFloat(estimate) + '')
      const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      const RUNE = '0xa9776b590bfc2f956711b3419910a5ec1f63153e'
      const _to = account
      const _path = [WBNB, RUNE]
      const _deadline = Math.floor(Date.now() / 1000) + 60 * 20

      return routerContract.methods
        .swapExactETHForTokens(_amount, _path, _to, _deadline)
        .send({ from: account, value: _estimate })

      // const PancakeRouterABI = (await (await fetch('/abi/pancakeRouter.json')).json()) as any
      // const signer = new ethers.providers.Web3Provider(library).getSigner()

      // const pancakeRouterContract = new ethers.Contract(
      //   getAddress(contracts.pancakeRouter),
      //   PancakeRouterABI,
      //   signer,
      // )

      // const token = poolPair0
      // const amountTokenDesired = ethers.utils.parseEther('0.1') //web3.utils.toWei('1')
      // const amountTokenMin = ethers.utils.parseEther('0.1') //web3.utils.toWei('0.1')
      // const amountETHMin = ethers.utils.parseEther('0.0001') // web3.utils.toWei('1')
      // const to = account
      // const deadline = ethers.utils.hexlify(Math.round(Date.now() / 1000) + 200)
      // console.log(
      //   getAddress(cachedAddresses.pancakeRouter),
      //   token,
      //   amountTokenDesired,
      //   amountTokenMin,
      //   amountETHMin,
      //   to,
      //   deadline,
      // )

      //   function addLiquidityETH(
      //     address token,
      //     uint amountTokenDesired,
      //     uint amountTokenMin,
      //     uint amountETHMin,
      //     address to,
      //     uint deadline
      // ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
      // await pancakeRouterContract.addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline, {
      //   value: amountETHMin,
      // })

      // return masterChefContract.methods.equipItem(tokenId).send({ from: account })
    },
    onSuccess: async () => {
      // refresh()

      // toastSuccess(`${arcaneItem.name} equipped!`)

      // onDismiss()

      setTabIndex(2)
    },
  })

  const onChange = useMemo(async () => {
    const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const RUNE = '0xa9776b590bfc2f956711b3419910a5ec1f63153e'
    const path = [RUNE, WBNB]

    if (!parseFloat(amount)) {
      setEstimate('0')
      return
    }

    const _amount = ethers.utils.parseEther(parseFloat(amount) + '')

    const amounts = await routerContract.methods.getAmountsOut(_amount, path).call({ from: account })

    const amountOutMin = getBalanceNumber(amounts[1]) * 1.1

    setEstimate(round(amountOutMin, 4).toFixed(4))
  }, [amount, account, routerContract.methods])

  useEffect(() => {
    if (!account || !defaultAmount) return
    async function init() {
      setAmount(defaultAmount)
    }

    init()
  }, [defaultAmount, account, web3])

  useEffect(() => {
    if (!account) return
    async function init() {
      const balance = await web3.eth.getBalance(account)
      setBnbBalance(getBalanceNumber(new BigNumber(balance)) + '')
    }

    init()
  }, [account, web3])

  useEffect(() => {
    async function init() {
      const Contract = (await (await fetch('/contracts/RuneToken.json')).json()) as any
      const contract = getContract(Contract.abi, getAddress(contracts.rune), web3)

      const response = await contract.methods.allowance(account, getAddress(contracts.pancakeFactory)).call()
      const currentAllowance = new BigNumber(response)
      setRuneAllowance(currentAllowance)
    }

    init()
  }, [account, web3])

  const buy = async () => {}

  const onMax = async () => {
    setEstimate((parseFloat(bnbBalance) * 0.99).toFixed(4))

    if (!parseFloat(bnbBalance)) {
      setEstimate('0')
      return
    }

    const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const RUNE = '0xa9776b590bfc2f956711b3419910a5ec1f63153e'
    const path = [WBNB, RUNE]

    const _value = ethers.utils.parseEther(parseFloat(bnbBalance) + '')

    const amounts = await routerContract.methods.getAmountsOut(_value, path).call({ from: account })

    const amountOutMin = getBalanceNumber(amounts[1]) * 0.92

    setAmount(amountOutMin.toFixed(4))
  }

  return (
    <Modal title={TranslateString(999, 'Purchase RUNE')} onDismiss={onDismiss}>
      <ModalContent>
        {/* <Text as="p" color="textSubtle" mb="24px">
          {TranslateString(999, `Purchase RUNE`)}
        </Text> */}
        {/* <br />
        <Text as="p" color="textSubtle" mb="24px">
            {TranslateString(999, 'This will send your equipment to the raid, so it won\'t be in your inventory.')}
        </Text>
        <br />
        <Text as="p" color="textSubtle" mb="24px">
            {TranslateString(999, 'You can unequip it on the farm page to get it back.')}
        </Text> */}
        {/* {parseInt(buffs.tokenId) > 0 ? (
          <Button onClick={() => {
            history.push('/farms')
          }} mr="10px">Go to Farms</Button>
        ) : null} */}

        {/* <div>
        <Tips>{TranslateString(999, `1 Ticket = ${LOTTERY_TICKET_PRICE} RUNE`, { num: LOTTERY_TICKET_PRICE })}</Tips>
      </div>
      <div>
        <Announce>
          {TranslateString(
            478,
            'Ticket purchases are final. Your RUNE cannot be returned to you after buying tickets.',
          )}
        </Announce>
        <Final>{TranslateString(460, `You will spend: ${runeCosts(val)} RUNE`)}</Final>
      </div> */}
        {tabIndex === 0 ? (
          <Flex flexDirection="column" alignItems="center" justifyContent="center" mb="10px">
            <InputPanel>
              <InputContainer>
                <InputRow style={{}}>
                  <>
                    <NumericalInput
                      value={amount}
                      onUserInput={(val) => {
                        setAmount(val)
                      }}
                    />
                    <Button onClick={onMax} scale="sm" variant="text">
                      MAX
                    </Button>
                  </>
                </InputRow>
              </InputContainer>
            </InputPanel>
            {/* <input type="text" value={amount} onChange={(e) => onChange(e.target.value)} /> */}
            <Final>
              <strong>Cost:</strong> {estimate} BNB
            </Final>
            {/* <em style={{color: '#ccc', fontSize: '0.8rem'}}>1 XRUNE = 1 RUNE</em> */}
            {parseFloat(estimate) > parseFloat(bnbBalance) ? <Announce>Not enough BNB</Announce> : null}
            <br />
            <Actions>
              {/* <Button width="100%" variant="secondary" onClick={onDismiss}>
                {TranslateString(462, 'Cancel')}
              </Button> */}
              <Button
                isLoading={isApproving}
                disabled={
                  isApproved || isApproving || parseFloat(estimate) > parseFloat(bnbBalance) || !parseFloat(estimate)
                }
                onClick={handleApprove}
                endIcon={isApproving ? <AutoRenewIcon spin color="currentColor" /> : undefined}
              >
                {TranslateString(564, 'Approve')}
              </Button>
              <Button
                width="100%"
                onClick={handleConfirm}
                disabled={
                  !account ||
                  !isApproved ||
                  isConfirming ||
                  parseFloat(estimate) > parseFloat(bnbBalance) ||
                  !parseFloat(estimate)
                }
                endIcon={isConfirming ? <AutoRenewIcon spin color="currentColor" /> : undefined}
              >
                {TranslateString(464, 'Confirm')}
              </Button>
            </Actions>
            <br />
            <br />
            <br />
            {parseFloat(bnbBalance) === 0 ? (
              <Button onClick={() => setTabIndex(1)}>{TranslateString(1090, 'How to get BNB?')}</Button>
            ) : null}
            <br />
            <Button variant="tertiary" as="a" href="https://swap.rune.farm">
              {TranslateString(1090, 'Swap tokens')}
            </Button>
          </Flex>
        ) : null}
        {tabIndex === 1 ? (
          <>
            <Button variant="text" onClick={() => setTabIndex(0)} style={{ paddingLeft: 0 }}>
              {TranslateString(1090, 'Back')}
            </Button>
            <br />
            <br />
            <iframe
              src="https://player.vimeo.com/video/522762925"
              title="How to buy BNB"
              width="640"
              height="400"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        ) : null}
        {tabIndex === 2 ? (
          <>
            <Final>Purchase complete. Thank you!</Final>
            <br />
            <br />
            {/* <Tips>Your $RUNE balance: <br /><br />{getBalanceNumber(runeBalance)}</Tips>
            <br />
            <br /> */}
            <Button variant="text" onClick={() => setTabIndex(0)} style={{ paddingLeft: 0 }}>
              {TranslateString(1090, 'Back')}
            </Button>
          </>
        ) : null}
      </ModalContent>
      {/* <> */}
      {/* {item ? (
          <Button
            onClick={async () => {
              await masterChefContract.methods._unequipItem(item.tokenId).send({ from: account })
              refresh()
            }}
          >
            Unequip Current Item First
          </Button>
        ) : null}
        {!item ? (
          <Actions>
            <ApproveConfirmButtons
              isApproveDisabled={isConfirmed || isConfirming || isApproved}
              isApproving={isApproving}
              isConfirmDisabled={!isApproved || isConfirmed}
              isConfirming={isConfirming}
              onApprove={handleApprove}
              onConfirm={handleConfirm}
            />
            <br />
            <br />
          </Actions>
        ) : null} */}
      {/* </> */}
    </Modal>
  )
}

export default PurchaseModal

const Tips = styled.div`
  margin-left: 0.4em;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

const Final = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`
const Announce = styled.div`
  margin-top: 1em;
  margin-left: 0.4em;
  color: #ed4b9e;
`
