import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'

import { ResetCSS } from '@arcanefinance/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useEnv } from 'hooks/useEnv'
import * as Sentry from '@sentry/react'
import { useFetchProfile } from 'state/hooks'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import ToastListener from 'components/ToastListener'
import GlobalStyle from 'style/Global'
import Menu from 'components/Menu'
import PageLoader from 'components/PageLoader'

import history from 'routerHistory'

import 'styles/index.css'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
import Home from 'views/Home'
import NotFound from 'views/NotFound'
import useSettings from 'hooks/useSettings'
import i18n, { onRouteChange, whitelist } from './i18n'

console.log('Binzy: Hi there ᕙ(^_^‶)ᕗ')
console.log('Binzy: Welcome to my realm.')
console.log(
  `Binzy: No cheating. I know every cheat in the book. If you use them here, you will be met with a swift ban from the entire Rune network (including farms/tokens).`,
)
console.log('Binzy: Enjoy your stay!')
console.log('Binzy: ┌(▀Ĺ̯ ▀-͠ )┐')

window.onerror = function (msg, url, line, col, error) {
  // Note that col & error are new to the HTML 5 spec and may not be
  // supported in every browser.  It worked for me in Chrome.
  let extra = !col ? '' : '\ncolumn: ' + col
  extra += !error ? '' : '\nerror: ' + error

  // You can view the information in an alert to see things working like this:
  alert('Error: ' + msg + '\nurl: ' + url + '\nline: ' + line + extra)

  // TODO: Report this error via ajax so you can keep track
  //       of what pages have JS issues

  const suppressErrorAlert = true
  // If you return true, then error alerts (like in older versions of
  // Internet Explorer) will be suppressed.
  return suppressErrorAlert
}

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

function getZoom() {
  const stdWidth = 1200
  const stdHeight = 1000

  const width = window.innerWidth
  const height = window.innerHeight

  return Math.min(height / stdHeight, width / stdWidth)
}

function autoSize() {
  if (!window || !window.document) return
  if (window.innerWidth >= 968) {
    const zoomFactor = getZoom()

    document.querySelector('html')!.style.setProperty('zoom', zoomFactor + '')

    if (document.querySelector('.video-react')) {
      document
        .querySelector('.video-react')
        // @ts-ignore
        .style.setProperty('zoom', 1 / zoomFactor)
    }

    const sliders = document.getElementsByClassName('slider')!
    for (let i = 0; i < sliders.length; i++) {
      // @ts-ignore
      sliders[i].style.setProperty('zoom', 1 / zoomFactor)
    }
  } else {
    document.querySelector('html')!.style.setProperty('zoom', '1')
  }
}

// autoSize()

window.onerror = function (message, url, lineNumber) {
  console.warn(message, url, lineNumber)
  return true
}

window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {
  console.warn(promiseRejectionEvent)
})

if (process) {
  process.on('unhandledRejection', (error) => {})
}

function FallbackComponent() {
  return <div>An error has occurred. Please report in t.me/runereports</div>
}

const myFallback = <FallbackComponent />

const baseRouteUrl = `/:locale(${whitelist.join('|')})?`
export const baseUrl = i18n.language === 'en' ? '' : '/' + i18n.language

let initialized = false

const App: React.FC = () => {
  useSettings()
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
    document.addEventListener('touchstart', function () {}, true)
  }, [])

  useEagerConnect()
  useFetchProfile()
  // useGetDocumentTitlePrice()
  const { isProd } = useEnv()

  const isHome = window.location?.pathname === '/'

  useEffect(() => {
    if (initialized) return

    initialized = true

    history.listen((location, action) => {
      // location is an object like window.location
      // console.log(action, location.pathname, location.state)
      onRouteChange(location.pathname)
    })
  }, [])

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Sentry.ErrorBoundary fallback={myFallback} showDialog={false}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Router history={history}>
            <Menu>
              <SuspenseWithChunkError fallback={<PageLoader />}>
                <Switch>
                  <Route path={baseRouteUrl + '/'} exact>
                    <Home />
                  </Route>
                  {/* 404 */}
                  <Route component={NotFound} />
                </Switch>
              </SuspenseWithChunkError>
            </Menu>
            {/* <EasterEgg iterations={2} /> */}
            <ToastListener />
          </Router>
        </div>
      </Sentry.ErrorBoundary>
      {isHome ? <div id="sun"></div> : null}
      <div id="blackhole"></div>
      <div id="guardian" style={{ display: 'none' }}></div>
    </>
  )
}

export default React.memo(App)
