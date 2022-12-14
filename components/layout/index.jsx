import styles from "./layout.module.css";

import Header from "../header";
import Footer from "../footer";

export default function Layout({ children }) {
  return (
    <div className={styles.Layout_container}>
      <div className={styles.Layout_containerInner}>
        <Header />
        <div className={styles.Layout_children}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
