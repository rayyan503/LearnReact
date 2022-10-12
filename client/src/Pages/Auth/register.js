import axios from 'axios'
import React, { useState } from 'react'
import './styles.css'

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const body = {
            name:username,
            email:email,
            password:password
        }
        axios.post(`http://localhost:5000/api/v1/register`, body).then(res => console.log(res)).catch(err => console.log(err))
    }

  return (
    <section className='login-page'>
        <div className="wrapper-form">
            <h5 className='text-center'>Register Page</h5>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-submit'>Login</button>
            </form>
        </div>
    </section>
  )
}

export default Register