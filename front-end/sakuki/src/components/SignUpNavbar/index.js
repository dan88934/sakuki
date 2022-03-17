import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form, 
    FormH1,
    FormLabel,
    FormInput,
    FormButton, 
    Text
} from './SignUpNavbarElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <FormContent>
                <Form action="#">
                    <FormH1>
                        Sign up for an account
                    </FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                     <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                     <FormInput type='password' required />
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