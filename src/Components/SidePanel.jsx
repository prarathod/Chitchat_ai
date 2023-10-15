import styles from "../Style/sidePaneltest.module.css";
import { Profile } from "./Profile";
import { Chats } from "./Chats";
import { PdfDownload } from "./PdfDownload";
import { Navbar } from "./Navbar";
import logo from "../ImageContainer/logoimg.svg";
import Image from "next/image";
import crossCircle from '../ImageContainer/fi-rr-cross-circle.svg';

const SidePanel = ({ closeNav, sidepanelWidth }) => {
  return (
    <div>
      <div
        id="mySidepanel"
        className={styles.sidepanel}
        style={{
          width: sidepanelWidth + "%",boxShadow: sidepanelWidth
          ? "350px 0px 100px 100px rgba(15, 17, 31, 0.45)"
          : "",}}
      >
        <div className={styles.sidepanelNav}>
          <div
            style={{
              flexGrow: 10,
              backgroundColor: "#f3f2f2",
              height: "100vh",
              // boxShadow: sidepanelWidth
              //   ? "350px 0px 100px 100px rgba(15, 17, 31, 0.45)"
              //   : ""
            }}
          >
            {/* need to give this  style={{ paddingTop: '26px', paddingLeft: '24px' }} the close tag not visible bcaz of padding */}
            <div className={styles.sidepanelNavHorizontal}>
              <div
                style={{
                  padding: "20px",
                  textAlign:'left'
                }}
              >
                {/* <Navbar /> */}
                <Image
                  src={logo}
                  alt="My logo Image"
                  width={160}
                  height={30.23}
                  style={{ color: "black" }}
                />
              </div>
              <div
                style={{
                  padding:"5px 30%",
                  width:'fit-content',
                  borderRadius: "50px",
                  backgroundColor: "#6BA690",
                  textAlign:'center',
                  margin:'auto',
                }}
              >
                <button
                  style={{
                    backgroundColor: "#6BA690",
                    border: "none",
                    color: "#FFFFFF",
                  }}
                >
                  + New Chat
                </button>
              </div>
              <div style={{padding:'20px'}}>
                <Chats />
              </div>
              <div>
                <PdfDownload/>
              </div>
              <div style={{padding:'20px'}}>
                <Profile />
              </div>
            </div>
          </div>
          <div
            onClick={() => closeNav()}
            style={{
              flexGrow: 2,
              color: "#f3f2f2",
              paddingTop: "25px",
              paddingLeft: '15px'
            }}
          >
            <Image src={crossCircle} width={24} height={24}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
