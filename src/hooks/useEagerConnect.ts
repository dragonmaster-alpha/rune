import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from '@arcanefinance/uikit'
import useAuth from 'hooks/useAuth'

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    if (!window.localStorage) return

    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames
    if (connectorId) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
