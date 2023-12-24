import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/opal2.png'
import pic2 from '../../assets/opal1.png'
import pic3 from '../../assets/opal3.png'
import pic4 from '../../assets/opal4.png'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const servies = [
    {
      "id": 1,
      "name": "Comprehensive Exploration Services",
      "pic": pic,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 2,
      "name": "Efficient Resource Extraction",
      "pic": pic2,
      "description": "Our mining company offers top-of-the-line mining machinery and equipment to facilitate efficient resource extraction. We understand the importance of optimizing mining operations for productivity and profitability. That's why we provide cutting-edge machinery, specifically designed and engineered for the extraction of various valuable resources. Our advanced equipment, including drilling rigs, excavators, loaders, and haul trucks, ensures efficient and safe resource extraction. With our commitment to technological innovation and industry best practices, we empower mining companies to maximize their resource extraction capabilities, leading to higher yields and operational success."
    },
    {
      "id": 3,
      "name": "Secure Mining Environment",
      "pic": pic3,
      "description": "At our mining company, we prioritize the safety of mining operations. We offer a range of safety equipment and implement stringent safety measures to ensure a secure mining environment. Our experienced safety professionals conduct thorough risk assessments and provide tailored safety solutions to mitigate potential hazards. From personal protective equipment to advanced monitoring systems, we provide mining companies with the necessary tools and expertise to maintain a safe working environment. With our commitment to safety excellence, we help mining operations minimize accidents, protect their workforce, and comply with industry regulations."
    },
    {
      "id": 4,
      "name": "Advanced Mineral Separation and Refinement",
      "pic": pic4,
      "description": "Our mining company specializes in advanced equipment and processes for efficient mineral separation and refinement. We understand the importance of extracting valuable minerals with high precision and purity. That's why we offer cutting-edge technologies, such as magnetic separators, flotation cells, and gravity concentrators, to ensure optimal mineral separation. Additionally, our advanced refining processes enable the production of high-quality mineral products that meet industry standards. With our expertise in mineral processing and refinement, we assist mining companies in maximizing the value of their extracted minerals and achieving market competitiveness."
    },
    {
      "id": 9,
      "name": "Opal Mining Services",
      "pic": pic,
      "description": "Our mining company specializes in opal mining services, catering to the unique requirements of opal extraction. We possess extensive knowledge and experience in opal deposits, mining techniques, and processing methods. Our services encompass prospecting, tunneling, shaft sinking, and opal cutting and polishing. We provide specialized equipment and skilled personnel to ensure efficient and precise opal mining operations. Our focus on quality and attention to detail ensure that our clients receive opals of exceptional beauty and value. Trust us to handle your opal mining needs with professionalism and expertise."
    },
    {
      "id": 10,
      "name": "Crystal Opal Mining",
      "pic": pic2,
      "description": "Our mining company specializes in crystal opal mining, offering a unique and valuable service in the opal industry. Crystal opals are known for their mesmerizing play of colors and exceptional transparency. We have developed specialized mining techniques and processes to extract crystal opals with precision and care. Our team of skilled miners and lapidaries meticulously handle crystal opal specimens, ensuring minimal damage and maximum preservation of their natural beauty. With our commitment to excellence and passion for opals, we provide mining services that cater specifically to crystal opal enthusiasts and collectors."
    }
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