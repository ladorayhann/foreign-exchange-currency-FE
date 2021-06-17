import React, {useState, useEffect} from 'react'
import axios from 'axios';

import {
  CurrencyContainer,
  CurrencyHeader,
  CurrencyInput,
  CurrencyInputWrap,
  CurrencySpan,
  CurrencyOutContainter,
  CurrencyDetail,
  Currency,
  CurrencyName,
  CurrencyRate,
  CurrencyRemove,
  CurrencyRemoveContainer,
  CurrencyAddContainer,
  CurrencySelect,
  CurrencyOptionHeader,
  CurrencyOption,
  BtnAdd
} from './CurrencyElements'


const CurrencySection = () => {

  const [currencies, setCurrencies] = useState([])
  const [symbols, setSymbols] = useState([])
  const [inputConvert, setInputConvert] = useState(1)
  const [currentAvailable, setCurrentAvailable] = useState(["EUR","GBP","SGD","CAD", "CHF", "INR", "MYR", "JPY", "KRW"])
  const [updateCurrency, setUpdatedCurrency] = useState("")

  const removeCurrency = (key) => {
    const idCurrency = currencies[key].currency
    console.log(idCurrency)
    console.log(key)
    const tempCurrencies = {...currencies}
    const tempCurrentAvailable = [...currentAvailable]

    delete tempCurrencies[key]
    tempCurrentAvailable.push(idCurrency)

    setCurrencies(tempCurrencies);
    setCurrentAvailable(tempCurrentAvailable);
    
  }

  const addCurrency = async (currency) => {
    if (currency == ""){
      alert("Please select a currency")
      return
    }


    const newCurrentAvailable = currentAvailable.filter(function(element){ 
      return element != currency; 
    });
    
    const response = await axios.get(`http://localhost:8000/api/currencies?symbols=${currency}`);
    const currencyObj = await response.data
    
    const tempCurrencies = {...currencies}
    console.log("temp")
    console.log(tempCurrencies)
    console.log("currencies")
    console.log(currencies)
    console.log("len currencies")
    console.log(Object.keys(currencies).length)
    console.log("curr obj")
    console.log(currencyObj.rates[0])

    const key = Object.keys(currencies).length
    tempCurrencies[key] = currencyObj.rates[0]

    setCurrencies(tempCurrencies)
    setCurrentAvailable(newCurrentAvailable)

    
  }

  useEffect(async () => {

    const response1 = await axios.get(`http://localhost:8000/api/symbols`)
    const symbol = await response1.data
    console.log(symbol.symbols)

    setSymbols({...symbol.symbols})

    const response2 = await axios.get(`http://localhost:8000/api/currencies?symbols=IDR`)
    const baseCurrencies = await response2.data
    console.log(baseCurrencies.rates)

    setCurrencies({...baseCurrencies.rates})

  }, []);
  console.log(symbols[0])

  console.log(currencies)

  return (
    <>
      <CurrencyContainer id="currcon">
        <CurrencyHeader>Foreign Exchange Currency</CurrencyHeader>
        <CurrencyInputWrap> 

          <CurrencyInput type="number" value={inputConvert} onChange={(event) => setInputConvert(event.target.value)} placeholder="Enter a number"/>
          <CurrencySpan>$USD</CurrencySpan>
        </CurrencyInputWrap>
        {Object.keys(currencies).map((key) => {
            if (currencies.length != 0) {
                return (
                  <>
                      <CurrencyOutContainter>
                        <CurrencyDetail>
                          <Currency>{currencies[key].currency} - {(inputConvert*currencies[key].rate).toFixed(2)}</Currency>
                          <CurrencyName>{currencies[key].currency} - {currencies[key].name}</CurrencyName>
                          <CurrencyRate>1 USD = {currencies[key].currency} {currencies[key].rate}</CurrencyRate>
                        </CurrencyDetail>
                        <CurrencyRemoveContainer onClick={() => removeCurrency(key)}>
                          <CurrencyRemove onClick={() => removeCurrency(key)}>-</CurrencyRemove>
                        </CurrencyRemoveContainer>
                      </CurrencyOutContainter>
                  </>
                )
            }
          })
        }
        <CurrencyAddContainer>
          <CurrencySelect defaultValue={'DEFAULT'} onChange={(event) => setUpdatedCurrency(event.target.value)}>
            <CurrencyOptionHeader disabled value='DEFAULT'>
              Choose Currency
            </CurrencyOptionHeader>
            {currentAvailable.map((currency) => {
              return <CurrencyOption value={currency}>{currency}</CurrencyOption>
            })}
          </CurrencySelect>
          <BtnAdd type="button" onClick={() => addCurrency(updateCurrency)}>Add Currency</BtnAdd>

        </CurrencyAddContainer>
        
        
      </CurrencyContainer>
    </>
  )
}

export default CurrencySection
