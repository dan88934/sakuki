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
} from './SignupElements'


const SignIn = () => {

    let navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async(e) => {
        e.preventDefault()

        //Interact with API
        await fetch('http://localhost:8000/api/register', {
            method: 'POST', 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName, //We defined the name JSON to be first_name in the DTO 
                last_name: lastName,
                email,
                password,
            })
        })

        navigate('/signin')
    }

  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form onSubmit={submitHandler}>
                    <FormH1>
                        Sign up for an account
                    </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' 
                                required 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                     />

                    <FormLabel htmlFor='for'>First Name</FormLabel>
                     <FormInput type='text' 
                                required 
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                     />

                    <FormLabel htmlFor='for'>Last Name</FormLabel>
                     <FormInput type='text'
                                required 
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                     />

                    <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type='password'
                                required 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                     />

                    <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                     <FormInput type='password' required />

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