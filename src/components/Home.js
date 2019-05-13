import React from 'react'

 const Home = (props) => {
  return (
    <div className="container">
          <p><strong>First Name</strong> : {props.firstName}</p>
          <p><strong>Last Name</strong> : {props.lastName}</p>
          <p><strong>Email Address</strong> : {props.email}</p>
          <p><strong>Phone Number</strong> : {props.phone}</p>
    </div>
  )
}

export default Home