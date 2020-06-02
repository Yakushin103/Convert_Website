import React from 'react';
import DropdownButton from './../LandingPage/DropdownButton.jsx';
import DropdownSelect from './../LandingPage/DropdownSelect.jsx';
import CustomButton from './../LandingPage/CustomButton';
import Logo from '../../image/Logo.png';
import LogoHeader from '../../image/LogoHeader.png';
import LogoWhite from '../../image/LogoWhite4.png';
import Card from '../../image/image68.png';
import './HeaderSection.scss';

const HeaderSection = () => {

    return (
        <div className='header-section'>
            <div className='header-menu'>
                <div className='header-menu-img'>
                <img
                    src={Logo}
                    alt='Logo'
                />
                </div>
                <div><DropdownButton name='Convert' /></div>
                <div><DropdownButton name='Free Credit' /></div>
                <div><DropdownSelect /></div>
            </div>
            <div className='header-content'>
                <div className='header-content-item'>
                    <div className='row'> 
                        <div className='header-menu-img-content' style={{ marginRight: '.2rem' }}>
                            <img
                            src={LogoHeader}
                            alt='header-content'
                            />
                        </div>
                        <h2 style={{ margin: '0' }}>your</h2>
                    </div>
                <h2 style={{ textAlign: 'left' }}>mounthly bills to cash</h2>
                </div>
                <div className='header-content-item'>
                    <div className='header-content-card'>
                        <img
                            src={Card}
                            alt='Card'
                        />
                        <img 
                            style={{ position: 'absolute', top: '27px', right: '200px' }}
                            src={LogoWhite}
                            alt='Logo-white'
                        />
                    </div>
                    <div className='header-content-app'>
                        <CustomButton name='ios' />
                        <CustomButton name='google' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;