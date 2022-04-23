import Footer from '../components/Footer'
import AppNavbar from '../components/AppNavbar'
import TranslationBox from '../components/TranslationBox'
// import {useNavigate} from 'react-router-dom'

const AppPage = (firstName) => {
 
  console.log(firstName)
    return (
      <>
      {/* <ScrollToTop/> */}
      <AppNavbar/>
      <TranslationBox firstName={firstName}/>
      <Footer/>
      </>
    ) 
  }
  
  export default AppPage