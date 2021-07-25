import React from 'react'
import { ModalProvider } from '@arcanefinance/uikit'
import { Web3ReactProvider, createWeb3ReactRoot, getWeb3ReactContext } from '@web3-react/core'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { getLibrary, getWrappedLibrary } from 'utils/web3React'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { MarketContextProvider } from 'contexts/MarketContext'
import { InventoryContextProvider } from 'contexts/InventoryContext'
import { SettingsContextProvider } from 'contexts/SettingsContext'
import { CacheContextProvider } from 'contexts/CacheContext'
import { WalletItemsContextProvider } from 'contexts/WalletItemsContext'

import store from 'state'
import i18n from './i18n'

let Web3ProviderNetwork

try {
  Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')
} catch (e) {
  Web3ProviderNetwork = getWeb3ReactContext('NETWORK')
}

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getWrappedLibrary}>
        <Provider store={store}>
          <CacheContextProvider>
            <WalletItemsContextProvider>
                <ThemeContextProvider>
                  <LanguageContextProvider>
                    <BlockContextProvider>
                      <InventoryContextProvider>
                        <SettingsContextProvider>
                          <MarketContextProvider>
                            <RefreshContextProvider>
                              <I18nextProvider i18n={i18n}>
                                <ModalProvider>{children}</ModalProvider>
                              </I18nextProvider>
                            </RefreshContextProvider>
                          </MarketContextProvider>
                        </SettingsContextProvider>
                      </InventoryContextProvider>
                    </BlockContextProvider>
                  </LanguageContextProvider>
                </ThemeContextProvider>
            </WalletItemsContextProvider>
          </CacheContextProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
