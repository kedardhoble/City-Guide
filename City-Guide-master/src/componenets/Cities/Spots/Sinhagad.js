import React from 'react';
import Iframe from '../../Actiities/Iframe';
import { Icon } from '../../Actiities/Icon';
import { Activitybar } from '../../Actiities/Activitybar';

export const Sinhagad = () => {
  return (
    <div>
    <Iframe location={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121170.67146059778!2d73.6240417625!3d18.366277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc293e6861118d9%3A0xcbb4d589c7d4e90b!2sSinhagad%20Fort!5e0!3m2!1sen!2sin!4v1658589951845!5m2!1sen!2sin"}/>
    <Icon/>
    <Activitybar />
    </div>
  )
}