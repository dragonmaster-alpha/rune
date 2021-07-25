import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getBep20Contract } from 'utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'

const useTokenBalanceOf = (tokenAddress: string, user: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account } = useWeb3React()
  const web3 = useWeb3()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3)
      const res = await contract.methods.balanceOf(user).call()
      setBalance(new BigNumber(res))
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, web3, user, fastRefresh])

  return balance
}

export default useTokenBalanceOf
