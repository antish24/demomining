import React from 'react'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'
import GalleryCard from './GalleryCard'
import sandpik from '../../assets/products/sikasand.png'
import lithiumpik from '../../assets/products/lithium.png'
import tanpik from '../../assets/products/tantalum.png'
import coalpik from '../../assets/products/Coal.png'
import ironpik from '../../assets/products/iron.png'
import opalpik from '../../assets/products/opal.png'

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const galleryData=[
    
    {
      "id": 1,
      "description": "Silica Sand is a versatile and high-quality material extensively used in various industries. Its unique properties make it an indispensable component in glass manufacturing, construction projects, and foundry processes. With its fine granular structure and high silica content, Silica Sand provides stability and strength to glass products, ensuring clarity and durability. In construction, Silica Sand is used in concrete and mortar mixes, offering excellent binding properties and enhancing the overall strength of structures. Moreover, in foundry processes, Silica Sand serves as a molding material due to its ability to withstand high temperatures and facilitate the production of intricate metal castings."
,
      "name": "Silica Sand",
      "pic": sandpik
    },
    {
      "id": 2,
      "name": "Lithium",
      "pic": lithiumpik,
      "description": "Lithium is a vital element that plays a crucial role in powering modern technologies and driving the transition towards sustainable energy solutions. As a key component in rechargeable batteries, Lithium enables the efficient storage and release of electrical energy, making it essential for electric vehicles, portable electronics, and renewable energy storage systems. With its lightweight and high energy density properties, Lithium-ion batteries offer longer-lasting power and facilitate the shift to cleaner transportation and energy sources. The demand for Lithium continues to rise as the world embraces the need for greener, more sustainable energy alternatives, making it a valuable resource for the future."
    },
    {
      "id": 3,
      "name": "Tantalum",
      "pic": tanpik,
      "description": "Tantalum is a rare and highly sought-after metal known for its exceptional properties and diverse applications. With its high melting point, excellent corrosion resistance, and remarkable electrical conductivity, Tantalum finds extensive use in the electronics industry. It is a key component in capacitors, which store and release electrical energy in various electronic devices, including smartphones, laptops, and medical implants. Tantalum's ability to withstand extreme temperatures and resist chemical reactions makes it an ideal choice for critical components in aerospace, defense, and industrial applications. Its unique combination of properties and scarcity contribute to Tantalum's value as a strategic material with broad-ranging technological importance."
    },
    {
      "id": 4,
      "name": "Coal",
      "pic": coalpik,
      "description": "Coal is a fossil fuel formed from the remains of ancient plants and trees. It is primarily composed of carbon, along with various other elements and minerals. Coal is a significant energy source worldwide and has been used for centuries to generate electricity and heat. It plays a crucial role in industries such as power generation, steel production, and cement manufacturing. However, coal combustion releases carbon dioxide and other pollutants, contributing to environmental concerns and climate change. The ongoing transition towards cleaner and more sustainable energy sources has led to efforts to reduce coal consumption and explore alternative energy options."
    },
    {
      "id": 5,
      "name": "Iron",
      "pic": ironpik,
      "description": "Iron is a versatile and widely used metal known for its strength and durability. It is one of the most abundant elements on Earth and has been essential to human civilization for thousands of years. Iron is a key component in the production of steel, which is used in construction, transportation, and various industrial applications. It is also crucial for the manufacturing of machinery, appliances, and infrastructure. Additionally, iron plays a vital role in biological systems, as it is a crucial component of hemoglobin, the protein responsible for transporting oxygen in our blood. The versatility and importance of iron make it a fundamental material in numerous aspects of our daily lives."
    },
    {
      "id": 9,
      "name": "Opal",
      "pic": opalpik,
      "description": "Opal is a breathtaking gemstone renowned for its enchanting play of colors and captivating appearance. This exquisite gem holds a significant place in various industries and is cherished for its unique characteristics. In jewelry, Opal's iridescent hues and patterns create stunning pieces that reflect beauty and individuality. Its charm extends beyond adornment, as Opal is believed to possess metaphysical properties, promoting inspiration, creativity, and emotional balance. Opal's allure has also found applications in specialized industries, such as optics and electronics, where its optical properties are utilized. With its mesmerizing beauty and multifaceted uses, Opal continues to fascinate and inspire."
    },
  ]
  return (
    <div className={styles.cont}>
          <div className={styles.titlebox}>
            <span className={styles.title}>Gallery</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className={styles.subtitle}>Photos from our Experience</span>
          </div>
          <div className={styles.lists}>
            {galleryData.map((l)=><GalleryCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/gallery'} onClick={scrollTop}>More Photos</NavLink></div>
        </div>
  )
}

export default GalleryReview