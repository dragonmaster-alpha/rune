import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { kebabCase } from 'lodash'
import { useWeb3React } from '@web3-react/core'
import { Toast, toastTypes } from '@arcanefinance/uikit'
import { useSelector, useDispatch } from 'react-redux'
import { Team } from 'config/constants/types'
import { QuoteToken } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'
// import { useMasterchef } from 'hooks/useContract'
import runes from 'config/constants/runes'
import { push as pushToast, remove as removeToast, clear as clearToast } from './actions'
import { State, Farm, Pool, ProfileState, TeamsState, AchievementState, PriceState } from './types'
import { fetchProfile } from './profile'

const ZERO = new BigNumber(0)

// clicking changes the context masterchef address, which switches the farms, keyed by mastercheff address (imported), check for nulls in token price hooks, add modal for Transfer, Unstake, Restake
// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
    previousEarnings: farm.userData
      ? farm.userData.previousEarnings
      : {
          RAL: '0',
        },
  }
}

// Pools

// Prices

export const useRunePrice = (token: string): BigNumber => {
  return ZERO
  // const farm = useFarmFromPid(runes[token.toLowerCase()].usdFarmPid)

  // if (!runes[token.toLowerCase()].usdFarmPid) return ZERO

  // return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useNativePrice = (): BigNumber => {
  const pid = 1 // was 8
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : ZERO
}

export const useBnbPrice = (): BigNumber => {
  const pid = 3 // was 8
  const farm = useFarmFromPid(pid)

  return farm.tokenPriceVsQuote ? new BigNumber(1).div(new BigNumber(farm.tokenPriceVsQuote)) : ZERO
}

// Toasts
export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast: Toast) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.DANGER, title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.INFO, title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.SUCCESS, title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.WARNING, title, description })
      },
      push,
      remove: (id: string) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])

  return helpers
}

// Profile

export const useFetchProfile = () => {
  const { account } = useWeb3React()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfile(account))
  }, [account, dispatch])
}

export const useProfile = () => {
  const { isInitialized, isLoading, data, hasRegistered }: ProfileState = useSelector((state: State) => state.profile)
  return { profile: data, hasProfile: isInitialized && hasRegistered, isInitialized, isLoading }
}




export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = useBnbPrice() //sePriceBnbBusd(); //
  const runePrice = useRunePrice('RUNE')
  const elPrice = useRunePrice('EL')
  const eldPrice = useRunePrice('ELD')
  const tirPrice = useRunePrice('TIR')
  const nefPrice = useRunePrice('NEF')
  const talPrice = useRunePrice('TAL')
  const ralPrice = useRunePrice('RAL')
  let value = new BigNumber(0)
  // console.log(bnbPrice, farms)
  for (let i = 0; i < farms.length; i++) {
    const farm = farms[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.RUNE) {
        val = runePrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.EL) {
        val = elPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.ELD) {
        val = eldPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.TIR) {
        val = tirPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.NEF) {
        val = nefPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.TAL) {
        val = talPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.RAL) {
        val = ralPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.BUSD) {
        val = farm.lpTotalInQuoteToken
      } else {
        console.log('quoteTokenSymbol not found ', farm.quoteTokenSymbol)
        val = farm.lpTotalInQuoteToken
      }
      value = value.plus(val)
    }
  }
  return value
}
