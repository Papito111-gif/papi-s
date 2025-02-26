import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Container1 from './containers/Container1'
import Container2 from './containers/Container2'
import Container3 from './containers/Container3'
import Container4 from './containers/Container4'
import Container5 from './containers/Container5'
import Footer from './Footer'

function page() {
  return (
    < >
      <Navbar/>
     <Container1/>
     <Container2/>
     <Container3/>
     <Container4/>
     <Container5/>
     <Footer/>
    </>
  )
}

export default page
