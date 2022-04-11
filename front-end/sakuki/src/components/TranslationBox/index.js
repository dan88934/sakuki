import React, {useState, useEffect, useCallback } from 'react'
import { Button } from '../ButtonElements';
import {TranslationBoxContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Heading, Subtitle, JpTranslationBox, EngTranslationBox, BtnWrap, SignupLink, ImgWrap,
        Img} from './TranslationBoxElements'
import {Form, TextArea} from 'semantic-ui-react'
import axios from 'axios'

//Below dynamic vars '{}' are reading from the data file 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
                    headLine, darkText, description, buttonLink, buttonLabel,
                    img, alt, primary, dark, dark2}) => {
    // const [inputText, setInputText] = useState('')
    // const [inputText, setInputText] = useState('')
    const [resultText, setResultText] = useState('')


    const translateText = useCallback((value) => {
        // setResultText(value)
        //Send input text to API
        // const response = await fetch(`localhost:8080/translate`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({englishText: value})
        // })
        // return await.response.json()
        // let data = {
        //     q : inputText,
        //     source : en,
        //     target: 
        // }      

        // axios.post(`https://libretranslate.de/languages`, data)
        //  .then((response) => {
        //     // setResultText(response.data.translatedText)
        //  })
        setResultText(value)
    }, [ setResultText]) //Display loading box when API is fetchign
    console.log(resultText)

    const translateText2 = useCallback((value) => {
        let data = {
            englishText : value
        }
        axios.post(`http://localhost:8000/translate`, data)
        .then((response) => {
            setResultText(value)
        })
    // useEffect(() => {
    //     axios.get('https://libretranslate.de/languages')
    //      .then((response) => {
    //      console.log(response.data)
    // })
    // }, [])
    }, [ setResultText])
  return (
    <>
    <TranslationBoxContainer>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TopLine>English Input</TopLine>
                    <JpTranslationBox
                    placeholder='Type text to translate into Japanese...'
                    onInput={(e) => translateText2(e.target.value)}
                    />
                </Column1>
                <Column2>
                    <TopLine>Japanese Output</TopLine>
                    <EngTranslationBox
                     placeholder='Output text...'
                     defaultValue={resultText}
                    />
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </TranslationBoxContainer>
    </>
  )
}

export default InfoSection 