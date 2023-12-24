import React, { useEffect, useState } from "react";
import styles from "./productshow.module.css";
import opal1 from "../../assets/opal1.png";
import opal2 from "../../assets/opal2.png";
import opal3 from "../../assets/opal3.png";
import opal4 from "../../assets/logopng.png";
import { NavLink } from "react-router-dom";

const ProductShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedItem,setSelectedItem]=useState(2)

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [selectedItem]);

  useEffect(() => {
      setIsVisible(false);
      setInterval(() => {
        setIsVisible(true)
      }, 1000);
  }, [selectedItem]);

  const minerals = [
    {
      id: 1,
      name: 'Silka Sand',
      img:opal1,
      description: 'Abundant mineral with crystal structure. Used in jewelry and electronics.',
    },
    {
      id: 2,
      name: 'Lithium',
      img:opal2,
      description: 'Group of minerals found in Earths crust. Used in ceramics and glass manufacturing.',
    },
    {
      id: 3,
      name: 'Tantalum',
      img:opal3,
      description: 'Carbonate mineral used in cement production and as a soil conditioner.',
    },
    {
      id: 4,
      name: 'Cristal opal',
      img:opal4,
      description: 'Soft sulfate mineral used in construction and as a fertilizer.',
    },
    {
      id: 5,
      name: 'Amytst quartz',
      img:opal1,
      description: 'Sheet silicate minerals with excellent insulating properties.',
    },
  ];

  const products=[
    {id:1,rol:'01'},
    {id:2,rol:'02'},
    {id:3,rol:'03'},
    {id:4,rol:'04'},
    {id:5,rol:'05'},
]
  return (
    <div className={styles.cont}>
      <div className={styles.slider}>
        <div className={styles.lines}>{products.map(l=><span key={l.id} style={{background:selectedItem >= l.id?'rgb(164,136,46)':'transparent'}} className={styles.line}></span>)}</div>
        <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'rgb(164,136,46)':'transparent',color:selectedItem===l.id?'white':'rgb(164,136,46)'}} onClick={()=>setSelectedItem(l.id)} className={styles.rolnum}>{l.rol}</span>)}</div>
      </div>
      <div className={styles.contentbox}>
      <div className={styles.content}>
        <span className={isVisible ? styles.title:styles.hiddentitle}>{minerals.find((mineral) => mineral.id === selectedItem).name}</span>
        <span className={isVisible ? styles.description : styles.hiddendes}>{minerals.find((mineral) => mineral.id === selectedItem).description}</span>
        <div className={styles.orderbtnbox}>
          <NavLink className={isVisible ? styles.orderbtn:styles.hiddenorderbtn}>Order Now</NavLink>
        </div>
      </div>
      <div className={styles.imgs}><img className={isVisible ? styles.showimg:styles.hideimg} src={minerals.find((mineral) => mineral.id === selectedItem).img} alt="mineral"/></div>
      </div>
    </div>
  );
};

export default ProductShow;
