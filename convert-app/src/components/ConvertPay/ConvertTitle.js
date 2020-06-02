import React from 'react';

const ConvertTitle = ({logo}) => {


    return (
        <div className='convert-title'>
            <div className='row'>
                <h4>Our platform is designed for 
                    users to convert their monthly fixed 
                    bills (Rental (Office, Retail, 
                    Home) & Installment Payment...)</h4>
            </div>
            <div className='row'>
                <h4>to new form of cash while they utilise</h4>
                <img 
                    style={{ marginLeft: '.5rem' }}
                    src={logo}
                    alt='Logo'
                />
            </div>
        </div>
    )
}

export default ConvertTitle;