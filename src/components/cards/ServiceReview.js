import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/opal2.png'
import pic2 from '../../assets/opal1.png'
import pic5 from '../../assets/product.jpg'
import pic4 from '../../assets/opal4.png'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const servies = [
    {
      "id": 1,
      "name": "Exploration Services",
      "pic": pic5,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 4,
      "name": "Mineral Separation & Refinement",
      "pic": pic4,
      "description": "Our mining company specializes in advanced equipment and processes for efficient mineral separation and refinement. We understand the importance of extracting valuable minerals with high precision and purity. That's why we offer cutting-edge technologies, such as magnetic separators, flotation cells, and gravity concentrators, to ensure optimal mineral separation. Additionally, our advanced refining processes enable the production of high-quality mineral products that meet industry standards. With our expertise in mineral processing and refinement, we assist mining companies in maximizing the value of their extracted minerals and achieving market competitiveness."
    },
    
    {
      "id": 7,
      "name": "Technical Support Maintenance",
      "pic": pic,
      "description": "At our mining company, we offer comprehensive technical support and maintenance services for mining equipment. Our team of skilled technicians and engineers provides on-site assistance, troubleshooting, and repairs to ensure optimal performance of mining machinery. We also offer preventive maintenance programs to minimize unplanned downtime and extend the lifespan of equipment. With our expertise and responsive service, mining companies can rely on us for timely assistance and efficient maintenance solutions. Our goal is to help our clients maximize the reliability and longevity of their mining equipment, reducing operational costs and enhancing productivity."
    },
    {
      "id": 8,
      "name": "Training & Consultancy Services",
      "pic": pic2,
      "description": "Our mining company offers comprehensive training programs and consultancy services to enhance mining operations. We understand the importance of equipping mining personnel with the necessary knowledge and skills to optimize their performance. Our training programs cover various aspects of mining, including safety procedures, equipment operation, and environmental regulations. Additionally, our experienced consultants provide valuable insights and recommendations to improve operational efficiency, cost-effectiveness, and sustainability. By investing in training and consulting, mining companies can empower their workforce and gain a competitive edge in the industry."
    },
    
  ];
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
            {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/service'} onClick={scrollTop}>More Service</NavLink></div>
        </div>
  )
}

export default ServiceReview