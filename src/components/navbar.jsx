import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav>
         
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="#desc">Description</a></li>
          <li><a href="/aboutus">About Us</a></li>

        </ul>
        <div className='head'>
      <main>
        <h1>SCAMFREE</h1>
        <p>Check for spam email with us.</p>
      </main>
    </div>
      </nav>
      
    </div>
  )
}

export default Navbar
