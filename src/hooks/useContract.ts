import React, { useMemo, useRef, useState } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getRuneContract,
  getNativeContract,
  getCharacterFactoryContract,
  getCharacterSpecialContract,
  getArcaneCharacterContract,
  getProfileContract,
  getArcaneItemContract,
  getContract,
  getRouterContract,
} from 'utils/contractHelpers'
import { getAddress } from 'utils/addressHelpers'
import addresses from 'config/constants/contracts'
import ArcaneBarracksV1 from 'contracts/ArcaneBarracksV1.json'
import masterChef from 'config/abi/masterchef.json'
import { useContext } from 'react'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useNative = () => {
  const web3 = useWeb3()
  return useMemo(() => getNativeContract(web3), [web3])
}

export const useRune = (rune: string) => {
  const web3 = useWeb3()
  return useMemo(() => getRuneContract(rune, web3), [web3, rune])
}

export const useRouter = () => {
  const web3 = useWeb3()
  return useMemo(() => getRouterContract(web3), [web3])
}

export const useCharacterFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getCharacterFactoryContract(web3), [web3])
}

export const useBarracks = () => {
  const web3 = useWeb3()
  return useMemo(() => {
    return getContract(ArcaneBarracksV1.abi, getAddress(addresses.barracks), web3)
  }, [web3])
}

export const useCharacters = () => {
  const web3 = useWeb3()
  return useMemo(() => getArcaneCharacterContract(web3), [web3])
}

export const useArcaneItems = () => {
  const web3 = useWeb3()
  return useMemo(() => getArcaneItemContract(web3), [web3])
}


// export const useWorldstoneMinter = () => {
//   const web3 = useWeb3()
//   return useMemo(async () => {
//     const Contract = (await (await fetch('/contracts/ArcaneWorldstoneMinterV1.json')).json()) as any
//     return getContract(Contract.abi, getAddress(addresses.worldstoneMinter), web3)
//   }, [web3])
// }

export const useProfile = () => {
  const web3 = useWeb3()
  return useMemo(() => getProfileContract(web3), [web3])
}

export const useCharacterSpecialContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getCharacterSpecialContract(web3), [web3])
}
