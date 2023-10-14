"use client"
import React from 'react'
import style from "../Style/navbar.module.css"
import logo from "../ImageContainer/logoimg.svg"
import Image from 'next/image';
export const Navbar = () => {

  return (
    <div style={{padding: '24px 30px'}}>
        {/* <img src="http://3.135.232.212/images/logo.png" alt="" /> */}
        <Image src={logo} alt="My logo Image" width={160} height={30.23} style={{color:'black'}} />
    </div>
  )
}
