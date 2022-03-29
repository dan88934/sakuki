import React, {useState, useEffect } from 'react'
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
    const [inputText, setInputText] = useState('')
    const [resultText, setResultText] = useState('')


    const translateText = (e) => {
        setInputText(e)
        console.log(inputText)
        setResultText(inputText)
        //Send input text to API

        // let data = {
        //     q : inputText,
        //     source : en,
        //     target: 
        // }        }

        // axios.post(`https://libretranslate.de/languages`, data)
        //  .then((response) => {
        //     // setResultText(response.data.translatedText)
        //  })
    } //Display loading box when API is fetchign

    // useEffect(() => {
    //     axios.get('https://libretranslate.de/languages')
    //      .then((response) => {
    //      console.log(response.data)
    // })
    // }, [])

  return (
    <>
    <TranslationBoxContainer>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TopLine>English Input</TopLine>
                    <JpTranslationBox
                    placeholder='Type text to translate into Japanese...'
                    onChange={(e) => translateText(e.target.value)}
                    />
                </Column1>
                <Column2>
                    <TopLine>Japanese Output</TopLine>
                    <EngTranslationBox
                     placeholder='Output text...'
                     value={resultText}
                    />
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </TranslationBoxContainer>
    </>
  )
}

export default InfoSection