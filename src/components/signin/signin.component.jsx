import React from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.util';

import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
handleSubmit = async event => {
    event.preventDefault();

    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({ email: '', password: ''});
    } catch (error) {
        console.log(error);
    }

    const { email, password } = this.state;

    this.setState({email: '', password: ''});
}

handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value})
}

render(){
    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>


            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                handleChange={this.handleChange} 
                type="email" 
                label="email"
                value={this.state.email} 
                required />
               

                <FormInput 
                name="password" 
                type="password" 
                label="password"
                handleChange={this.handleChange} 
                value={this.state.password} 
                required />
               


                <Button type="submit">Sign In</Button>
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </form>
 
        </div>
    );
}

}

export default SignIn;