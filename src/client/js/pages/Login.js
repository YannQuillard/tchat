import React, {Component} from 'react';
import Form from "../components/Form";
import TextInput from "../components/TextInput";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <h2>Login</h2>
                <Form>
                    <TextInput name={'email'} type={'email'} label={'Email'} placeholder={'Ex: fifou@protonmail.com'} required/>
                    <TextInput name={'password'} type={'password'} label={'Mot de passe :'} placeholder={'••••••••'} required/>
                </Form>
            </div>
        )
    }
}

export default Login