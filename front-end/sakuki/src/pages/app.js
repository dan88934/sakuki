import Footer from '../components/Footer'
import React from 'react'
// import AppNavbar from '../components/AppNavbar'
import Navbar from '../components/Navbar'
import TranslationBox from '../components/TranslationBox'
// import {useNavigate} from 'react-router-dom'
import {UserAuth} from '../components/Signup/context/AuthContext'
import { BodyContainer } from '../components/Container/BodyContainerElements'

const AppPage = () => {
 const { user, logout } = UserAuth();

    return (
      <>
      <BodyContainer></BodyContainer>
      {/* <ScrollToTop/> */}
      <Navbar cta='signout'/>
      <TranslationBox email={user.email}/>
      <Footer/>
      </>
    ) 
  }
  
  export default AppPage