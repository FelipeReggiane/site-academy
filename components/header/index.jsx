import styles from "./header.module.css";
import { Images } from "../../assets/index.ts";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  return (
    <div className={styles.haeader_container}>
      <Link href={{ pathname: "/" }}>
        <img
          src={Images.logoHeader.src}
          alt="Logo Rethink"
          className={styles.header_img}
        />
      </Link>
      <div className={styles.header_links}>
        <Link className={styles.header_link} href={{ pathname: "/sobre" }}>
          <p>Projetos</p>
        </Link>
        <Link className={styles.header_link} href={{ pathname: "/sobre" }}>
          <p>Eventos</p>
        </Link>
        <Link className={styles.header_link} href={{ pathname: "/sobre" }}>
          <p>Equipe</p>
        </Link>
      </div>
    </div>
  );
}
