import React from "react";
import styles from "./productcard.module.css";
import { NavLink } from "react-router-dom";
import pic from '../../assets/opal2.png'
import { FaArrowRight } from 'react-icons/fa'
const ProductCard = () => {

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className={styles.cont}>
      <div className={styles.imgbox}><img className={styles.zimg} src={pic} alt="opal"/></div>
      <span className={styles.title}>Exploration Equipment</span>
      <span className={styles.detail}>
      We offer a wide selection of exploration equipment, including drilling rigs, core drilling tools, 
      geological instruments, and surveying equipment. Our products are designed to assist in the identification 
      and evaluation of potential mining sites.
      </span>
      <div className={styles.morebtn}>
        <NavLink className={styles.button} onClick={scrollTop} to={'/service'}><FaArrowRight/></NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
