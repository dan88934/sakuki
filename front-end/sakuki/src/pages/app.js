import Footer from '../components/Footer'
import AppNavbar from '../components/AppNavbar'
import Navbar from '../components/Navbar'
import TranslationBox from '../components/TranslationBox'
// import {useNavigate} from 'react-router-dom'

const AppPage = ({firstName}) => {
 
  console.log('app page',{firstName})
    return (
      <>
      {/* <ScrollToTop/> */}
      <Navbar firstName={firstName} cta='signout'/>
      <TranslationBox firstName={firstName}/>
      <Footer/>
      </>
    ) 
  }
  
  export default AppPage