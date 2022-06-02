import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Signup/context/AuthContext'
import {
    Container,
    FormWrap,
    FormContent,
    Form, 
    FormH1,
    FormLabel,
    FormInput,
    FormButton, 
    Text
} from './SigninElements'

const SignIn = () => {
    const { login } = UserAuth();
    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            navigate('/app')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form onSubmit={handleSubmit}>
                    <FormH1>
                        Sign in to your account
                    </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' 
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                     />
            

                    <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type='password'
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)} 
                     />

                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn