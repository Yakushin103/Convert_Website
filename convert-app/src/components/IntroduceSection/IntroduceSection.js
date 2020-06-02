import React from 'react';
import PhoneImgFirst from '../../image/phone_1.png';
import PhoneImgSecond from '../../image/phone_2.png';
import PhoneImgThird from '../../image/phone_3.png';
import Logo from '../../image/Logo.png';
import Video from '../../image/video.png';
import './IntroduceSection.scss';

const IntroduceSection = () => {


    return (
        <div className='introduce-section'>
            <div className='introduce-section-item' style={{ position: 'relative' }}>
                <img
                    src={PhoneImgFirst}
                    alt='Phone 1'
                />
                <img
                    style={{ position: 'absolute', top: '59px', left: '169px' }}
                    src={PhoneImgSecond}
                    alt='Phone 2'
                />
                <img
                    style={{ position: 'absolute', zIndex: '999', top: '120px', right: '0' }}
                    src={PhoneImgThird}
                    alt='Phone 3'
                />
            </div>
            <div className='introduce-section-item'>
                <div className='introduce-item-content'>
                    <h2>Introduce</h2>
                    <div className='row'>
                        <img 
                            src={Logo}
                            alt='Logo'
                        />
                        <p style={{ marginBottom: '0' }}>completely rethink everything about</p>
                            <p>internet & traditional economy’s value
                            creation. We choose to help user to ease
                            their monthly fixed payment pain point. 
                            We combined the internet economy & traditional
                            economy as one. Where Users will gain two (2)
                             benefits from one transaction. Our platform 
                             has enabled and simplified it so to be seamless to you.</p>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <img
                            style={{ position: 'absolute', right: '0', borderRadius: '10px' }}
                            src={Video}
                            alt='Video'
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntroduceSection;