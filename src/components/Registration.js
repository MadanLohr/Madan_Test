import React, { Component } from 'react'

class Registration extends Component {
   

    onChangeHandler = (e) =>{
        e.preventDefault();
        const name = e.target.name
        const val = e.target.value

        this.props.handler(name, val)
        
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.history.push('/login')

    }

    isValid() {
        const { firstName, lastName, email, password, phone } = this.props
        return firstName && lastName && email && password && phone;
    }


  render() {
      const isEnabled = this.isValid()
      console.log(this.props)
    return (
      <div className="container">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.onChangeHandler} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.onChangeHandler}/>
                <input type="email" name="email" placeholder="Email" onChange={this.onChangeHandler}/>
                <input type="password" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
                <input type="tel" name="phone" placeholder="Phone number" onChange={this.onChangeHandler}/>
            
                <button className="btn" disabled={!isEnabled}>submit</button>
            
        </form>
      </div>
    )
  }
}

export default Registration;