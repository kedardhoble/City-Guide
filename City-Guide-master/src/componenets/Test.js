import React from 'react'
import { useHistory } from "react-router-dom";
import Cards from './Cards';

export const Test = () => {
    let history = useHistory();

    return (
    <div>
        <img onClick={()=>{history.push("/pune")}} src="https://picsum.photos/200"/>
     <Cards onClick={()=>{history.push("/pune")}} cityname="Pune" cityimage="https://picsum.photos/200"/>
        
    </div>
  )
}
