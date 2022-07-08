import React, {useState} from 'react'
import Signin from '../components/Signin'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { BodyContainer } from '../components/Container/BodyContainerElements'

const SigninPage = () => {

  return (
    <>
    <BodyContainer></BodyContainer>
    <ScrollToTop/>
    <Navbar cta='signup'/>
    <Signin />
    <Footer/>
    </>
  )
}

export default SigninPage