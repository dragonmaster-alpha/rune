import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Heading,
  Text,
  BaseLayout,
  AutoRenewIcon,
  Button,
  Card,
  CardBody,
  Skeleton,
  CheckmarkCircleIcon,
  Flex,
  Tag,
  PrizeIcon,
  OpenNewIcon,
  LinkExternal,
  Link,
  BlockIcon,
  useMatchBreakpoints,
  useModal,
} from '@arcanefinance/uikit'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { itemData } from 'data/items'
import { useTranslation } from 'react-i18next'
import CardValueUnstyled from 'components/CardValueUnstyled'
import { ItemsMainCategoriesType } from 'data/items.type'
import useCache from 'hooks/useCache'
import AddCartCard from 'components/AddCartCard'

const GuildsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`

const Img = styled.img`
  filter: contrast(1.1) drop-shadow(2px 4px 6px black);
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`

const Guilds: React.FC = () => {

  const cardInfo =[
                    {name : 'adventurers', member : 20, crafting : 1, pack : 1, price : 194.88, stock : 256, totnumber : 2000, backimag : 'images/card1.png'},
                    {name : 'warriors', member : 30, crafting : 2.5, pack : 1, price : 3440, stock : 140, totnumber : 200, backimag : 'images/card2.png'},
                    {name : 'legends', member : 40, crafting : 5, pack : 1, price : 16720, stock : 41, totnumber : 50, backimag : 'images/card3.png'},
                    {name : 'mythic', member : 50, crafting : 10, pack : 1, price : 94000, stock : 3, totnumber : 10, backimag : 'images/card4.png'},
                  ]
                

  return (
    <>
        <GuildsContainer >
            {
                cardInfo.map((info, id) => (
                    <AddCartCard key={id} {...info}/>
                ))
            }
        </GuildsContainer>
    </>
  )
}

export default Guilds
