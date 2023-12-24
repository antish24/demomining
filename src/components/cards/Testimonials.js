import React from 'react'
import styles from './testimonials.module.css'
import TestmonialCard from './TestmonialCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {

  const testimonialsData=[
    {
      "id": 1,
      "name": "John Smith",
      "rate": 4,
      "note": "MiningCo has consistently delivered high-quality products and exceptional customer service. Their expertise and commitment to safety have been instrumental in our mining operations."
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "rate": 5,
      "note": "MiningCo's products have exceeded our expectations in terms of quality and durability. Their prompt delivery and excellent customer support have made them our preferred supplier."
    },
    {
      "id": 3,
      "name": "Michael Thompson",
      "rate": 2,
      "note": "We have been using MiningCo's mining machinery for several years, and we are impressed with their performance and reliability. Their equipment has significantly improved our operational efficiency."
    },
    {
      "id": 4,
      "name": "Emily Wilson",
      "rate": 5,
      "note": "MiningCo's team of experts provided us with invaluable guidance throughout our mining project. Their knowledge and support helped us overcome challenges and achieve remarkable results."
    },
    {
      "id": 5,
      "name": "Daniel Lee",
      "rate": 4.5,
      "note": "MiningCo's mining machinery has consistently performed at a high level, exceeding our expectations. The equipment's durability and efficiency have been instrumental in maximizing our productivity."
    },
    {
      "id": 6,
      "name": "Sophia Rodriguez",
      "rate": 3,
      "note": "MiningCo's commitment to delivering products on time has been impressive. Their customer service team is responsive and always ready to assist with any inquiries or concerns."
    },
    {
      "id": 7,
      "name": "David Chen",
      "rate": 5,
      "note": "MiningCo has proven to be a trustworthy partner in our mining ventures. Their integrity, transparency, and adherence to ethical practices make them a reliable choice in the industry."
    },
    {
      "id": 8,
      "name": "Olivia Brown",
      "rate": 4.5,
      "note": "MiningCo's dedication to innovation has resulted in groundbreaking solutions to common mining challenges. Their forward-thinking approach has significantly improved our operations."
    },
    {
      "id": 9,
      "name": "Liam Wilson",
      "rate": 4,
      "note": "Safety is paramount in the mining industry, and MiningCo excels in this aspect. Their rigorous safety protocols and training programs have created a secure working environment for our team."
    },
    {
      "id": 10,
      "name": "Ava Thompson",
      "rate": 3,
      "note": "MiningCo goes above and beyond to ensure customer satisfaction. Their attention to detail, personalized service, and willingness to address our specific needs have made them our preferred mining supplier."
    },
  ]
  
  return (
    <div className={styles.cont}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Testimonials</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>Feedback from our clients</span>
          </div>
          <div className={styles.lists}>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
        className={styles.myswiper}
      >
        {testimonialsData.map((l)=><SwiperSlide className={styles.slide} key={l.id}><TestmonialCard key={l.id} {...l}/></SwiperSlide>)}
      </Swiper>
          </div>
        </div>
  )
}

export default Testimonials