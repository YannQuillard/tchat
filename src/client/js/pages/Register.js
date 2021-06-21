import React, {Component} from 'react'
import Form from "../components/Form"
import TextInput from "../components/TextInput"
import API from '../utils/API'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        const {username, email, password} = this.state.fields
        console.log('submit')
        if(this.handleValidation()) {
            console.log('username:', username)
            console.log('Email:', email)
            console.log('Password:', password)
            API.postNewUser({username, email, password}).then(res =>
                console.log(res)
            )
        }
    }

    handleValidation() {
        let fields = this.state.fields
        console.log(fields)
        let errors = {}
        let formIsValid = true;

        if(!fields['username']){
            errors['username'] = 'Cannot be empty';
            formIsValid = false;
            console.log('username empty')
        }

        if(typeof fields['username'] !== 'undefined') {
            if(fields['username'].length < 5) {
                errors['username'] = 'Too short';
                formIsValid = false;
                console.log('username too short')
            }
        }

        if(!fields['email']){
            errors['email'] = 'Cannot be empty';
            formIsValid = false;
            console.log('email empty')
        }

        if(typeof fields['email'] !== 'undefined'){
            let regex = new RegExp('\'/\\\\S+@\\\\S+\\\\.\\\\S+/\'')
            if (regex.test(fields['email'])) {
                errors['email'] = "Email is not valid";
                formIsValid = false;
                console.log('email is not valid')
            }
        }

        if(!fields['password']){
            errors['password'] = 'Cannot be empty';
            formIsValid = false;
            console.log('Password empty')
        }

        if(typeof fields['password'] !== 'undefined') {
            if(fields['password'].length < 8) {
                errors['password'] = 'Too short';
                formIsValid = false;
                console.log('Password too short')
            }
        }

        this.setState({errors: errors})
        console.log(formIsValid)
        return formIsValid;
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


    render() {
        return (
            <div className="register">
                <h2>Register</h2>
                <Form submit={e => this.handleSubmit(e)}>
                    <TextInput name={'username'} type={'text'} label={'username'} placeholder={'Ex: Fifou'} required change={this.handleChange.bind(this, 'username')} value={this.state.fields['username']}/>
                    <TextInput name={'email'} type={'email'} label={'Email'} placeholder={'Ex: fifou@protonmail.com'} required change={this.handleChange.bind(this, 'email')} value={this.state.fields['email']}/>
                    <TextInput name={'password'} type={'password'} label={'Mot de passe :'} placeholder={'••••••••'} required change={this.handleChange.bind(this, 'password')} value={this.state.fields['password']}/>
                    <input type="submit" value="Envoyer" />
                </Form>
            </div>
        )
    }
}

export default Register