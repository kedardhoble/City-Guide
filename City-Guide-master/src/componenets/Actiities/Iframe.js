import "./Iframe.css"
import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const Iframe = ({location}) => {
  return (
    <div className="container" id="iframeflex">
    <MDBContainer className="mapcs">
      <MDBIframe className="map" src={location} />
    </MDBContainer>
    </div>
  );
}

export default Iframe;