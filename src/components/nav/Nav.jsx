import './Nav.scss';

import DarkToggle from '../darktoggle/DarkToggle';

import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineCode} from 'react-icons/ai';
// import {RiServiceLine} from 'react-icons/ri';
import {VscNotebook} from 'react-icons/vsc';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');

  return (
    <nav>
      <a 
        href="/#"
        onClick={()=>setActiveNav('#')}
        className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a 
        href="/#about"
        onClick={()=>setActiveNav('#about')}
        className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a 
        href="/#experience"
        onClick={()=>setActiveNav('#experience')}
        className={activeNav==='#experience'?'active':''}><AiOutlineCode/></a>
      <a href="/#portfolio"
        onClick={()=>setActiveNav('#portfolio')}
        className={activeNav==='#portfolio'?'active':''}><VscNotebook/></a>
      <a href="/#contact"
        onClick={()=>setActiveNav('#contact')}
        className={activeNav==='#contact'?'active':''}><AiOutlineMessage/></a>
      <DarkToggle/>
    </nav>
  );
};

export default Nav;