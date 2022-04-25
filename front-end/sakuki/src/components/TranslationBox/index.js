import React, {useState, useEffect, useCallback } from 'react'
import {TranslationBoxContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Heading, Subtitle, JpTranslationBox, EngTranslationBox } from './TranslationBoxElements'
import axios from 'axios'

//Below dynamic vars '{}' are reading from the data file 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
                    headLine, darkText, description, buttonLink, buttonLabel,
                    img, alt, primary, dark, dark2}) => {

    const [resultText, setResultText] = useState('')
    // const [headingText, setHeadingText] = useState('')

    // console.log(firstName)
    const translateText2 = useCallback((value) => {
        let data = {
            englishText : value
        }
        if (data.englishText !== '') { 
            axios.post(`http://localhost:8000/translate`, data)
            .then((response) => {
            setResultText(response.data)
            console.log(response)
            // console.log('Trans 2 if',headingText)
        })
        } else {
            setResultText('') //An error occurs on API when you send it an empty string
        }
    }, [ setResultText])


  return (
    <>
    <TranslationBoxContainer>
        {/* <Heading value={firstName}> */}
          {/* <h1>{headingText}</h1> */}
        {/* </Heading> */}
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
                     readOnly
                    />
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </TranslationBoxContainer>
    </>
  )
}

export default InfoSection 