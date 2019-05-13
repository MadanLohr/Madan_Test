import React from 'react'
import { Link } from 'react-router-dom'

 const Welcome = () => {
  return (
    <div className="container">
        <p className="center">Please Register to continue</p>
        <Link to="/registration">
              <button className="btn valign-wrapper center-align">Register</button>
        </Link>
    </div>
  )
}

export default Welcome;