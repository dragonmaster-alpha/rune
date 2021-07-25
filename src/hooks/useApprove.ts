import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { approve } from 'utils/callHelpers'

// Approve a Farm
export const useApprove = (contract: Contract) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  // const { contract: masterChefContract, chefKey } = useMasterchef()

  const handleApprove = useCallback(async () => {
    try {
      // const tx = await approve(contract, masterChefContract, account)

      // dispatch(fetchFarmUserDataAsync(account, chefKey))
      // return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, contract])

  return { onApprove: handleApprove }
}
