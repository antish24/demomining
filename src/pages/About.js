import React, { useEffect } from "react";
import styles from "./about.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/about.jpg";
import zimg1 from "../assets/product.jpg";
import zimg2 from "../assets/gallery.jpg";

const About = () => {
  useEffect(() => {
    document.title = "Mining - About Us";
  }, []);
  return (
    <>
      <PageIntro text={"About Us"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          <span className={styles.awardtitle}>Awards and Certficates</span>
          <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        <div className={styles.awards}>
            <img src={zimg} alt="award" className={styles.award}/>
            <img src={zimg} alt="award" className={styles.award}/>
            <img src={zimg} alt="award" className={styles.award}/>
            <img src={zimg} alt="award" className={styles.award}/>
            <img src={zimg} alt="award" className={styles.award}/>
            <img src={zimg} alt="award" className={styles.award}/>
          </div>
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={zimg1} alt={'about'} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>Our Mission</span>
              <span className={styles.detaildes}>
                Welcome to our mining company, where we have been at the
                forefront of the industry for over two decades. Founded in 2000,
                our company has grown from a small-scale operation to a leading
                player in the mining sector. We are dedicated to providing
                exceptional mining services, leveraging advanced technologies
                and an experienced team.
              </span>
            </div>
          </div>

          <div className={styles.lists}>
            <div className={styles.contlist2}></div>
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>Our History</span>
              <span className={styles.detaildes}>
                Welcome to our mining company, where we have been at the
                forefront of the industry for over two decades. Founded in 2000,
                our company has grown from a small-scale operation to a leading
                player in the mining sector. We are dedicated to providing
                exceptional mining services, leveraging advanced technologies
                and an experienced team.
              </span>
            </div>
            <img className={styles.imgbox} src={zimg2} alt={'about'} />
          </div>
          <span className={styles.awardtitle}>Partner that Trust Us </span>
          <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          <div className={styles.partners}>
          <img src={zimg} alt="award" className={styles.award}/>
          <img src={zimg} alt="award" className={styles.award}/>
          <img src={zimg} alt="award" className={styles.award}/>
          <img src={zimg} alt="award" className={styles.award}/>
          <img src={zimg} alt="award" className={styles.award}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
