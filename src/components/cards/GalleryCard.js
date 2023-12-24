import React from 'react'
import styles from './gallerycard.module.css'
import { NavLink } from 'react-router-dom'

const GalleryCard = (data) => {
    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  return (
    <div className={styles.cont}>
        <img src={data.pic} alt='pic' className={styles.img}/>
        <div className={styles.name}><NavLink state={data} onClick={scrollTop} to={`/service/${data.name}`}>{data.name.toUpperCase()}</NavLink></div>
    </div>
  )
}

export default GalleryCard