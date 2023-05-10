import React from 'react';
import './Icon.css'
import atm from '../../static/atm.png'
import dinner from '../../static/cutlery.png'
import hotel from '../../static/hotel.png'
import carrent from '../../static/carrent.webp'
import vacations from '../../static/vacations.png'
import train from '../../static/train.png'
import weightlifting from '../../static/weightlifter.png'
import park from '../../static/park.png'
import { useHistory } from "react-router-dom";

export const Icon = () => {
  let history = useHistory();
  const showRest =()=>{
    history.push("/pune/historical/restaurants");
  }
  return (
    
    <div className="iconflex" >
    
        <img src={atm} className="rounded" alt="Loading" />
        <img onClick={showRest} src={dinner} className="rounded" alt="Loading" />
        <img src={weightlifting} className="rounded" alt="Loading" />
        <img src={carrent} className="rounded" alt="Loading" />
        <img src={train} className="rounded" alt="loading" />
        <img src={park} className="rounded" alt="Loading" />
        <img src={hotel} className="rounded" alt="Loading" />
        <img src={vacations} className="rounded" alt="Loading" />
      
        
  
    </div>
  )
}
