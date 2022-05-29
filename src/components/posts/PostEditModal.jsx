import React, { useState } from 'react'

const PostEditModal = (props) => {
    const [newPost, setNewPost] = useState({
        newTitle: '',
        newContent: ''
    })

  return (
    <div className="editModal-container">
        <div className='editModal'>
            <h1>Edit Form</h1>
            <form>
                <div className="edit-input-group">
                    <label htmlFor="newTitle">New Title</label>
                    <input 
                        type="text" 
                        onChange={(e) => setNewPost({...newPost, newTitle: e.target.value })}
                    />
                </div>
                <div className="edit-input-group">
                    <label htmlFor="newContent">Test Content</label>
                    <textarea 
                        type="text" 
                        onChange={(e) => setNewPost({...newPost, newContent: e.target.value })}
                    ></textarea>
                </div>
                <button 
                    id='editModalBtn' 
                    onClick={() => props.updateItem(props.id, newPost)}
                >Edit</button>
                <i 
                    id="closeBtn" 
                    className="fa-solid fa-xmark"
                    onClick={() => props.setEditModal(prevState => !prevState)} 
                ></i>
            </form>
        </div>
    </div>
  )
}

export default PostEditModal