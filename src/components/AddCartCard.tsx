import React, {useState} from 'react'
import styled from 'styled-components'
import {
    Button,
    Input,
} from '@arcanefinance/uikit'
import { FaArrowRight } from 'react-icons/fa'
import Page from './layout/Page'
import NumInput from './NumInput'

const CardContainer = styled.div`
    width: 320px;
    height: 640px;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
`

const CardNameWrapper = styled.div`
    margin-top: 250px;
    margin-left: 40px;

    span {
        display: block;
        color: white;
        font-family: cursive;
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1;
    }
`

const RelativeWrapper = styled.div`
    position: relative;
`

const InfoWrapper = styled.div`
    margin-top: 48px;
    margin-bottom: 28px;
    span {
        position: relative;
        display: block;
        color: white;
        font-family: serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
    }

    span:before {
        position: absolute;
    }
`

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StaticText = styled.p`
    font-family: serif;
    font-size: 14px;
    font-weight: 500;
    text: center;
    color: #7b7b7b;
    text-transform: none;
    margin-bottom: 10px;
`

const StockText = styled.p`
    color: #cdcdcd;
    font-size: 14px;
    font-family: serif;
    text-transform: none;
`

const PriceText = styled.p`
    color: white;
    font-size: 48px;
    font-family: serif;
    text-transform: none;
    font-weight: 800;
    line-height: 1.1;
`

interface CardInfoType {
    name : string,
    member : number,
    crafting : number,
    pack : number,
    price : number,
    stock : number,
    totnumber : number,
    backimag : string
}

const AddCartCard: React.FC<CardInfoType> = ({name, member, crafting, pack, price, stock, totnumber, backimag="images/background.png"}) => {
  const [packnum, setPacknum] = useState(pack);
  return (
    <CardContainer style={{backgroundImage:`url(${backimag})`}}>
        <CardNameWrapper>
            <span>{name}</span>
            <span>guild</span>
            <InfoWrapper>
                <RelativeWrapper>
                    <span>Max {member} members</span>
                    <FaArrowRight style={{position: 'absolute', color: '#0747a7', top: '0px', left: '-20px', fontSize: '12px'}} />
                </RelativeWrapper>
                <RelativeWrapper>
                    <span>{crafting}% of guild crafting sales</span>
                    <FaArrowRight style={{position: 'absolute', color: '#0747a7', top: '0px', left: '-20px', fontSize: '12px'}} />
                </RelativeWrapper>
            </InfoWrapper>
        </CardNameWrapper>
        
        <PriceWrapper>
            <StaticText>Select how many packs to purchase</StaticText>
            <NumInput pack={packnum} changePack={setPacknum}/>
            <PriceText>${price.toLocaleString()}</PriceText>
            <StockText>{stock} of {totnumber} Remaining</StockText>
        </PriceWrapper>

        <Button style={{position: 'absolute', fontFamily: 'serif', textTransform: 'uppercase', top: 'calc(100% - 30px)', left: 'calc(50% - 90px)', width: '180px', height: '60px', background: 'linear-gradient(60deg, #00a1ff, #365b69)'}}>Add to cart</Button>
    </CardContainer>
  )
}

export default AddCartCard
