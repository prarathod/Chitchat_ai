"use client"
import React from 'react'

import { Navbar } from './Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from "../Style/chat.module.css"
import chatsectionimg from "../ImageContainer/chatsectionimg.svg"
import Image from 'next/image';
import '../Style/font.module.css'
const data=[
    {
        'name':'Give me stats around my used vehicle sales?'
    },
    {
        'name':'Give me stats around my used vehicle sales?'
    },
    {
        'name':'working with A.I '
    },
    {
        'name':'how to deal with stress'
    },
    {
        'name':'how to deal with stress'
    },
    {
        'name':'Give me stats around my used vehicle sales?'
    },
    {
        'name':'Give me stats around my used vehicle sales?'
    },
]
//{styles.textwrapper}

export const Chats = () => {
  return (
    <div className='border-top '>

        <div className='d-flex justify-content-between' style={{padding:'30px 20px 20px'}}>
            <h4 className={styles.textwrapper}   > <b >Chats</b> </h4>                 
            <i className={`bi bi-plus fs-4 ${styles['iconplus']}`} ></i>
        </div>
        <div style={{padding:'0px 30px 20px 20px'}}>
       
        {
                data.map((item,index)=>{
                    return <div className='d-flex'key={index} style={{marginBottom: '20px'}} >
                              <div  >
                                {/* <img  src="http://3.135.232.212/images/comment.png" alt="" /> */}
                                <Image src={chatsectionimg} alt="My chatsectionimg Image" width={16} height={16} style={{color:'black',marginRight: '8px'}}/>
                              </div>
                             <p className={`${styles['historytext']}`} style={{margin:"4px 0"}}  >{item.name}</p>
                  
                          </div>
                })
            }
          
        </div>
    </div>
  )
}
