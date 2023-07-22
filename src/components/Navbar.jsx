import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar_container'>
        
        <div>
            <img src='./fireworks.png' style={{width: "50px"}} alt="" />
        </div>


        <div className='navbar_menu'>
            <ul>
                <li>
                    <img src="" alt="" />
                </li>
                <li>
                    Counseling
                </li>
                <li>
                    Training
                </li>
                <li>
                    About US
                </li>
                <li>
                    Donate
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar