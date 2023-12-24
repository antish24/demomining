import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/products/Coal.png'
import pic2 from '../../assets/products/tantalum.png'
import pic5 from '../../assets/products/lithium.png'
import pic4 from '../../assets/products/Amytstquartz.png'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const servies = [
    {
      "id": 1,
      "name": "Exploration Services",
      "pic": pic4,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 4,
      "name": "Separation & Refinement",
      "pic": pic5,
      "description": "Our mining company specializes in advanced equipment and processes for efficient mineral separation and refinement. We understand the importance of extracting valuable minerals with high precision and purity. That's why we offer cutting-edge technologies, such as magnetic separators, flotation cells, and gravity concentrators, to ensure optimal mineral separation. Additionally, our advanced refining processes enable the production of high-quality mineral products that meet industry standards. With our expertise in mineral processing and refinement, we assist mining companies in maximizing the value of their extracted minerals and achieving market competitiveness."
    },
    {
      "id": 5,
      "name": "Sustainable Mining",
      "pic": pic2,
      "description": "At our mining company, we are committed to minimizing the environmental impact of mining operations. We offer sustainable solutions that prioritize environmental stewardship and social responsibility. Our experts assess the environmental risks associated with mining activities and develop tailored strategies to mitigate them. This includes implementing efficient water management systems, adopting eco-friendly mining practices, and promoting land reclamation and restoration. By integrating sustainable practices into mining operations, we help our clients achieve long-term sustainability, preserve natural resources, and contribute positively to the communities in which they operate."
    },
    {
      "id": 6,
      "name": "Mining Machinery",
      "pic": pic,
      "description": "Our mining company understands the importance of keeping mining machinery operating at peak performance. We offer a comprehensive range of spare parts and components for various mining equipment, ensuring minimal downtime and efficient maintenance. Whether it's replacement parts for crushers, conveyor systems, or hydraulic components, we provide high-quality products that meet industry standards. Our extensive inventory and quick turnaround times ensure that mining operations can rely on us for prompt and reliable spare parts supply. With our commitment to customer satisfaction, we aim to be your trusted partner in keeping your mining machinery running smoothly."
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