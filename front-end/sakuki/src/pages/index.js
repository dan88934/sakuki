//homepage
import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import { BodyContainer } from '../components/Container/BodyContainerElements';

function Home() {
    const [isOpen, setIsOpen] = useState(false) // Links to the style condition in sidebar elements

    const toggle = () => {
        setIsOpen(!isOpen) //Set state to go from false to true
    }



  return (
    <>
    <BodyContainer></BodyContainer>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} showItems={true}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    {/* <Services /> */}
    <InfoSection {...homeObjThree}/>
    <Footer/>
    </>
  )
}

export default Home