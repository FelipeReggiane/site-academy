import { useState } from "react";
import styles from "./styles/galery-slide.module.css";
import Link from "next/link";

const getGalerySlide = (props) => {
  console.log(props);
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  const toggleHoverLeft = () => setIsHoverLeft((prev) => !prev);

  const toggleHoverRight = () => setIsHoverRight((prev) => !prev);

  return (
    <div className={styles.galery_Container}>
      <div className={styles.galery_Container_content}>
        <img
          src={props.Image_Left.url}
          alt="Formatura da turma Rethink Academy 1"
          className={
            isHoverLeft
              ? styles.galery_image_leftHover
              : styles.galery_image_left
          }
        />
        <img
          src={props.Image_Right.url}
          alt="Moço do sorriso seduzente"
          className={
            isHoverRight
              ? styles.galery_image_rightHover
              : styles.galery_image_right
          }
        />
        <div className={styles.galery_actions}>
          <div className={styles.galery_div_button}>
            <div
              className={
                isHoverLeft
                  ? styles.galery_button_annimationHover
                  : styles.galery_button_annimation
              }
            ></div>
            <a
              className={styles.galery_button}
              onMouseEnter={toggleHoverLeft}
              onMouseLeave={toggleHoverLeft}
              onFocus={toggleHoverLeft}
              onBlur={toggleHoverLeft}
              href={"/sobre"}
            >
              {props.Button_Left}
            </a>
          </div>
          <div className={styles.galery_text}>
            <span className={styles.galery_title}>{props.Title}</span>
            <span className={styles.galery_subtitle}>{props.Subtitle}</span>
          </div>
          <div className={styles.galery_div_button}>
            <div
              className={
                isHoverRight
                  ? styles.galery_button_annimationHover
                  : styles.galery_button_annimation
              }
            ></div>
            <a
              className={styles.galery_button}
              onMouseEnter={toggleHoverRight}
              onMouseLeave={toggleHoverRight}
              onFocus={toggleHoverRight}
              onBlur={toggleHoverRight}
              href={"/sobre"}
            >
              {props.Button_Right}
            </a>
          </div>
        </div>
        <div className={styles.galeryLine_Container_content}>
          <span className={styles.galeryLine_title}>
            {props.galery_line.title}
          </span>
          <div className={styles.galeryLine_images}>
            {props.galery_line.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt="Pessoas do squad site rethink"
                className={styles.galeryLine_image}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { getGalerySlide };
