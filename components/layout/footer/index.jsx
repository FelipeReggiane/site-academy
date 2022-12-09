import styles from "./footer.module.css";
import { Images } from "../../../assets/index.ts";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <Link href={"https://rethink.dev/"}>
        <img
          src={Images.logoFooter.src}
          alt="Logo Rethink"
          width="140px"
          height="30px"
        />
      </Link>
      <p>Powered by Felipe</p>
      <div className={styles.footer_linkedin}>
        <Link href={"https://www.linkedin.com/in/felipe-reggiane-9bb30a224/"}>
          <img
            src={Images.linkedinLogo.src}
            alt="Logo Linkedin"
            width="26px"
            height="24px"
          />
        </Link>
      </div>
    </div>
  );
}
