import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import Post from './components/posts/Post'
import CreatePost from './components/posts/CreatePost'
  
  const App = () => {
    const [postData, setPostData] = useState()
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Hero /> } />
        <Route path='/posts' element={ <Post /> } />
        <Route path='/createpost' element={ <CreatePost /> } />
      </Routes>
    </Router>
  )
}

export default App