import React from "react";
import styles from "./home.module.css";
import ProductShow from "../components/cards/ProductShow";
import video from "../assets/bg.mp4";
import ServiceReview from "../components/cards/ServiceReview";
import GalleryReview from "../components/cards/GalleryReview";
import Testimonials from "../components/cards/Testimonials";

const Home = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.videobox}>
        <video className={styles.video} src={video} autoPlay loop muted />
        <div className={styles.logo}>
          <div className={styles.infobox}>
            <span>Welcome to Acordia Mining</span>
            <span>
              Unleashing the Potential of Minerals. Innovative, Sustainable,
              Responsible. Building Strong Communities, Growing Together.
              Experience Excellence in Mining with Acordia.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <ProductShow />
        <ServiceReview/>
        <GalleryReview/>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
