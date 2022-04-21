import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const TranslationBoxContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 24px;
    justify-content: stretch;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    height: 600px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? "'col2 col1'" : "'col1 col2'"};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` :
                                                 `'col1 col1' 'col2 col2'`}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    height: 150px
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding 0 15px;
    grid-area: col2;
    height: 150px;
`


export const Heading = styled.h1`
    color: #000;
    margin-bottom: 24px;
    font-size: 48px
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const JpTranslationBox = styled.textarea`
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
`

export const EngTranslationBox = styled.textarea`
    width: 100%;
    height: 100%; 
    box-sizing: border-box;
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
`


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const SignupLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`
