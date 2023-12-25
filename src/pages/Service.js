import React, { useEffect } from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/product.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/Exploration Services.png'
import pic2 from '../assets/Efficient Extraction.png'
import pic3 from '../assets/Secure Environment.png'
import pic4 from '../assets/Separation.png'
import pic5 from '../assets/SustainableMining.png'
import pic6 from '../assets/MiningMachinery.png'
import pic7 from '../assets/GemistoneMining.png'

const Service = () => {

  useEffect(() => {
    document.title = 'Mining - Service';
  }, []);

  const servies = [
    {
      "id": 1,
      "name": "Exploration Services",
      "pic": pic,
      "description": "At our mining company, we specialize in providing comprehensive exploration services to assist mining operations in identifying and evaluating potential mining sites. Our team of skilled geologists and mining experts utilizes state-of-the-art techniques and advanced technologies to conduct detailed geological surveys, remote sensing, geochemical analysis, and geophysical surveys. By meticulously analyzing geological data, we help our clients uncover valuable mineral deposits with precision and efficiency. Our comprehensive approach enables mining companies to make informed decisions, minimizing risks and maximizing the potential for successful mining operations. Trust us to be your reliable partner in discovering and unlocking the untapped resources beneath the Earth's surface."
    },
    {
      "id": 2,
      "name": "Efficient Extraction",
      "pic": pic2,
      "description": "Our mining company offers top-of-the-line mining machinery and equipment to facilitate efficient resource extraction. We understand the importance of optimizing mining operations for productivity and profitability. That's why we provide cutting-edge machinery, specifically designed and engineered for the extraction of various valuable resources. Our advanced equipment, including drilling rigs, excavators, loaders, and haul trucks, ensures efficient and safe resource extraction. With our commitment to technological innovation and industry best practices, we empower mining companies to maximize their resource extraction capabilities, leading to higher yields and operational success."
    },
    {
      "id": 3,
      "name": "Secure Environment",
      "pic": pic3,
      "description": "At our mining company, we prioritize the safety of mining operations. We offer a range of safety equipment and implement stringent safety measures to ensure a secure mining environment. Our experienced safety professionals conduct thorough risk assessments and provide tailored safety solutions to mitigate potential hazards. From personal protective equipment to advanced monitoring systems, we provide mining companies with the necessary tools and expertise to maintain a safe working environment. With our commitment to safety excellence, we help mining operations minimize accidents, protect their workforce, and comply with industry regulations."
    },
    {
      "id": 4,
      "name": "Separation & Refinement",
      "pic": pic4,
      "description": "Our mining company specializes in advanced equipment and processes for efficient mineral separation and refinement. We understand the importance of extracting valuable minerals with high precision and purity. That's why we offer cutting-edge technologies, such as magnetic separators, flotation cells, and gravity concentrators, to ensure optimal mineral separation. Additionally, our advanced refining processes enable the production of high-quality mineral products that meet industry standards. With our expertise in mineral processing and refinement, we assist mining companies in maximizing the value of their extracted minerals and achieving market competitiveness."
    },
    {
      "id": 5,
      "name": "Sustainable Mining",
      "pic": pic5,
      "description": "At our mining company, we are committed to minimizing the environmental impact of mining operations. We offer sustainable solutions that prioritize environmental stewardship and social responsibility. Our experts assess the environmental risks associated with mining activities and develop tailored strategies to mitigate them. This includes implementing efficient water management systems, adopting eco-friendly mining practices, and promoting land reclamation and restoration. By integrating sustainable practices into mining operations, we help our clients achieve long-term sustainability, preserve natural resources, and contribute positively to the communities in which they operate."
    },
    {
      "id": 6,
      "name": "Mining Machinery",
      "pic": pic6,
      "description": "Our mining company understands the importance of keeping mining machinery operating at peak performance. We offer a comprehensive range of spare parts and components for various mining equipment, ensuring minimal downtime and efficient maintenance. Whether it's replacement parts for crushers, conveyor systems, or hydraulic components, we provide high-quality products that meet industry standards. Our extensive inventory and quick turnaround times ensure that mining operations can rely on us for prompt and reliable spare parts supply. With our commitment to customer satisfaction, we aim to be your trusted partner in keeping your mining machinery running smoothly."
    },
    {
      "id": 7,
      "name": "Gemistone Mining",
      "pic": pic7,
      "description": "Our mining company specializes in opal mining services, catering to the unique requirements of opal extraction. We possess extensive knowledge and experience in opal deposits, mining techniques, and processing methods. Our services encompass prospecting, tunneling, shaft sinking, and opal cutting and polishing. We provide specialized equipment and skilled personnel to ensure efficient and precise opal mining operations. Our focus on quality and attention to detail ensure that our clients receive opals of exceptional beauty and value. Trust us to handle your opal mining needs with professionalism and expertise."
    },
    
  ];

  return (
    <>
      <PageIntro text={"Service"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.titlebox}>
            <span className={styles.title}>Specialization and Successful Endeavors</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.lists}>
          {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
