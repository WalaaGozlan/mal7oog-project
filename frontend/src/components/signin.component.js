import React, { component } from 'react';
import axios from 'axios';


export default class signin extends component {
    constructor(props){
        super(props);
        this.state = { name: '',password:'',email:''}
        this.changeName = this.changeName.bind(this)
        this.changePassword= this.changePassword.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
    }
    changeName(e){
        this.setState({ name: e.target.value });

    }
    changeEmail(e){
        this.setState({ email: e.target.value});
    }
    changePassword(e){
        this.setState({ password: e.trget.value});
    }
    onSubmit(e){
        e.registerDeafaulte();

        const user = {
            name:this.state.name,
            password:this.state.password,
            email:this.state.email
        }
        console.log('user');
        axios.post('http://localhost:5000/register', user)
        .then(res => console.log(res.data));
        
        window.location = '/creat'
    }

     
    render () {
        return (
            <div clasName="page">
                <h2>Register</h2>
                <form>
                    <label htmlFor="register-email">Email</label>
                    <input type="email" onChange={this.changeEmail()}></input>

                    <label htmlFor="register-display-name">Name</label>
                    <input type="text" onChange={this.changeName()}></input>

                    <label htmlFor="register-password">Password</label>
                    <input type="password" onChange={this.changePassword()}></input>

                    
                    <input type="submit" value="Register" onSubmit={this.handelSubmet()}/>
                </form>
                
            </div>
        )
    }
}