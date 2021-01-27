import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';
//si lleva definición de lógica, usa llaves, sino paréntesis
const SignInAndSignUpPage = (currentUser) => (
    <div className = "sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
) 

export default SignInAndSignUpPage;