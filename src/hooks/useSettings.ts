import { useContext } from 'react'
import { SettingsContext } from 'contexts/SettingsContext'

const useSettings = () => {
  const cont: any = useContext(SettingsContext)
  return cont
}

export default useSettings
