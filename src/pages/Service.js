import React, { useEffect } from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/product.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/opal2.png'
import pic2 from '../assets/opal1.png'
import pic3 from '../assets/opal3.png'
import pic4 from '../assets/opal4.png'
import pic5 from '../assets/contact.jpg'
import pic6 from '../assets/product.jpg'
import pic7 from '../assets/about.jpg'
import pic8 from '../assets/gallery.jpg'

const Service = () => {

  useEffect(() => {
    document.title = 'Mining - Service';
  }, []);

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
      "id": 5,
      "name": "Sustainable Mining Solutions",
      "pic": pic5,
      "description": "At our mining company, we are committed to minimizing the environmental impact of mining operations. We offer sustainable solutions that prioritize environmental stewardship and social responsibility. Our experts assess the environmental risks associated with mining activities and develop tailored strategies to mitigate them. This includes implementing efficient water management systems, adopting eco-friendly mining practices, and promoting land reclamation and restoration. By integrating sustainable practices into mining operations, we help our clients achieve long-term sustainability, preserve natural resources, and contribute positively to the communities in which they operate."
    },
    {
      "id": 6,
      "name": "Mining Machinery Spare Parts and Components",
      "pic": pic6,
      "description": "Our mining company understands the importance of keeping mining machinery operating at peak performance. We offer a comprehensive range of spare parts and components for various mining equipment, ensuring minimal downtime and efficient maintenance. Whether it's replacement parts for crushers, conveyor systems, or hydraulic components, we provide high-quality products that meet industry standards. Our extensive inventory and quick turnaround times ensure that mining operations can rely on us for prompt and reliable spare parts supply. With our commitment to customer satisfaction, we aim to be your trusted partner in keeping your mining machinery running smoothly."
    },
    {
      "id": 7,
      "name": "Technical Support and Maintenance Services",
      "pic": pic7,
      "description": "At our mining company, we offer comprehensive technical support and maintenance services for mining equipment. Our team of skilled technicians and engineers provides on-site assistance, troubleshooting, and repairs to ensure optimal performance of mining machinery. We also offer preventive maintenance programs to minimize unplanned downtime and extend the lifespan of equipment. With our expertise and responsive service, mining companies can rely on us for timely assistance and efficient maintenance solutions. Our goal is to help our clients maximize the reliability and longevity of their mining equipment, reducing operational costs and enhancing productivity."
    },
    {
      "id": 8,
      "name": "Training Programs and Consultancy Services",
      "pic": pic8,
      "description": "Our mining company offers comprehensive training programs and consultancy services to enhance mining operations. We understand the importance of equipping mining personnel with the necessary knowledge and skills to optimize their performance. Our training programs cover various aspects of mining, including safety procedures, equipment operation, and environmental regulations. Additionally, our experienced consultants provide valuable insights and recommendations to improve operational efficiency, cost-effectiveness, and sustainability. By investing in training and consulting, mining companies can empower their workforce and gain a competitive edge in the industry."
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
