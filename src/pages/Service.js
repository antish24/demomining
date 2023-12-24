import React from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/product.jpg";
import ProductCard from "../components/cards/ProductCard";

const Service = () => {
  return (
    <>
      <PageIntro text={"Service"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.titlebox}>
            <span className={styles.title}>Service</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.lists}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
