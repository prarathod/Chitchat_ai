"use client";
import React, { useState } from "react";
import styles from "../Style/search.module.css";
import searchbtnimg from "../ImageContainer/searchbtnimg.svg";
import Image from "next/image";
import "../Style/font.module.css";

export const Search = () => {
  const [value, setValue] = useState(false);
  const handleShowTyping = () => {
    setValue(true);
  };

  const handleHideTyping = () => {
    setInterval(() => {
      setValue(false);
    }, 3000);
  };
  // input-group=searchContainerInsidebox
  return (
    <>
      {value ? <i className={styles.typingtext}>typing...</i> : []}
      {/* <div className={styles.searchContainer}>
        <div
          className={`  d-flex justify-contant-between`}
          style={{ width: "100" }}
        >
          <input
            type="text"
            style={styles.inputStyle}
            placeholder="Send us a Message"
            onKeyDown={handleShowTyping}
            onKeyUp={handleHideTyping}
          />
          <div className={styles.img}>
            <Image
              src={searchbtnimg}
              alt="My searchbtnimg Image"
              width={24}
              height={24}
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div> */}

      <div style={{display:'flex'}}>
        <input
          type="text"
          placeholder="Send us a Message"
          onKeyDown={handleShowTyping}
          onKeyUp={handleHideTyping}
          className={styles.inputStyle}
        />
        <Image
              src={searchbtnimg}
              alt="My searchbtnimg Image"
              width={24}
              height={24}
              style={{ color: "black" }}
            />
      </div>
    </>
  );
};
