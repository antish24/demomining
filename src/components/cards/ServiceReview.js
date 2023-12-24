import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles.cont}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Service</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>Create your own paradiset get inspired. See below</span>
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
          <div className={styles.moreservice}><NavLink to={'/service'} onClick={scrollTop}>More Service</NavLink></div>
        </div>
  )
}

export default ServiceReview