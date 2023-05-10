import React from "react";
import "./City.css";
import Cards from "./Cards";
// import { useHistory } from "react-router-dom";
import pune from '../static/pune.jpeg';
import mumbai from '../static/mumbai.jpg';
import goa from '../static/goa.jpg';
import delhi from '../static/delhi.jpeg';
import kerala from '../static/kerala.jpg';
import banglore from '../static/banglore.webp';

const City = () => {

    // let history = useHistory();
    
    // const onDivClick=(e)=>{
    //     e.preventdefault();
    //     history.push('./pune');
    // }

    return (
    <div id="city">
     <Cards link="pune" title="Pune" photo={pune}/>
     {/* <Cards onClick={()=>{history.push("/pune")}} title="Pune" photo="https://picsum.photos/200"/> */}
     <Cards link="mumbai" title="Mumbai" photo={mumbai}/>
     <Cards link="delhi" title="Delhi" photo={delhi}/>
     <Cards link="kerala" title="Kerala" photo={kerala}/>
     <Cards link="banglore" title="Banglore" photo={banglore}/>
     <Cards link="goa" title="Goa" photo={goa}/>

    </div>
  );
};
export default City;
