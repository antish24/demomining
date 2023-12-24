import React, { useEffect } from "react";
import { useParams,useLocation  } from "react-router-dom";
import PageIntro from "../components/cards/PageIntro";
import styles from "./gallerydetail.module.css";
import zimg from "../assets/contact.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const GalleryDetail = () => {
  const { id } = useParams();
  const location=useLocation()
  const data = location.state;

  useEffect(() => {
    document.title = "Mining - Gallery Detail";
  }, []);

  return (
    <>
      <PageIntro text={`Gallery - ${id}`} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Detail</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.gallerybox}>
            <div className={styles.vidbox}></div>
            <div className={styles.imgsbox}>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg} alt="imge2"/></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.zimg} src={zimg} alt="imge2"/></SwiperSlide>
      </Swiper>
            </div>
          </div>
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={data.pic} alt={id} style={{objectFit:'contain'}} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>{id}</span>
              <span className={styles.detaildes}>{data.description}</span>
              <span className={styles.orderbtn}>Order</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetail;
