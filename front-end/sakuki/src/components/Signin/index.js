import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
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

    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()

        //Interact with API using fetch
        await fetch('http://localhost:8000/api/login', {
            method: 'POST', 
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            })
        })

        navigate('/app')
    }

  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form onSubmit={submitHandler}>
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