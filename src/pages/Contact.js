import React from "react";
import styles from "./contact.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from '../assets/contact.jpg'

const Contact = () => {
  return (
    <>
      <PageIntro  text={"Contact"} img={zimg}/>
    <div className={styles.cont}>
      <div className={styles.box}>
        <h1>Contact Page </h1>
      </div>
    </div>
    </>
  );
};

export default Contact;
