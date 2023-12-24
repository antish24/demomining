import React from 'react'
import styles from "./about.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/about.jpg'

const About = () => {
  return (
    <>
      <PageIntro text={'About Us'} img={zimg}/>
    <div className={styles.cont}>
        <div className={styles.box}>
          <h1>About Page </h1>
        </div>
    </div>
    </>
  )
}

export default About