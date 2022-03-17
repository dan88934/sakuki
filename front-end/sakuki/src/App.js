import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import Navbar from './components/Navbar'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'

function App() {
  return (
   <Router>
     {/* <Navbar /> */}
     <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route exact path="/app" element={<SigninPage/>}/> */}
        <Route exact path="/signin" element={<SigninPage/>}/>
        <Route exact path="/signup" element={<SignupPage/>}/>
     </Routes>
    </Router>
  );
}

export default App;
