import React, { useEffect } from "react";
import styles from "./contact.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from '../assets/contact.jpg'
import {FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa'
const Contact = () => {
  useEffect(() => {
    document.title = 'Mining - Contact Us';
  }, []);
  return (
    <>
      <PageIntro  text={"Contact"} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Contact Us</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>You are always welcome to visit us and give us Feedbacks on our products.</span>
          </div>
          <div className={styles.lists}>
            <div className={styles.locationbox}>
            <div className={styles.location}><span className={styles.icons}><FaMapPin/></span><div className={styles.infobox}><span>Location:</span><span>A108 Adam Street, New York, NY 535022</span></div></div>
            <div className={styles.location}><span className={styles.icons}><FaMailBulk/></span><div className={styles.infobox}><span>Email:</span><span>oureamil@gmail.com</span></div></div>
              <div className={styles.location}><span className={styles.icons}><FaPhone/></span><div className={styles.infobox}><span>Call:</span><span>+251 9 11 75 50 25</span></div></div>
              <div className={styles.map}></div>
            </div>
            <div className={styles.formbox}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
