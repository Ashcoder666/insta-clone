import React from 'react'
import {useNavigate} from 'react-router-dom'
import{autho} from '../firebase-config'
import Post from './Post'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import { useState,useEffect } from 'react'

const Homepage = () => {
    const nav= useNavigate()
    const [usern,setusern] = useState('')
    const [test,settest] = useState('')


    onAuthStateChanged(autho,(currentUser)=>{
            setusern(currentUser)
    })

    const logout = async ()=>{
        await signOut(autho)
        settest('hello')
        nav('/')
       
    }

    // useEffect(() => {
      
    // }, [test,nav])

    return (
        <div className='Homepage' style={{marginLeft:'500px'}}>
            

            <div className="app-header">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" 
      className="app_headerImage" />
      <button onClick={()=>{nav('/Addpost')}} className='ui button blue addpostbtn' style={{marginLeft:'150px'}}>Add Post</button>
      <button className='logoutbtn button ui red' onClick={logout}>LogOut</button>
    </div>

    <Post />
    
   
   



        </div>
    )
}

export default Homepage


{/* <div style={{marginLeft:'500px'}}>
<header style={{display:'flex',justifyContent:'space-between', width:'400px', alignContent:'center',alignItems:'center'}}>
    <h2>Blog</h2>

    <div>
        <h1>{usern.displayName}</h1>
        <button onClick={()=>{nav('/Addpost')}}>+</button>
        <button onClick={logout} >LogOut</button>
    </div>


</header>

 <Post />

</div> */}