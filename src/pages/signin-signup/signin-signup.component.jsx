import React from 'react';
//import './signin-signup.styles.scss';
import SignIn from '../../components/signin/signin.component.jsx';
import SignUp from '../../components/signup/signup.component';

import { SignInAndSignUpContainer } from './sign-in-sign-up.styles.jsx';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);




export default SignInAndSignUpPage;