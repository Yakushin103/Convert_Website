import React from 'react';
import { Button } from 'antd';
import { AppleFilled } from '@ant-design/icons';
import image from '../../image/Google_Play-Icon-Logo.wine.png';

const CustomButton = ({name}) => {


    return (
        <div>
            <Button style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <div>
                    {
                        name === 'ios' ?
                        <AppleFilled style={{ color: 'white', fontSize: '2rem', marginRight: '.4rem' }}  /> :
                        <img src={image} style={{ width: '70px', height: '49px', marginRight: '-1rem' }}  />
                    }
                </div>
                    {
                        name === 'ios' ?
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
                            <p style={{ margin: '0', fontSize: '.6rem' }}>Download on the</p>
                            <h6 style={{ fontSize: '1rem', color: 'white' }}>App Store</h6>
                        </div> :
                        <div style={{ display: 'flex', flexDirection: 'column', color: 'white', marginLeft: '4px' }}>
                            <p style={{ margin: '0', fontSize: '.6rem' }}>Get in on</p>
                            <h6 style={{ fontSize: '1rem', color: 'white' }}>Google Play</h6>
                        </div>
                    }
            </Button>
        </div>
    )
}

export default CustomButton;