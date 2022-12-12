import { useState } from "react";
import styles from "./styles/galery-slide.module.css";

const getGalerySlide = (props) => {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  const toggleHoverLeft = () => setIsHoverLeft((prev) => !prev);

  const toggleHoverRight = () => setIsHoverRight((prev) => !prev);

  return (
    <div className={styles.galery_Container}>
      <div className={styles.galery_Container_content}>
        <img
          src={props.Image_Left.url}
          alt=""
          className={
            isHoverLeft
              ? styles.galery_image_leftHover
              : styles.galery_image_left
          }
        />
        <img
          src={props.Image_Right.url}
          alt=""
          className={
            isHoverRight
              ? styles.galery_image_rightHover
              : styles.galery_image_right
          }
        />
        <div className={styles.galery_actions}>
          <div className={styles.galery_div_button}>
            <button
              className={styles.galery_button}
              onMouseEnter={toggleHoverLeft}
              onMouseLeave={toggleHoverLeft}
            >
              {props.Button_Left}
            </button>
          </div>
          <div className={styles.galery_text}>
            <span className={styles.galery_title}>{props.Title}</span>
            <span className={styles.galery_subtitle}>{props.Subtitle}</span>
          </div>
          <div className={styles.galery_div_button}>
            <button
              className={styles.galery_button}
              onMouseEnter={toggleHoverRight}
              onMouseLeave={toggleHoverRight}
            >
              {props.Button_Right}
            </button>
          </div>
        </div>
        <div className={styles.galeryLine_Container_content}>
          <span>{props.galery_line.title}</span>
          <div className={styles.galeryLine_images}>
            {props.galery_line.images.map((image) => (
              <img src={image.url} className={styles.galeryLine_image}></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { getGalerySlide };
