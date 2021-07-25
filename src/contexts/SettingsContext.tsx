import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getWeb3NoAccount } from 'utils/web3'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from '../hooks/useWeb3'

const initState = {
  quality: 'bad',
  setQuality: (mode: string) => {},
}

const SettingsContext = React.createContext(initState)

let init = false

let requestedAnimationFrame
let fpsInitialized = false

const updateQuality = (quality) => {
  window.localStorage.setItem('appQuality', quality)

  document.body.classList.remove(`good-quality`)
  document.body.classList.remove(`avg-quality`)
  document.body.classList.remove(`bad-quality`)
  document.body.classList.add(`${quality}-quality`)

  const toggleEl = document.querySelectorAll('[aria-label="Toggle menu"]')[0]
  if (toggleEl) {
    if (quality === 'bad') {
      // @ts-ignore
      toggleEl.children[0].style['animation-name'] = 'none'
    } else {
      // @ts-ignore
      toggleEl.children[0].style['animation-name'] = 'spin'
    }
  }
}

const SettingsContextProvider = ({ children }) => {
  const [quality, _setQuality] = useState(initState.quality)
  const web3 = useWeb3()
  const { account } = useWeb3React()

  const setQuality = (grade) => {
    _setQuality(grade)
    updateQuality(grade)
  }

  useEffect(() => {
    if (!account || init || !window || !window.localStorage) return

    init = true

    updateQuality(window.localStorage.getItem('appQuality') || initState.quality)
  }, [web3, account])

  useEffect(() => {
    // if (fpsInitialized || !window || !window.localStorage || window.location.hostname === 'localhost') return
    fpsInitialized = true

    let fpsVals = []

    const onBenchmarkFinished = () => {
      //   [].slice.apply(document.images).filter(is_gif_image).map(freeze_gif)

      //   function is_gif_image(i) {
      //     return /^(?!data:).*\.gif/i.test(i.src)
      //   }

      //   function freeze_gif(i) {
      //     var c = document.createElement("canvas")
      //     var w = (c.width = i.width)
      //     var h = (c.height = i.height)
      //     c.getContext("2d").drawImage(i, 0, 0, w, h)
      //     try {
      //       i.src = c.toDataURL("image/gif") // if possible, retain all css aspects
      //     } catch (e) {
      //       // cross-domain -- mimic original with all its tag attributes
      //       for (var j = 0, a (a = i.attributes[j]) j++)
      //         c.setAttribute(a.name, a.value)
      //       i.parentNode.replaceChild(c, i)
      //     }
      //   }

      const avgFps = Math.round(fpsVals.reduce((sum, fps) => sum + fps, 0) / fpsVals.length)

      let grade = 'good'
      if (avgFps < 50 && avgFps > 40) {
        grade = 'avg'
      } else if (avgFps <= 40) {
        grade = 'bad'
      }

      console.info(`Performance: ${grade} (${avgFps} FPS)`)

      setQuality(grade)

      if (grade === 'good') {
        // It got a good grade so we can benchmark again
        setTimeout(() => {
          benchmark()
        }, 5 * 1000)
      } else {
        // Dont reattempt often or it'll slow them down
        setTimeout(() => {
          benchmark()
        }, 5 * 60 * 1000)
      }
    }

    const benchmark = () => {
      console.log('Benchmarking')
      fpsVals = []

      const times = []
      let loop = 0

      const refreshLoop = () => {
        if (requestedAnimationFrame) cancelAnimationFrame(requestedAnimationFrame)

        requestedAnimationFrame = window.requestAnimationFrame(() => {
          loop++
          const now = performance.now()
          while (times.length > 0 && times[0] <= now - 1000) {
            times.shift()
          }
          times.push(now)

          if (loop > 60) fpsVals.push(times.length)

          if (loop > 180) {
            onBenchmarkFinished()
          } else {
            refreshLoop()
          }
        })
      }

      refreshLoop()
    }

    benchmark()
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        quality,
        setQuality,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsContextProvider }
