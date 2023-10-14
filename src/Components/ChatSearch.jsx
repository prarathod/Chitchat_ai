"use client"
import React from 'react'
import styles from "../Style/ChatSearch.module.css"
import responsechatimg from "../ImageContainer/responseimg.svg"
import Image from 'next/image';
import '../Style/font.module.css'
export const ChatSearch = () => {
  // max-width: 50px;
  //   margin-right: 15px;
  return (
    <div className={`d-flex   align-items-start  ${styles['maincontainer']} `}>
      {/* <img className={styles.img} src="http://3.135.232.212/images/icon-ans.png" alt="" /> */}
      <div className={styles.img}> 

      <Image  src={responsechatimg} alt="My responsechatimg Image" width={50} height={50} style={{color:'black'}} />
      </div>

      <div className={styles.textContainer}>
        <p>Please enter your query or type out the question you would like to ask.</p>
      </div>
    </div>
  )
}
