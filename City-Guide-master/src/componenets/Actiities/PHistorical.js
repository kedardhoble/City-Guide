import React from 'react'
import { Activitybar } from './Activitybar'
import { Icon } from './Icon'
import Iframe from './Iframe'

export const PHistorical = () => {
  return (
    <div>
      <Iframe location={"https://www.google.com/maps/d/embed?mid=1L_Lje1sw3gbh7Qvt1uCGzZgw_VA&ehbc=2E312F" }/>
      <Icon/>
      <Activitybar />
    </div>
  )
}