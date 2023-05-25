import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>

    // nav link have one more extra class in html (active)
  )
}

export default Navigation


{/*
 HTML WAY OF NAVBAR
<div className='nav'>
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
<a href="/blog">Blog</a>
</div> */}


{/* 
  METHOD 2 THEY ARE REACT COMPOMNENTS
<div className='nav'>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/blog">Blog</Link>
</div> */}