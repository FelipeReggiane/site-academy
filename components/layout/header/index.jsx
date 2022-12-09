import styles from "./header.module.css";
import { Images } from "../../../assets/index.ts";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.haeader_container}>
      <Link href={{ pathname: "/" }}>
        <img
          src={Images.logoHeader.src}
          alt="Logo Rethink"
          width="140px"
          height="30px"
        />
      </Link>
      <div className={styles.header_links}>
        <Link href={{ pathname: "/posts" }}>
          <div className={styles.header_link}>Projetos</div>
        </Link>
        <Link href={{ pathname: "/posts" }}>
          <div className={styles.header_link}>Eventos</div>
        </Link>
        <Link href={{ pathname: "/posts" }}>
          <div className={styles.header_link}>Equipe</div>
        </Link>
      </div>
    </div>
  );
}
