import React, { useState } from "react";
import { NavLink,useLocation  } from "react-router-dom";
import styles from "./topnavbar.module.css";
import logo from '../../assets/logopng.png'
import { RiMenu4Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

const TopNavBar = () => {

  const Links=[
    {id:1,href:'/',name:'Home'},
    {id:2,href:'/service',name:'Service'},
    {id:3,href:'/gallery',name:'Gallery'},
    {id:4,href:'/about',name:'About'},
    {id:5,href:'/contact',name:'Contact'},
  ]

  const [showMenu,setShowMenu]=useState(false)
  const location =useLocation()

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior:'instant' });
  }

  return (
    <div className={styles.cont}>
      <div className={styles.navbox}>
        <NavLink className={styles.logobox} to='/'>
          <img className={styles.logo} src={logo} alt="logo"/><span className={styles.logoname}>ACORDIA</span>
        </NavLink>
        <div className={styles.linkbox}>
          {Links.map((link=><NavLink onClick={()=>scrollTop()} style={{color:location.pathname===link.href || (location.pathname.startsWith(`/service`) && location.pathname.startsWith('/service')===link.href.startsWith('/service'))?'rgb(164,136,46)':'gray'}} key={link.id} to={link.href}>{link.name}</NavLink>))}
          <NavLink onClick={()=>scrollTop()} className={styles.alinks} to={'/appointment'}>Appointment</NavLink>
        </div>
        <div className={styles.menulinkbox} style={{top:showMenu?'0':'-120%'}}>
            <div className={styles.closemenu} onClick={()=>setShowMenu(false)}><AiFillCloseCircle size={30}/></div>
          {Links.map((link=><NavLink onClick={()=>{setShowMenu(false);scrollTop()}} style={{color:location.pathname===link.href?'rgb(164,136,46)':'rgba(0,0,0,.7)'}} key={link.id} to={link.href}>{link.name}</NavLink>))}
          <NavLink onClick={()=>{setShowMenu(false);scrollTop()}} className={styles.alinks} to={'/appointment'}>Appointment</NavLink>
        </div>
        <div className={styles.menubox} onClick={()=>setShowMenu(true)}><RiMenu4Line size={25}/></div>
      </div>
    </div>
  );
};

export default TopNavBar;
