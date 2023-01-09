import styles from "./galery-description.module.css";
import ImageDescription from "./image-description";

const getGaleryDescription = (props) => {
  // const [par, setPar] = useState(false);
  // let par = false;

  // const getPar = (prop) => {
  //   console.log(prop);
  //   if (prop % 2 === 0) {
  //     console.log("if");
  //     par = true;
  //   }
  // };
  // let par = false;
  return (
    <div className={styles.galery_container}>
      <div className={styles.galery_text}>
        <h1 className={styles.galery_title}>{props.Title}</h1>
        <span className={styles.galery_subtitle}>{props.Subtitle}</span>
      </div>
      <div className={styles.galery_images_container}>
        {props.image_description.map((prop, index) => (
          <div>
            <ImageDescription props={prop} index={index} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { getGaleryDescription };
