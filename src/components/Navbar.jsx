import React, { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav>
        <a href='/' className="logo">
          <p>BL<i class="fa-solid fa-circle-dot"></i>G</p> 
          {/* <i class="fa-solid fa-compact-disc"></i> */}
        </a>
        <ul className={toggle ? 'toggleMenuOpen nav-list' : 'nav-list'}>
            <li><a href="/posts">Post</a></li>
            <li><a href="/createpost">Create Post</a></li>
        </ul>
        <div
          className="hamburger-menu"
          onClick={() => setToggle(prevState => !prevState)}
        >
          {
            toggle 
              ? <i className="fa-solid fa-xmark"></i>
              : <i className="fa-solid fa-bars"></i>
          }
        </div>
    </nav>
  )
}

export default Navbar