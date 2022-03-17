import React from 'react'
import { Button } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
        TextWrapper, TopLine, Heading, Subtitle, BtnWrap, SignupLink, ImgWrap,
        Img} from './InfoElements'

//Below dynamic vars '{}' are reading from the data file 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
                    headLine, darkText, description, buttonLink, buttonLabel,
                    img, alt, primary, dark, dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            {/* <Button to={buttonLink}
            
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80} //Allows green tab to move when we move sections
                            primary={primary ? 1 : 0} //
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            
                            >{buttonLabel}</Button> */}
                              <SignupLink to={buttonLink}>Sign Up</SignupLink>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection