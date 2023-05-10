import React from 'react';
import { MDBContainer, MDBIframe } from "mdbreact";
import "./Iframetwo.css"

export const Iframetwo = ({location}) => {
  return (
          <div className="container" id="iframeflex">
    <MDBContainer className="mapcs">
      <MDBIframe className="maptwo" src={location} />
    </MDBContainer>
    </div>
  )
}
