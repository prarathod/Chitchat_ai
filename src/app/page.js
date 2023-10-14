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
import SidePanel from "@/Components/SidePanel";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  //

  const [sidepanelWidth, setSidepanelWidth] = useState(0);

  const openNav = () => {
    setSidepanelWidth(60);
  }

  const closeNav = () => {
    setSidepanelWidth(0);
  }

  //
  return (
    <div className={styles.mainContainer}>
      {/* Hamberger */}
      <nav className={`navbar-expand-lg navbar-light ${styles.hamberger}`}>
        <div>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            onClick={()=> openNav()}
          >
            <Image src={MenuImg} alt="My SVG Image" width={24} height={24} />
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
      <SidePanel closeNav={closeNav} sidepanelWidth={sidepanelWidth}/>
    
      {/* left container */}
      <div className={styles.leftContainer}>
        <div style={{ marginBottom: "-40rem" }}>
          <div className={styles.leftContainerinner}>
            <Navbar />
            <Chats />
            <PdfDownload />
          </div>

        </div>

        {/* apply profile inside full screen later on */}
        <div className={styles.nonhambergerProfilecontainer}>
          <Profile />
        </div>
      </div>

      {/* middle container */}
      <div className={styles.mainMiddleContainer}>
        <div className={styles.middleChatSearchContainer}>
          <div className={styles.firstChildContainer}>
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
