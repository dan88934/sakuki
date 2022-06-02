import { useEffect, useState, React } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import AppPage from './pages/app'
import { AuthContextProvider, UserAuth } from './components/Signup/context/AuthContext';

function App() {

const ProtectedRoute = ({children}) => {
  const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />
  }
  return (
    children
  )
}


  return (
   <Router>
     <AuthContextProvider>
     <Routes> 
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/app" element={<ProtectedRoute><AppPage /></ProtectedRoute>} />
        <Route exact path="/signin" element={<SigninPage/>}/>
        <Route exact path="/signup" element={<SignupPage/>}/>
     </Routes>
     </AuthContextProvider>
    </Router>
  );
}

export default App;
