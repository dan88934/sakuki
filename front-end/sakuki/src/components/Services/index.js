import React from 'react'
import Icon1 from '../../images/world.png'
import Icon2 from '../../images/workchat.png'
import Icon3 from '../../images/japan.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
        ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>We help reduce your fees</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>Access our platform online anywhere in the world</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Prenium Benefits</ServicesH2>
            <ServicesP>Unlock our special membership card</ServicesP>
        </ServicesCard>
    </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services