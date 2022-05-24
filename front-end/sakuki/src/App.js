import { useEffect, useState, React } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import AppPage from './pages/app'

function App() {

  const [firstName, setFirstName] = useState('')
  useEffect(() => {
      ;(async () => {
        const response = await fetch('http://localhost:8000/api/user', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        const data = await response.json()
        setFirstName(data.first_name)
        console.log('App.js (routes), set firstName (allowing access to app page)')
      }
    )()
  })

//It needs to go to the main page (home page) to set the first name - therefore, it cannot redirect from sign in to app first time
// because the first name has not been set yet

  // const firstName = 'Dan'

  const ProtectedRoute = ({ firstName, redirectPath = '/' }) => {
    if (!firstName) { // Stops unauthorized users from accessing app page
      console.log('Name is blank - unauthorized')
      return <Navigate to={redirectPath} replace />;
    } else {
      console.log('name != blank - authorized')
      console.log('name is:',firstName)
      return <AppPage firstName={firstName}/>

    }
  }
  console.log('global App.js',firstName)
  return (
   <Router>
     {/* <Navbar /> */}
     <Routes> 
        <Route exact path="/" element={<Home/>}/>

        <Route element={<ProtectedRoute firstName={firstName}/>}>
          <Route exact path="/app" element={<AppPage text={firstName} />} />
        </Route>  

        <Route exact path="/signin" element={<SigninPage/>}/>
        <Route exact path="/signup" element={<SignupPage/>}/>
     </Routes>
    </Router>
  );
}

export default App;
