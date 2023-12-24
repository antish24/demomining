import React, { useEffect, useState } from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'
import GalleryCard from '../components/cards/GalleryCard';
import sandpik from '../assets/products/sikasand.png'
import lithiumpik from '../assets/products/lithium.png'
import tanpik from '../assets/products/tantalum.png'
import coalpik from '../assets/products/Coal.png'
import ironpik from '../assets/products/iron.png'
import goldpik from '../assets/products/gold.png'
import opalpik from '../assets/products/opal.png'
import copalpik from '../assets/products/copal.png'
import ampik from '../assets/products/amytst.png'
import obpik from '../assets/products/obsidian.png'

const Gallerys = () => {

  useEffect(() => {
    document.title = 'Mining - Gallery';
  }, []);

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
      "id": 6,
      "name": "Gold",
      "pic": goldpik,
      "description": "Gold is a precious metal with a long history of value and allure. Its unique properties, including its lustrous appearance, malleability, and resistance to corrosion, make it highly desirable for use in jewelry and decorative arts. Gold is also a reliable store of wealth and has been used as a medium of exchange for centuries. Beyond its aesthetic and monetary value, gold has practical applications in various industries. It is widely used in electronics, such as in connectors and circuit boards, due to its excellent conductivity and resistance to tarnish. Additionally, gold finds applications in dentistry, aerospace technology, and medical devices. The enduring appeal and practical uses of gold have solidified its status as a precious and valuable resource."
    },
    {
      "id": 7,
      "name": "Obsidian",
      "pic": obpik,
      "description": "Obsidian is a captivating volcanic glass with a rich history and diverse applications. Its unique properties and striking appearance make it highly valued in various industries. Used extensively in glass manufacturing, construction projects, and foundry processes, this high-quality material offers exceptional stability and strength to glass products, ensuring clarity and durability. In construction, Obsidian's fine granular structure enhances the binding properties of concrete and mortar mixes, resulting in stronger structures. Moreover, in foundry processes, Obsidian serves as a molding material, enabling the production of intricate metal castings. With its fascinating origins and versatile uses, Obsidian continues to captivate and inspire."
    },
    {
      "id": 8,
      "name": "Amethyst Quartz",
      "pic": ampik,
      "description": "Amethyst Quartz is a mesmerizing gemstone renowned for its stunning purple hues and remarkable properties. This high-quality crystal holds a special place in various industries and is treasured for its beauty and metaphysical properties. In jewelry and decorative arts, Amethyst Quartz's alluring colors add elegance and charm. Beyond its aesthetic appeal, this gemstone is believed to possess healing and spiritual properties, promoting calmness, clarity, and positive energy. Its versatility extends to industrial applications as well, where it finds use in cutting-edge technologies. With its captivating allure and diverse uses, Amethyst Quartz continues to captivate hearts and minds."
    },
    {
      "id": 9,
      "name": "Opal",
      "pic": opalpik,
      "description": "Opal is a breathtaking gemstone renowned for its enchanting play of colors and captivating appearance. This exquisite gem holds a significant place in various industries and is cherished for its unique characteristics. In jewelry, Opal's iridescent hues and patterns create stunning pieces that reflect beauty and individuality. Its charm extends beyond adornment, as Opal is believed to possess metaphysical properties, promoting inspiration, creativity, and emotional balance. Opal's allure has also found applications in specialized industries, such as optics and electronics, where its optical properties are utilized. With its mesmerizing beauty and multifaceted uses, Opal continues to fascinate and inspire."
    },
    {
      "id": 10,
      "name": "Crystal Opal",
      "pic": copalpik,
      "description": "Crystal Opal is a captivating gemstone renowned for its translucent beauty and captivating play of colors. This exquisite gem holds a special place in various industries and is treasured for its unique properties. In jewelry and decorative arts, Crystal Opal's ethereal colors create enchanting pieces that reflect elegance and sophistication. Beyond its aesthetic appeal, this gemstone is believed to possess healing and spiritual properties, promoting harmony, clarity, and positive energy. Crystal Opal's captivating allure extends to specialized industries as well, where its optical properties find applications in cutting-edge technologies. With its mesmerizing beauty and versatile uses, Crystal Opal continues to inspire awe and admiration."
    }
  ]

  const [filterName,setFilterName]=useState('')
  

  let filteredItems;
  if (filterName !== '') {
    filteredItems = galleryData.filter(item => item.name.toLowerCase() === filterName.toLowerCase());
  } else {
    filteredItems = galleryData;
  }

  return (
    <>
      <PageIntro text={'Gallery'} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
        <div className={styles.titlebox}>
            <span className={styles.title}>Photos from our Experience and Products</span>
            <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.searchbox}>
            <span className={styles.searchlinks} onClick={()=>setFilterName('')} style={{background:filterName===''?'rgb(164,136,46)':'white',color:filterName===''?'white':'rgb(164,136,46)'}}>All</span>
            {galleryData.map((l)=>
            <span className={styles.searchlinks} onClick={()=>setFilterName(l.name)} style={{background:filterName===l.name?'rgb(164,136,46)':'white',color:filterName===l.name?'white':'rgb(164,136,46)'}} key={l.id}>{l.name}</span>
            )}
          </div>
          <div className={styles.lists}>
          {
          filteredItems.map((l)=><GalleryCard key={l.id} {...l}/>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallerys