import React, { useEffect, useState } from 'react'
import './Navbar.css'


function Navbar() {


//create state

const [show,setShow]=useState(false)

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(window.scrollY>350){
            setShow(true)
        }
            else{
                setShow(false)
            }
    })
})


    return (
        <div className={`nav ${show && 'navBlack'}`}>
            <img className='logo' src="https://i.postimg.cc/JzpCPbLd/pngwing-com.png" alt="" />
        </div>
    )
}

export default Navbar