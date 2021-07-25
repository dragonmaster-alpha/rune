import React, { useState, useEffect, useRef } from 'react'
import { getWeb3NoAccount } from 'utils/web3'

export const ItemType = {
  Skins: 0,
  Pets: 1,
  NFTs: 2,
}

const MarketContext = React.createContext({
  trades: {
    [ItemType.Skins]: [],
    [ItemType.Pets]: [],
    [ItemType.NFTs]: [],
  },
})

const MarketContextProvider = ({ children }) => {
  const [trades, setTrades] = useState({
    [ItemType.Skins]: [],
    [ItemType.Pets]: [],
    [ItemType.NFTs]: [
      // {
      //   id: 1,
      //   seller: '0x0',
      //   tokenId: '1002000020100050029003519892',
      //   price: '1',
      //   message: 'or trading for 15/1',
      //   isPerfect: false,
      //   meta: {},
      // },
      // {
      //   id: 2,
      //   seller: '0x0',
      //   tokenId: '1002000020100070040002019892',
      //   price: '2',
      //   message: 'or trading for 15/1',
      //   isPerfect: false,
      //   meta: {},
      // },
      // {
      //   id: 3,
      //   seller: '0x0',
      //   tokenId: '1002000020100050029003519892',
      //   price: '3',
      //   message: 'or trading for 15/1',
      //   isPerfect: false,
      //   meta: {},
      // },
    ],
  })

  useEffect(() => {
    const web3 = getWeb3NoAccount()
    const action = async () => {
      const rand = Math.floor(Math.random() * Math.floor(999999))
      const data = (await (await fetch('https://cache.rune.farm/trades.json?' + rand)).json()) as any

      setTrades((t) => ({
        ...t,
        [ItemType.NFTs]: data,
      }))
    }
    const interval = setInterval(action, 15 * 1000)
    action()

    return () => clearInterval(interval)
  }, [setTrades])

  return <MarketContext.Provider value={{ trades }}>{children}</MarketContext.Provider>
}

export { MarketContext, MarketContextProvider }
