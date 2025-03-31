import React from 'react';
import bannerImage from './flowers.jpg';

const Banner: React.FC = () => {
    return (
        <div style={{
            width: '100%',
            position: 'fixed',
            height: '120px',
            overflow: 'hidden',
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <img
                src={bannerImage}
                alt="Website Banner"
                style={{ width: '100%', display: 'block' }}
            />
        </div>
    );
};


export default Banner;

