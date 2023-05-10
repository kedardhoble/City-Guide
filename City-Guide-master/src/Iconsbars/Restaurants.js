import React from 'react';
import Iframe from '../componenets/Actiities/Iframe';
import { Icon } from '../componenets/Actiities/Icon';
import { Activitybar } from '../componenets/Actiities/Activitybar';

export const Restaurants = () => {
  return (
    <div>
    <Iframe location={"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30260.828938550854!2d73.76956494574648!3d18.5468061842501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1658821923820!5m2!1sen!2sin"}/>
    <Icon/>
    <Activitybar />
    </div>
    )
}