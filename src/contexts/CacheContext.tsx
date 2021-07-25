import { useWeb3React } from '@web3-react/core'
import React, { useState, useEffect, useRef } from 'react'
import initialData from './cacheData.json'

initialData.runes.rune.price = 0

const CacheContext = React.createContext({})

const initialized = {}

const CacheContextProvider = ({ children }) => {
  const { account } = useWeb3React()
  const [app, setApp] = useState(initialData.app as any)
  const [stats, setStats] = useState(initialData.stats as any)
  const [runes, setRunes] = useState(initialData.runes as any)
  const [historical, setHistorical] = useState(initialData.historical as any)
  const [achievements, setAchievements] = useState({ [account]: initialData.achievements as any })
  const [overview, setOverview] = useState({ [account]: initialData.overview as any })
  const [userAddress, setUserAddress] = useState(null)

  useEffect(() => {
    const action = async () => {
      console.log('Fetching cache')

      const rand = Math.floor(Math.random() * Math.floor(999999))

      {
        const data = (await (await fetch('https://cache.rune.farm/app.json?' + rand)).json()) as any

        setApp(data)
      }

      {
        const data = (await (await fetch('https://cache.rune.farm/stats.json?' + rand)).json()) as any

        setStats(data)
      }

      {
        const data = (await (await fetch('https://cache.rune.farm/runes.json?' + rand)).json()) as any

        setRunes(data)
      }

      {
        const data = (await (await fetch('https://cache.rune.farm/historical.json?' + rand)).json()) as any

        setHistorical(data)
      }
    }

    action()

    const interval = setInterval(action, 2 * 60 * 1000)

    return () => clearInterval(interval)
  }, [setStats, setRunes, setHistorical, setApp])

  useEffect(() => {
    const accountAddress = userAddress ? userAddress : account
    if (!accountAddress) return
    if (initialized[accountAddress]) return

    initialized[accountAddress] = true

    const action = async () => {
      const rand = Math.floor(Math.random() * Math.floor(999999))

      {
        const data = (await (
          await fetch('https://cache.rune.farm/users/' + accountAddress + '/overview.json?' + rand)
        ).json()) as any

        if (data) {
          setOverview({
            ...overview,
            [accountAddress]: data,
          })
        }
      }

      {
        const data = (await (
          await fetch('https://cache.rune.farm/users/' + accountAddress + '/achievements.json?' + rand)
        ).json()) as any

        if (data) {
          setAchievements({
            ...achievements,
            [accountAddress]: data,
          })
        }
      }
    }

    action()

    const interval = setInterval(action, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [account, userAddress, setAchievements, achievements, overview])
  // console.log(JSON.stringify({ app, stats, runes, historical }))
  return (
    <CacheContext.Provider
      value={{
        app,
        stats,
        runes,
        historical,
        achievements,
        overview,
        fetchAddress: setUserAddress,
      }}
    >
      {children}
    </CacheContext.Provider>
  )
}

export { CacheContext, CacheContextProvider }
