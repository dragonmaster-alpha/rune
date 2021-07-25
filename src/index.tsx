import React from 'react'
import { hydrate, render } from 'react-dom'
import * as Sentry from '@sentry/react'
import App from './App'
import Providers from './Providers'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({ dsn: 'https://55af693ba6974027b6631c72ec9bfb4e@o556734.ingest.sentry.io/5688112' })
}

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>,
    rootElement,
  )
} else if (typeof render === 'function') {
  render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>,
    rootElement,
  )
}
