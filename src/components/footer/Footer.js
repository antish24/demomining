import React from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logopng.png'

const Footer = () => {
    const links=[
        {id:1,herf:'/gallery',name:'Gallery'},
        {id:1,herf:'/contact',name:'Contact'},
        {id:1,herf:'/service',name:'Service'},
        {id:1,herf:'/about',name:'About'},
    ]

    const scrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

  return (
    <div className={styles.cont}>
        <div className={styles.box}>
            <NavLink to={'/'} onClick={scrollTop} className={styles.logo}>
                <img src={logo} alt='logo'/>
            </NavLink>
            <div className={styles.content}>
                <div className={styles.links}>{links.map(l=><NavLink onClick={scrollTop} key={l.id} to={l.herf}>{l.name}</NavLink>)}</div>
                <div className={styles.copyright}> &copy; Copyright ZOE MINING. All Rights Reserved
                Designed by <a href='https://ish24.vercel.app/'>Zoe Life Technologies</a></div>
            </div>
        </div>
    </div>
  )
}

export default Footer