import React, {useState} from 'react'
import Signup from '../components/Signup'
import ScrollToTop from '../components/Signup'
import Footer from '../components/Footer'
import SignUpNavbar from '../components/SignUpNavbar'

const SignupPage = () => {

  return (
    <>
    {/* <ScrollToTop/> */}
    <SignUpNavbar/>
    <Signup />
    <Footer/>
    </>
  )
}

export default SignupPage