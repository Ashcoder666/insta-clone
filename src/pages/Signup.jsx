import React from 'react'
import { useState,useEffect } from 'react'
import {autho} from '../firebase-config'
import {createUserWithEmailAndPassword,onAuthStateChanged,updateProfile} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

  const  nav=useNavigate()
 



    const [user,setUser] = useState('')
    const [userName,setuserName] =useState('')
    const [signupEmail,setsignupEmail] =useState('')
    const [signupPass,setsignupPass] =useState('')


        const registerAccount =async ()=>{
            
            await createUserWithEmailAndPassword(autho,signupEmail,signupPass)
            onAuthStateChanged(autho,(currentUser)=>{
                if(currentUser){
                    nav('../homepage')
                }        
          
        })
    }


        

      
         useEffect(() => {
            onAuthStateChanged(autho,(currentUser)=>{
                if(currentUser){
                    updateProfile(autho.currentUser,{
                        displayName:userName
            })}})
         }, [userName])
              
     

    return (
       
        <div id="wrapper">
        <div className="main-content">
          <div className="header">
            <img src="https://i.imgur.com/zqpwkLQ.png" alt=''/>
          </div>
          <div className="l-part">
          <div className="overlap-text">
              <input type="text"  className="input-2" onChange={(e)=>{setuserName(e.target.value)}} placeholder='UserName' />
             
            </div>
            <input type="text" placeholder="Email" className="input-1" onChange={(e)=>{setsignupEmail(e.target.value)}}/>
            <div className="overlap-text">
              <input type="password" placeholder="Password" className="input-2" onChange={(e)=>{setsignupPass(e.target.value)}}/>
             
            </div>
           
              <input type="button" value="Sign Up & Log in" className="btn" onClick={registerAccount} />
  
          </div>
        </div>
       
      </div>

    )
}

export default Signup


{/* <div style={{marginLeft:'600px'}}>
<h1>Sign Up</h1>
<input type="text" onChange={(e)=>{setuserName(e.target.value)}} placeholder='UserName' />
<br />
<input type="text" onChange={(e)=>{setsignupEmail(e.target.value)}} placeholder='Email' />
<br />
<input type="text" onChange={(e)=>{setsignupPass(e.target.value)}} placeholder='Password' />
<button onClick={registerAccount}>SignUp</button>
</div> */}