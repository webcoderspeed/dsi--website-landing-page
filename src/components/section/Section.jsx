import React from 'react';
import InfoSection from '../infoSection/InfoSection';
import WelcomeSection from '../welcomeSection/WelcomeSection';
import { IntroData, WelcomeData } from './Data';
import  ProductAndService  from '../productandservice/ProductAndService';
import Footer from '../footer/Footer';

const IntroSection = () => {
  return (
    <>
     <InfoSection {...IntroData}/> 
     <WelcomeSection {...WelcomeData} />
     <ProductAndService />
     <Footer />
    </>
  )
}

export default IntroSection
