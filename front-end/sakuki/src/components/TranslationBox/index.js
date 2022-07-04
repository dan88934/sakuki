import React, {useState, useEffect, useCallback } from 'react'
import {TranslationBoxContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Greeting, Heading, Subtitle, JpTranslationBox, EngTranslationBox } from './TranslationBoxElements'
import axios from 'axios'

//Below dynamic vars '{}' are reading from the data file 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
                    headLine, darkText, description, buttonLink, buttonLabel,
                    img, alt, primary, dark, dark2, email}) => {

    const [resultText, setResultText] = useState('')
    // const [headingText, setHeadingText] = useState('')

    // console.log(firstName)
    const translateText2 = useCallback((value) => {
        let data = {
            englishText : value
        }
        if (data.englishText !== '') { 
            // axios.post(`http://localhost:8000/translate`, data) // 8000 is development Go server
            // axios.post(`http://localhost/translate`, data) // 8080 is production Go server
            axios.post(`http://178.62.24.63:8080/translate`, data) // 8080 is production Go server
            .then((response) => {
            setResultText(response.data)
            console.log(response)
        })
        } else {
            setResultText('') //An error occurs on API when you send it an empty string
        }
    }, [ setResultText])


  return (
    <>
    <TranslationBoxContainer>
        <InfoWrapper>
        <Greeting>Welcome {email} </Greeting>
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