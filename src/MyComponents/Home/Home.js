import styles from "./Home.module.css";
// import Hexagon from './Hexagon.js';
// import Map from './Map.js';
// import Slider from './Slider/Slider.js';
import Carousal from "../Carousal.js";
import AboutUs from "./AboutUs.js";
import PreviousSponsorsCarousal from "../PreviousSponsorsCarousal.js";
import MainBanner from "../MainBanner.js";

const images = [
  // '/highlights/highlight-1.png',
  "/highlights/highlight-2.jpg",
  "/highlights/highlight-3.jpg",
  "/highlights/highlight-4.jpg",
  // '/highlights/highlight-5.jpg',
  "/highlights/highlight-6.jpg",
  "/highlights/highlight-7.jpg",
  "/highlights/highlight-8.jpg",
  "/highlights/highlight-9.jpg",
  // '/highlights/highlight-10.jpg',
  "/highlights/highlight-11.jpg",
  "/highlights/highlight-12.jpg",
  "/highlights/highlight-13.jpg",
  "/highlights/highlight-14.jpg",
  // '/highlights/highlight-15.heic',
  // '/highlights/highlight-16.png',
  "/highlights/highlight-17.jpg",
];

const Home = () => {
  // const splineScenePath = "https://prod.spline.design/REPDQ5Bd6aNHYsAg/scene.splinecode";
  const motto = "Spreading new hope and smiles of sunrise to the nation";

  // let slides = [
  //     <img src="https://picsum.photos/800/300/?random" alt="1" />,
  //     <img src="https://picsum.photos/800/301/?random" alt="2" />,
  //     <img src="https://picsum.photos/800/302/?random" alt="3" />,
  //     <img src="https://picsum.photos/800/303/?random" alt="4" />,
  //     <img src="https://picsum.photos/800/304/?random" alt="5" />,
  // ];

  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.carousal_container}>
          <Carousal imagePaths={images} />
        </div>
        <div className={styles.intro__content}>
          <div className={styles.intro__content__text}>{motto}</div>
          {/* <div className={styles.splineModel}>
                        <Spline scene={splineScenePath} />
                    </div> */}
          {/* <div className={styles.intro__content__image}>
                        <img src="/" alt="" />
                    </div> */}
        </div>
        {/* <div className={styles.moto}>
                    <Hexagon/>
                </div> */}
        {/* <div className={styles.states}>
                    <Map/>
                </div> */}
      </div>
      <MainBanner />
      <PreviousSponsorsCarousal />
      <AboutUs />
      {/* <div className={styles.slider}>
                <Slider/>
            </div> */}
    </div>
  );
};

export default Home;
