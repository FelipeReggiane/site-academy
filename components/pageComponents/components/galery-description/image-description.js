import { useState } from "react";
import styles from "./image-description.module.css";

const ImageDescription = (props) => {
  console.log(props);
  return (
    <div className={styles.container_par}>
      <div className={styles[`container${props.index % 2}`]}>
        <div className={styles.container_assets}>
          <img
            src={props.props.image.url}
            alt={props.props.image.name}
            className={styles.container_assets_img}
          />
        </div>
        <div className={styles.container_text}>
          <h1 className={styles.container_text_title}>{props.props.Title}</h1>
          <span className={styles.container_text_description}>
            {props.props.Description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageDescription;
