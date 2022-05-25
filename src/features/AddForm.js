import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"//generate random id 
import {postAdded} from "./PostSlice"
import { selectAllusers } from './users/userSlice'


function AddForm() {
    const dispatch =  useDispatch();
    const [title,settitle]= useState('')
    const [content, setContent] = useState('')
    
    const [userid, setuserid] = useState('')
     const users = useSelector(selectAllusers);
  
    const onTitlechanged = e=>{
        settitle(e.target.value)
    }
    const contentchanged  = e=>{
        setContent(e.target.value)
    }
    const onAuthorChanged  = e=>{
        setuserid(e.target.value)
    }
    const savePostClicked = ()=>{
        if(title && content){
            dispatch(
                postAdded(title,content,userid)
            )
            settitle("")
            setContent("")
            setuserid("")
        }

    }
const beSaved= Boolean(title) && Boolean(content) & Boolean(userid)// check this states existed
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
        
  return (
      <section> 
          <h2>Add new post</h2>
          <form>
              <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitlechanged}
              />
     <label htmlFor="postAuthor">Author:</label>
                <select
                 id="postAuthor"
                  value={userid} 
                  onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
        

              <lable htmlFor="postContent">content</lable>
              <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={contentchanged}
              />
              <button
               type='button'
               onClick={savePostClicked}
               disabled ={!beSaved}
               >Save post</button>
          </form>
      </section>
    
  )
}

export default AddForm