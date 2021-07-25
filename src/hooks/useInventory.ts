import { useContext, useEffect } from 'react'
import { InventoryContext } from 'contexts/InventoryContext'
import { useWeb3React } from '@web3-react/core'

const useInventory = (userAddress = null) => {
  const { account } = useWeb3React()
  const cont: any = useContext(InventoryContext)

  // useEffect(() => {
  //   if (!userAddress && !account) return

  //   cont.setUserAddress(userAddress || account)
  // }, [account, cont, userAddress])

  return cont
}

export default useInventory
