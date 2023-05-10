import React from 'react';
import "./City.css";
import { useHistory } from "react-router-dom";

const Cards = ({title,photo,link}) => {
    let history = useHistory();
    return (
    <div className="gallery" onClick={()=>{history.push(`/${link}`)}}>
      <img
        src={photo}
        alt="Cinque Terre"
        width="600"
        height="400"
      />
      <h3><b>{title}</b></h3>
  </div>
  )
}
export default Cards;