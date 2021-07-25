import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@arcanefinance/uikit'
import { useWeb3React } from '@web3-react/core'
import { EN, JP, CN, DE, ES, FR, VI, SV, allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { useRunePrice, useProfile } from 'state/hooks'
import { useTranslation } from 'react-i18next'
import config from './config'
import i18n, { updateLanguage } from '../../i18n'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  // const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const runePriceUsd = useRunePrice('RUNE')
  const { profile } = useProfile()
  const { t } = useTranslation()

  for (const menuItem of config) {
    menuItem.label = t(menuItem.label)

    if (menuItem.items) {
      for (const subMenuItem of menuItem.items) {
        subMenuItem.label = t(subMenuItem.label)
      }
    }
  }

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={i18n.language}
      langs={[EN, JP, CN, DE, ES, FR, VI, SV]}
      setLang={updateLanguage}
      runePriceUsd={runePriceUsd.toNumber()}
      links={config}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />
  )
}

export default Menu
