import styles from "../Style/sidePaneltest.module.css";
import { Profile } from "./Profile";
import { Chats } from "./Chats";
import { PdfDownload } from "./PdfDownload";
import { Navbar } from "./Navbar";
import logo from "../ImageContainer/logoimg.svg"
import Image from 'next/image';

const SidePanel = ({ closeNav, sidepanelWidth }) => {
  return (
    <div>
      <div
        id="mySidepanel"
        className={styles.sidepanel}
        style={{
          width: sidepanelWidth + "%",
          boxShadow: sidepanelWidth
            ? "350px 0px 100px 100px rgba(15, 17, 31, 0.45)"
            : "",
            overflow: 'scroll'
        }}
      >
        <div className={styles.sidepanelNav}>
          <div
            style={{
              flexGrow: 10,
              backgroundColor: "#f3f2f2",
              height: "100vh",
            }}
          >
            {/* need to give this  style={{ paddingTop: '26px', paddingLeft: '24px' }} the close tag not visible bcaz of padding */}
            <div className={styles.sidepanelNavHorizontal} >
              <div style={{
                color: 'black',
                paddingRight: '20px',
                alignItems: 'start',
                display: 'flex',
                marginBottom: '24px'
              }}>
                {/* <Navbar /> */}
                <Image src={logo} alt="My logo Image" width={160} height={30.23} style={{ color: 'black' }} />
              </div>
              <div style={{
                width: '224px',
                height: '40px',
                borderRadius: '50px',
                backgroundColor: '#6BA690'
              }}>
                <button style={{ marginTop: '5px', backgroundColor: '#6BA690', border: 'none', color: '#FFFFFF' }}>+ New Chats</button>
              </div>
              <div >
                 <Chats/>
              </div>
              {/* <div>
                <PdfDownload/>
              </div> */}
              <div>
                <Profile />
              </div>
            </div>
          </div>
          <div
            onClick={() => closeNav()}
            style={{ flexGrow: 2, color: "#f3f2f2", paddingTop: "25px" }}
          >
            X
          </div>
        </div>
      </div>
    </div >
  );
};

export default SidePanel;
