import styles from "../Style/sidePaneltest.module.css";
import { Profile } from "./Profile";
import { Chats } from "./Chats";
import { PdfDownload } from "./PdfDownload";
import { Navbar } from "./Navbar";

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
            <div className={styles.sidepanelNavHorizontal}>
              <div>
                <Navbar />
              </div>
              <div>
                <button>+ New Chats</button>
              </div>
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
    </div>
  );
};

export default SidePanel;
