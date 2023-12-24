import React from 'react'
import styles from "./apponitment.module.css"
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/about.jpg'

const Appointment = () => {
  return (
    <>
      <PageIntro text={'Appointment'} img={zimg}/>
    <div className={styles.cont}>
        <div className={styles.box}>
          <h1>Appointment Page </h1>
        </div>
    </div>
    </>
  )
}

export default Appointment