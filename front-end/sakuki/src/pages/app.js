import Footer from '../components/Footer'
// import AppNavbar from '../components/AppNavbar'
import Navbar from '../components/Navbar'
import TranslationBox from '../components/TranslationBox'
// import {useNavigate} from 'react-router-dom'
import {UserAuth} from '../components/Signup/context/AuthContext'

const AppPage = () => {
 const { user, logout } = UserAuth();

    return (
      <>
      {/* <ScrollToTop/> */}
      <Navbar cta='signout'/>
      <TranslationBox email={user.email}/>
      <Footer/>
      </>
    ) 
  }
  
  export default AppPage