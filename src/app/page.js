"use client";
import { Chats } from "@/Components/Chats";
import { ChatSearch } from "@/Components/ChatSearch";
import { Search } from "@/Components/Search";
import { Navbar } from "@/Components/Navbar";
import styles from "../Style/page.module.css";
import { PdfDownload } from "@/Components/PdfDownload";
import { MostAskQues } from "@/Components/MostAskQues";
import { Profile } from "@/Components/Profile";
import { useState } from "react";
import Carlyticsimag from "../ImageContainer/Group.svg";
import PlusSign from "../ImageContainer/plus-square.svg";

import MenuImg from "../ImageContainer/menu.svg";
import closeimg from "../ImageContainer/closeimg.svg";
import Image from "next/image";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={styles.mainContainer}>
      {/* Hamberger */}
      <nav className={`navbar-expand-lg navbar-light ${styles.hamberger}`}>
        <div>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            onClick={toggleMenu}
          >
            {!menuOpen && (
              <Image src={MenuImg} alt="My SVG Image" width={24} height={24} />
            )}
          </button>
        </div>
        <div>
          <Image
            className={styles.HambergerCarlyticsimag}
            src={Carlyticsimag}
            alt="My Carlytics Image"
            width={120}
            height={22}
          />
        </div>
        <div>
          <Image
            className={styles.HambergerCarlyticsimag}
            src={PlusSign}
            alt="My PlusSign Image"
            width={24}
            height={24}
          />
        </div>
      </nav>

      {/* left container */}
      <div className={styles.leftContainer}>
        <div style={{ marginBottom: "-40rem" }}>
          <div className={styles.leftContainerinner}>
            <Navbar />
            <Chats />
            <PdfDownload />
          </div>

          {/* hamberger */}
          {/* <div className={styles.hamberger}>
            <nav className="navbar-expand-lg navbar-light ">
              <button
                className="navbar-toggler bg-dark"
                type="button"
                onClick={toggleMenu}
              >
                {!menuOpen ? (
                  <Image
                    src={MenuImg}
                    alt="My SVG Image"
                    width={24}
                    height={24}
                  />
                ) : (
                  ""
                )}
              </button>
              <div style={{ display: "flex" }}>
                <div
                  className={`collapse navbar-collapse bg-white  ${
                    menuOpen ? "show" : ""
                  }`}
                >
                  <Navbar />
                  <Chats />
                  <PdfDownload />
                  <div className={styles.hambergerProfilecontainer}>
                    <Profile />
                  </div>
                </div>
                {menuOpen && (
                  <button
                    className={`btn  ${styles["closebtn"]}`}
                    onClick={closeMenu}
                  >
                    <Image
                      src={closeimg}
                      alt="My SVG Image"
                      width={24}
                      height={24}
                    />
                  </button>
                )}
              </div>
            </nav>
            <Image
              className={styles.HambergerCarlyticsimag}
              src={Carlyticsimag}
              alt="My Carlytics Image"
              width={119}
              height={22}
            />
            <Image
              className={styles.HambergerCarlyticsimag}
              src={PlusSign}
              alt="My PlusSign Image"
              width={24}
              height={24}
            />
          </div> */}
        </div>

        {/* apply profile inside full screen later on */}
        <div className={styles.nonhambergerProfilecontainer}>
          <Profile />
        </div>
      </div>

      {/* middle container */}
      <div className={styles.mainMiddleContainer}>
        <div className={styles.middleChatSearchContainer}>
          <div>
            <ChatSearch />
          </div>
          <div className={styles.bottomSticky}>
            <Search />
          </div>
        </div>
        {/* right container */}
        <div className={styles.mostAskQContainer}>
          <MostAskQues />
        </div>
      </div>
    </div>
  );
}
