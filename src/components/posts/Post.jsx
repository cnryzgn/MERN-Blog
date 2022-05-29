import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostEditModal from './PostEditModal'

const Post = () => {
    const [editModal, setEditModal] = useState(false)
    const [postData, setPostData] = useState()
    
    // READ
    useEffect(() => {
        axios.get('http://localhost:8080/api/')
            .then(res => res.data)
            .then(data => setPostData(data))
            .catch(err => console.log(err))
    }, [])

    // DELETE
    const deleteItem = (id) => {
        axios.delete(`http://localhost:8080/api/delete/${id}`)
            .then(res => res)
            .catch(err => console.log(err))
    }

    // UPDATE
    const updateItem = (id, data) => {
        if (data.newTitle === '' || data.newContent  === '') return alert('Please fill the textboxes!')
        axios.put(`http://localhost:8080/api/update/${id}`, data)
            .then(res => res)
            .catch(err => console.log(err))
    }

  return (
    <div className='posts-container'>
        <h1>POSTS</h1>
        <ul className="posts">
            {
                postData && (
                    postData.map(post => (
                        <li key={post._id}>
                            <h2>{ post.title }</h2>
                            <p>{ post.content }</p>
                            <div className="btns">
                                <button id='delBtn' onClick={() => {deleteItem(post._id); window.location.reload();}} >Delete</button>
                                <button 
                                    id='editBtn' 
                                    onClick={() => setEditModal(prevState => !prevState)}
                                >Edit</button>
                                { editModal 
                                    ? <PostEditModal 
                                        updateItem = {updateItem}
                                        setEditModal={setEditModal}
                                        id={post._id}
                                        title={post.title}
                                        content={post.content}
                                      />
                                    : null }
                            </div>
                            <span>Date: {post.date}</span>
                        </li>
                    ))
                )
            }
        </ul>
    </div>
  )
}

export default Post