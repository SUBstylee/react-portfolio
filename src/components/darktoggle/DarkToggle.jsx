import './DarkToggle.scss';

import {BsSun} from 'react-icons/bs';
import {BsMoonStars} from 'react-icons/bs';
import { useState } from 'react';

const DarkToggle = () => {
    const [light,setLight]=useState(localStorage.theme==='light'?'light':'dark');
    const switchTheme=()=>{
        if(light==='light'){
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }else{
            document.documentElement.setAttribute('data-theme', '');
            localStorage.setItem('theme', 'dark');
        };
    };
    switchTheme();
    const toggleSwitch=(e=>{
        setLight(light==='light'?'dark':'light');
        switchTheme();
    });
  return (
    <div className='dark__toggle'>
        <span id='icon'>            
            <label className="switch">
                <input type="checkbox" checked={localStorage.theme==='light'?true:false} onChange={toggleSwitch}/>
                <div className="slider round">{light==='light'?<BsSun className='mode-icon mode-light'/>:<BsMoonStars className='mode-icon'/>}</div>
            </label>
        </span>
    </div>
  );
};

export default DarkToggle;