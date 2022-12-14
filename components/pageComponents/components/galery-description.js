import styles from "./styles/galery-description.module.css";

const getGaleryDescription = (props) => {
  console.log(props);
  return (
    <div className={styles.galery_container}>
      <div className={styles.galery_text}>
        <h1 className={styles.galery_title}>{props.Title}</h1>
        <span className={styles.galery_subtitle}>{props.Subtitle}</span>
      </div>
    </div>
  );
};

export { getGaleryDescription };
