import React, {useState} from 'react'
import Signup from '../components/Signup'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const SignupPage = () => {

  return (
    <>
    <Navbar />
    <ScrollToTop/>
    <Signup />
    <Footer/>
    </>
  )
}

export default SignupPage