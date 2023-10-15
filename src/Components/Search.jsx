"use client";
import React, { useState } from "react";
import styles from "../Style/search.module.css";
import searchbtnimg from "../ImageContainer/searchbtnimg.svg";
import Image from "next/image";
import "../Style/font.module.css";

export const Search = () => {
  const [value, setValue] = useState(false);

  const debounce = (delay) => {
    let timer;
    setValue(true);


      clearTimeout(timer);
      timer = setTimeout(() => {
        setValue(false);
      }, delay);
  };
  return (
    <>
      {value ? <i className={styles.typingtext} style={{marginLeft:'-13px'}}>typing...</i> : []}

      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Send us a Message"
          onChange={()=> debounce(1500)}
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
