import React from 'react';
import HeaderSection from './../HeaderSection/HeaderSection';
import IntroduceSection from './../IntroduceSection/IntroduceSection';
import ConvertPay from './../ConvertPay/ConvertPay';
import './LandingPage.scss';

const LandingPage = () => {

    return (
        <>
            <HeaderSection />
            <IntroduceSection />
            <ConvertPay />
        </>
    )
}

export default LandingPage;