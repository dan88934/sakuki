import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
        FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
        SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Sakuki
                    </SocialLogo>
                    <WebsiteRights>
                        Sakuki © {new Date().getFullYear()}  
                    </WebsiteRights>
                    <SocialIcons>
                        {/* <SocialIconLink href="//www.facebook.com/name" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/daniel-hughes-088477100/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                        {/* <SocialIconLink href="/" target="_blank" aria-label="YouTube"><FaYoutube/></SocialIconLink> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer