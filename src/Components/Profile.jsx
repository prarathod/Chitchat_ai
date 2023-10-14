import React from "react";
import styles from "../Style/profile.module.css";
import profileImg from "../ImageContainer/profileImg.svg";
import Image from "next/image";

export const Profile = () => {
  // Width
  // 16px
  // Height
  // 16px
  // Top
  // 918px
  // Left
  // 214px
  // Rotation
  // -90°
  return (
    // <div className={`${styles['profileContainer']} `} style={{border:'1px solid blue'}}>
    //       <Image className={styles.imgtag} src={profileImg} alt="My logo Image" width={35} height={35} style={{marginTop:'5px'}} />

    //     <div className='d-flex gap-3' >
    //         <p className='mt-3  '>  Dave Parker</p>
    //         <span className={` pt-3  ${styles['span']}`}   >...</span>

    //     </div>
    // </div>
    <div
      style={{
        display: "flex",
        borderRadius: "60px",
        background: "rgba(209, 142, 226, 0.11)",
        padding:'7px',
        alignItems:'center',
        fontWeight:600
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <Image src={profileImg} alt="My logo Image" width={35} height={35} />
      </div>
      <div style={{ flexGrow: 2 }}>
        Dave Parker
      </div>
      <div style={{ flexGrow: 1.5 , paddingBottom:'5px'}}>
        ...
      </div>
    </div>
  );
};
