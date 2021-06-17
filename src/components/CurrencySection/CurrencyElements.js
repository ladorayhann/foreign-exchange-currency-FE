import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'


export const CurrencyContainer = styled.div`


  background: #0c0c0c;
  margin-top: 40px;
  margin-bottom: 140px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  width: 50vw;
  border-radius: 30px;

`
export const CurrencyHeader = styled.h1`

  align-items: center;
  text-align: center;
  padding: 0 30px;
  z-index: 1;
  position: relative;
  color: white;

`

export const CurrencyInputWrap = styled.div`

  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: max-content;

`

export const CurrencyInput = styled.input`

  background-color: #01bf71;
  box-shadow: 0px 7px 27px -8px rgba(0,0,0,0.75);
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  margin-right: 20px;
  color: white;

`

export const CurrencySpan = styled.span`

  color: white;

`

export const CurrencyOutContainter = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    border-radius: 10px;
`

export const CurrencyDetail = styled.div`
    background-color: white;
    padding: 5px;


`

export const Currency = styled.h3`
    color: #01bf71;

`
export const CurrencyName = styled.span`
    color: #01bf71;

`
export const CurrencyRate = styled.p`
    color: #01bf71;

`

export const CurrencyRemoveContainer = styled.div`
    background-color: #01bf71;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 25px;
    cursor: pointer;

`
export const CurrencyRemove = styled.div`
    color: black;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

export const CurrencyAddContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const CurrencySelect = styled.select`
  background-color: #01bf71;
  box-shadow: 0px 7px 27px -8px rgba(0,0,0,0.75);
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  margin-right: 20px;
  color: white;
  cursor: pointer;
`

export const CurrencyOptionHeader = styled.option`
  color: black
`

export const CurrencyOption = styled.option``

export const BtnAdd = styled.button`
  background-color: #01bf71;
  color: white;
  cursor: pointer;
  padding: 20px;
  border: none;
  border-radius: 10px;

`