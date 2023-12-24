import React from 'react'
import ProductCard from './ProductCard'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.cont}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Gallery</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>Photos from our Experience</span>
          </div>
          <div className={styles.lists}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <div className={styles.moreservice}><NavLink to={'/gallery'} onClick={scrollTop}>More Photos</NavLink></div>
        </div>
  )
}

export default GalleryReview