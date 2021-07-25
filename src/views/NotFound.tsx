import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@arcanefinance/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import { useEffect } from 'react'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 85px);
  justify-content: center;
`

const NotFound = () => {
  const TranslateString = useI18n()
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotFound(true)
    }, 5 * 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [setNotFound])

  return (
    <Page>
      <StyledNotFound>
        {notFound ? (
          <>
            <Heading size="xxl">404</Heading>
            <Text mb="16px">{TranslateString(1122, 'What you seek could not be found.')}</Text>
            <Button as="a" href="/" scale="sm">
              {TranslateString(1124, 'Back Home')}
            </Button>
          </>
        ) : (
          <>
            <Heading size="xxl">Loading...</Heading>
          </>
        )}
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
