import { useCallback, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ConnectorNames } from '@arcanefinance/uikit'
import { useToast } from 'state/hooks'
import { connectorsByName } from 'utils/web3React'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toastError } = useToast()
  const [error, setError] = useState(null)

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        activate(connector, (e: Error) => {
          // if (e.name === 'UnsupportedChainIdError' || e.name === 't') {
          //   if (connectorID === ConnectorNames.WalletConnect) {
          //     toastError('Error', 'Please use BSC within the TrustWallet app. Other methods are unstable.')
          //   } else if (connectorID === ConnectorNames.BSC) {
          //     toastError('Error', 'Please make sure your connected to BSC.')
          //   } else {
          //     toastError('Wrong Blockchain', 'Please use Binance Smart Chain (BSC) to access. MetaMask recommended.')
          //   }
          // } else toastError(e.name, e.message)
          setError(e)
        })
      } else {
        toastError("Can't find connector", 'The connector config is wriong')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [activate, toastError],
  )

  return { login, logout: deactivate, error }
}

export default useAuth
