import React, { Component } from 'react'

class Login extends Component {

    state={
        email:"",
        password: ""
    }
    
     handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = e.target
        
         if (email.value === this.props.email && password.value === this.props.password){
            this.props.history.push('/home')
        }
    }

     onChangeHandler = (e) =>{
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name] : val
        })
     }

     isValid = () =>{
         const {email, password} = this.state
         return email && password
     }
    
    render(){
        const isEnabled = this.isValid()
    
  return (
    <div className="container">
      <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" placeholder="Email Address" onChange={this.onChangeHandler}/>
              <input type="password" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
        
              <button className="btn" disabled={!isEnabled}>Login</button>
        
      </form>
    </div>
        )
    }
}
export default Login;