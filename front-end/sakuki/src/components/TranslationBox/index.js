import React, {useState, useEffect } from 'react'
import { Button } from '../ButtonElements';
import {TranslationBoxContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Heading, Subtitle, JpTranslationBox, EngTranslationBox, BtnWrap, SignupLink, ImgWrap,
        Img} from './TranslationBoxElements'
import {Form, TextArea} from 'semantic-ui-react'

//Below dynamic vars '{}' are reading from the data file 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
                    headLine, darkText, description, buttonLink, buttonLabel,
                    img, alt, primary, dark, dark2}) => {
    // const [inputText, setInputText] = useState('')
    const [inputText, setInputText] = useState('')
    const translateText = (e) => {
        setInputText(e)
        console.log(inputText)
    }
  return (
    <>
    <TranslationBoxContainer>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TopLine>English Input</TopLine>
                    <JpTranslationBox
                    placeholder='Type text to translate into Japanese...'
                    // onChange={(e) => setInputText(e.target.value)}
                    onChange={(e) => translateText(e.target.value)}
                    // onChange={translateText}
                    />
                </Column1>
                <Column2>
                    <TopLine>Japanese Output</TopLine>
                    <EngTranslationBox
                     placeholder='Output text...'
                    />
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </TranslationBoxContainer>
    </>
  )
}

export default InfoSection