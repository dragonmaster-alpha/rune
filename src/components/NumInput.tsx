import React from 'react'
import styled from 'styled-components'
import {
    Button,
    Input,
} from '@arcanefinance/uikit'
import '../styles/custom.css'

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`

const NumInput: React.FC<{pack:number, changePack: any}> = ({pack, changePack}) => {
  function handleChange(e) {
      changePack(parseInt(e.target.value));
  }

  function handleMinusClick() {
      changePack(pack - 1);
  }

  function handleAddClick() {
      console.log(pack + 1);
      changePack(pack + 1);
  }

  return (
  <>
    <InputWrapper>
        <Button style={{
            background:'#2b313b', 
            borderRadius: 0, 
            width: '50px', 
            height: '50px', 
            fontFamily: 'serif'}} onClick={handleMinusClick}>-</Button>
        <Input type="number" style={{
            borderRadius: 0, 
            width: '100px', 
            height: '50px', 
            background: '#181f29'}} value={pack} onChange={handleChange}/>
        <Button style={{
            background:'linear-gradient(45deg, #2692c1, #237da9)', 
            borderRadius: 0, 
            width: '50px', 
            height: '50px', 
            fontFamily: 'serif'}} onClick={handleAddClick}>+</Button>
    </InputWrapper>
  </>
  )
}

export default NumInput
