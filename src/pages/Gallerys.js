import React from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'

const Gallerys = () => {
  return (
    <>
      <PageIntro text={'Gallery'} img={zimg}/>
    <div className={styles.cont}>
        <div className={styles.box}>
          <h1>Gallery Page </h1>
        </div>
    </div>
    </>
  )
}

export default Gallerys