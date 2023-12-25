import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';

import sandpik from '../../assets/products/sikasand.png'
import lithiumpik from '../../assets/products/lithium.png'
import tanpik from '../../assets/products/tantalum.png'
import coalpik from '../../assets/products/Coal.png'
import ironpik from '../../assets/products/iron.png'
import goldpik from '../../assets/products/gold.png'
import opalpik from '../../assets/products/opal.png'
import copalpik from '../../assets/products/copal.png'
import ampik from '../../assets/products/amytst.png'
import obpik from '../../assets/products/obsidian.png'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const ProductSlide = () => {
    const galleryData=[
        {
          "id": 1,
          "name": "Silica Sand",
          "description": "versatile and high-quality",
          "pic": sandpik
        },
        {
          "id": 2,
          "name": "Lithium",
          "description": "versatile and high-quality",
          "pic": lithiumpik,
        },
        {
          "id": 3,
          "name": "Tantalum",
          "description": "versatile and high-quality",
          "pic": tanpik,
        },
        {
          "id": 4,
          "name": "Coal",
          "description": "versatile and high-quality",
          "pic": coalpik,
        },
        {
          "id": 5,
          "name": "Iron",
          "description": "versatile and high-quality",
          "pic": ironpik,
        },
        {
          "id": 6,
          "name": "Gold",
          "description": "versatile and high-quality",
          "pic": goldpik,
        },
        {
          "id": 7,
          "name": "Obsidian",
          "description": "versatile and high-quality",
          "pic": obpik,
        },
        {
          "id": 8,
          "name": "Amethyst Quartz",
          "description": "versatile and high-quality",
          "pic": ampik,
        },
        {
          "id": 9,
          "name": "Opal",
          "description": "versatile and high-quality",
          "pic": opalpik,
        },
        {
          "id": 10,
          "name": "Crystal Opal",
          "description": "versatile and high-quality",
          "pic": copalpik,
        }
      ]
      
      const [currentSlideIds, setCurrentSlideIds] = useState([]);
      const [middleItemId, setMiddleItemId] = useState(null);

      const handleSlideChange = (swiper) => {
        const { activeIndex, slides } = swiper;
        const visibleSlideIds = slides
          .filter((slide, index) => index >= activeIndex && index < activeIndex + swiper.params.slidesPerView)
          .map((slide) => parseInt(slide.getAttribute('data-id'), 10));
    
        setCurrentSlideIds(visibleSlideIds);
      };
    
      useEffect(() => {
        if (currentSlideIds.length > 0) {
          const middleIndex = Math.floor(currentSlideIds.length / 2);
          setMiddleItemId(currentSlideIds[middleIndex]);
        } else {
          setMiddleItemId(null);
        }
      }, [currentSlideIds]);
    

  // const getCurrentVisibleItemIds = () => {
  //   return currentSlideIds;
  // };

  return (
    <div className={styles.cont}>
        <div className={styles.titlebox}>
            <span className={styles.title}>Featured Products</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>CHECK OUT OUR PRODUCTS AND SERVICE</span>
          </div>
          <div className={styles.list}>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={handleSlideChange} 
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                <img className={styles.itemimg} src={l.pic} alt={l.name}/>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.name}</span>
                    <span className={styles.itemdes}>{l.description}</span>
                </div>
            </div>
            
        </SwiperSlide>
        ))}
        <div className={styles.customNavigation}>
              <FaAngleLeft className={styles.navbtnl}/>
              <FaAngleRight className={styles.navbtnr}/>
          </div>
      </Swiper>

          </div>
    </div>
  )
}

export default ProductSlide