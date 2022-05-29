import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreatePost = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const createPost = (e) => {
    e.preventDefault();

    if (post.title === '' || post.content === '') return alert('Please fill all the textboxes!');

    axios.post('http://localhost:8080/api/create', { data: post })
      .then(res => res)
      .catch(err => console.log(err))

      navigate('/posts')
  }
  return (
    <div className='post-form-container'>
        <h1>Create Post</h1>
        <form onSubmit={(e) => createPost(e)}>
            <div className="input-group">
                <label htmlFor="title">Title: </label>
                <input 
                  type="text" 
                  id='title' 
                  value={post.title}
                  onChange={(e) => setPost({...post, title: e.target.value})}
                />
            </div>
            <div className="input-group">
                <label htmlFor="content">Content: </label>
                <textarea 
                  id='content'
                  value={post.content}
                  onChange={(e) => setPost({...post, content: e.target.value})}
                ></textarea>
            </div>
            <button id='postSubmitBtn'>Submit</button>
        </form>
    </div>
  )
}

export default CreatePost