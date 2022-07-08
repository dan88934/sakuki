import React, {useState} from 'react'
import Signup from '../components/Signup'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { BodyContainer } from '../components/Container/BodyContainerElements'

const SignupPage = () => {

  return (
    <>
    <BodyContainer></BodyContainer>
    <Navbar />
    <ScrollToTop/>
    <Signup />
    <Footer/>
    </>
  )
}

export default SignupPage