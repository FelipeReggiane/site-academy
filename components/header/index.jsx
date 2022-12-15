import styles from "./header.module.css";
import { Images } from "../../assets/index.ts";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

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
      <div className={styles.header_menu_show}>
        <button className={styles.header_menu_button} onClick={toggleIsOpen}>
          <img src={Images.Menu.src} alt="" className={styles.img} />
        </button>
      </div>
      <div
        className={
          isOpen
            ? styles.header_modal_container_open
            : styles.header_modal_container
        }
      >
        <a href="/" className={styles.header_modal_link}>
          Home
        </a>
        <a href="/sobre" className={styles.header_modal_link}>
          Projetos
        </a>
        <a href="/sobre" id="eventos" className={styles.header_modal_link}>
          Eventos
        </a>
        <a
          href="/sobre"
          onBlur={toggleIsOpen}
          className={styles.header_modal_link}
        >
          Equipe
        </a>
      </div>
    </div>
  );
}
