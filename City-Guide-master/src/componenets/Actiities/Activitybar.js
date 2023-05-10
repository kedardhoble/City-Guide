import React from 'react';
import "./Activitybar.css"
import bhushi from "../../static/bhushi-dam1.jpg"
import canyon from "../../static/Canyon-trek.png"
import della from "../../static/Della.png"
import lohgad from "../../static/lohagad.webp"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SHANI from "../../static/shaniwarwada.jpg";
import { useHistory } from "react-router-dom";

export const Activitybar = () => {
  let history = useHistory();
  const showShaniwarwada =()=>{
    history.push("/pune/historical/shnaiwarwada");
  }
  const showSinhagad =()=>{
    history.push("/pune/historical/sinhagad");
  }
  return (
     <div className="container" id="cardid" align="center">
    <div >
   
      
      <Card.Body className="actimg" >
      <Card.Img variant="top" className="image" src={SHANI} height="100px" width="100px"/>
        <Card.Title>Shaniwar Wada</Card.Title>
        <Card.Text className="ct">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={showShaniwarwada} className="btn" variant="dark">Get Location</Button>
      </Card.Body>
  
    </div>
<div>
{/* <Card style={{ }}> */}
<Card.Body className="actimg">
<Card.Img variant="top" className="image" src={canyon} height="100px" width="100px"/>
  <Card.Title >Sinhagad</Card.Title>
  <Card.Text className="ct">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button onClick={showSinhagad} className="btn" variant="dark">Get Location</Button>
</Card.Body>
{/* </Card> */}
</div>
<div >
    {/* <Card style={{ }}> */}
    
      <Card.Body className="actimg" >
      <Card.Img variant="top" className="image" src={della} height="100px" width="100px" />
        <Card.Title>Hotel Della</Card.Title>
        <Card.Text className="ct">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn" variant="dark">Get Location</Button>
      </Card.Body>
    {/* </Card> */}
    </div>
    <div >
    {/* <Card style={{ }}> */}
      
      <Card.Body className="actimg" >
      <Card.Img variant="top" className="image" src={lohgad} height="100px" width="100px"/>
        <Card.Title>Lohagad-Fort</Card.Title>
        <Card.Text className="ct">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="btn" variant="dark">Get Location</Button>
      </Card.Body>
    {/* </Card> */}
    </div>
</div>
  )
}
