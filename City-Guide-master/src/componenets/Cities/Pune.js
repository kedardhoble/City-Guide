import React from 'react'
import Cards from '../Cards';
import "../City.css";
import histo from '../../static/hist.jpeg'
import museum from '../../static/museum.jpg';
import Trek from '../../static/Trek.webp';


const Pune = () => {
  return (
    <div id="city">
        <Cards title="Historical" link="pune/historical" photo={histo}/>
        <Cards title="Museum" link="pune/Museum" photo={museum}/> 
        <Cards title="Trekking" link="pune/Trekking" photo={Trek}/>  
    </div>
  )
}
export default Pune;