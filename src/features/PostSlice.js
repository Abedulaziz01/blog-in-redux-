import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns';
const initialState = [
    { id :'1', 
    title: 'learning redux toolkit', 
    content:"i have heaed good things",
  date :sub(new Date(),{minutes:10}).toISOString(),
  reactions: {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0
}
},

    { id :'2', 
    title :'slice',
     content :"second content",
      date :sub(new Date(),{minutes:7}).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
    }
]

const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
       postAdded: {
         reducer(state,action){
                 state.push(action.payload)// payload the form data 
       },
       prepare(title,content,userid){
         return {
           payload:{
             id:nanoid(),
             title,
             content,
             date: new Date().toISOString(),
             userid,
             reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
          }

           }
         }
       }  
      },
      reactionAdded(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.find(post => post.id === postId)
        if (existingPost) {
            existingPost.reactions[reaction]++
        }
    }


  }
});

export const {postAdded, reactionAdded} = PostSlice.actions
export const selectAllPosts= (state)=>state.posts;

export default PostSlice.reducer