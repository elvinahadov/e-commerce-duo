import React from 'react'
import WhiteZone from './whiteZone'
import MainFooter from './mainFooter'
import Subscribe from './subscribe'

const Footer = () => {
  return (
    <div className='relative'>
      <WhiteZone/>
      <Subscribe/>
      <MainFooter/>
    </div>
  )
}

export default Footer
