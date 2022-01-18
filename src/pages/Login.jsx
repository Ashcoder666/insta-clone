import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {autho} from '../firebase-config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import './login.css'
const Login = () => {
    
    const [loginEmail,setloginEmail]= useState('')
    const [loginPass,setloginPass]= useState('')

    const logi = async ()=>{
      try{
      await  signInWithEmailAndPassword(autho,loginEmail,loginPass)
      nav('/homepage')
      }
      catch(error){
            alert(error.message)
      }
    }



  
    const nav= useNavigate()
    return (
        
        <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" alt=''/>
          </div>
          <div className="l-part">
            <input type="text" onChange={(e)=>{setloginEmail(e.target.value)}}  placeholder='email..' className="input-1" />
            <div className="overlap-text">
              <input type="password" onChange={(e)=>{setloginPass(e.target.value)}} placeholder="Password" className="input-2" />
             
            </div>
            <input type="button" onClick={logi} value="Log in" className="btn" />
          </div>
        </div>
        <div className="sub-content">
          <div className="s-part">
            Don't have an account? <button onClick={()=>{nav('/signup')}}>SignUp</button>
          </div>
        </div>
      </div>

    )
}

export default Login

// <div style={stylediv}>
//             <h1>Login</h1>
//             <input type="text" onChange={(e)=>{setloginEmail(e.target.value)}}  placeholder='email..' />
//             <br />
//             <input type="text" onChange={(e)=>{setloginPass(e.target.value)}} placeholder='...password' />
//             <br />
//             <button onClick={logi}>Sign in</button>

// <div>
//     <h2>Dont have an account</h2> <button onClick={()=>{nav('/signup')}}>sign up</button>
// </div>

//         </div>