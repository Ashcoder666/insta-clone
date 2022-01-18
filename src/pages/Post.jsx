import React from 'react'
import { useEffect,useState } from 'react'
import {getDocs,collection} from'firebase/firestore'
import {db} from '../firebase-config'
import './Post.css' 
import Avatar from '@material-ui/core/Avatar';
const Post = () => {

 const postcollectionref= collection(db,"posts")

    const [post,setPost] = useState([])


    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(postcollectionref)
            setPost(data.docs.map((doc) =>({...doc.data(), id: doc.id}) ));
        }
        getPosts()
    },[])
    return (
        <div>
           {post.map((obj)=>{
               return(
                <div className='post'>
                <div className='post_header'>
                <Avatar 
                 className='post_avatar'
                 alt={obj.username}
                 src='/static/images/avatar/1.jpg'
                 />
     
                 <h3>{obj.username}</h3>
     
                </div>
                
                 <img className='post_image' src={obj.imageurl} alt="ss" />
     
                 <h4 className='post_text'><strong>{obj.username}:</strong> {obj.caption}</h4>
             </div> 
               )
           })}
        </div>
    )
}



export default Post


