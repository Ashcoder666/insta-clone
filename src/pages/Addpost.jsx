import React from 'react'
import {useState,useEffect} from 'react'
import {db} from '../firebase-config'
import {collection,addDoc} from 'firebase/firestore'
import {autho} from '../firebase-config'
import { onAuthStateChanged } from 'firebase/auth'

const Addpost = () => {

    const postcollectionref = collection(db,"posts")
    const [showUser,setShowUser]= useState('')
    const [cap,setCap] =useState( ' ')
    const [img,setimg] =useState(' ')

    useEffect(() => {
        onAuthStateChanged(autho,(currentUser)=>{
            setShowUser(currentUser.displayName)
        })
    }, [cap,img,showUser])

 


    const submitHandler = async ()=>{
      await addDoc(postcollectionref,{caption:cap,imageurl:img,username:showUser})
      //if authuser corremct then setsttse auth.displayname and upadate ita username
      
    
        
       
    }

   

    return (
        <div style={{marginLeft:'600px'}}>
            <h1>Add Post</h1>
            <input onChange={(event)=>{ setCap(event.target.value)}} type="text" placeholder='caption' style={{height:'200px',width:'300px'}} />
            <br />
            <input onChange={(event)=>{ setimg(event.target.value)}} type="text" placeholder='imageurl' style={{width:'300px'}}/>
            <br />
            <button style={{marginTop:'15px'}} onClick={submitHandler} className='ui button blue center'>AddPost</button>
        </div>
    )
}

export default Addpost
