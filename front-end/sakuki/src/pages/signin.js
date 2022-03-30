import React, {useState} from 'react'
import Signin from '../components/Signin'
import ScrollToTop from '../components/Signin'
import Footer from '../components/Footer'
import SignInNavbar from '../components/SignInNavbar'

const SigninPage = () => {

  return (
    <>
    <ScrollToTop/>
    <SignInNavbar />
    <Signin />
    <Footer/>
    </>
  )
}

export default SigninPage