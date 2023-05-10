import React from 'react';
import Cards from '../Cards';
import "../City.css";
import histo from '../../static/hist.jpeg'
import museum from '../../static/museum.jpg';
import Trek from '../../static/Trek.webp';

export const Mumbai = () => {
  return (
    <div id="city">
    <Cards link="mumbai/trekking" title="Trekking" photo={Trek}/>  
    <Cards link="mumbai/museum" title="Museum" photo={museum}/> 
    <Cards link="mumbai/historical" title="Historical" photo={histo}/>
</div>
  )
}
