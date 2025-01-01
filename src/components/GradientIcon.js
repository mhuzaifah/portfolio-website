import React from 'react';

const GradientIcon = ({ Icon, size }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#696969" offset="22.6%" />
                        <stop stopColor="#ffffff" offset="67.7%" />
                    </linearGradient>
                </defs>
            </svg>

            <Icon style={{ stroke: "url(#gradient)", fill: "url(#gradient)", fontSize: size }} />
        </div>
    );
};

export default GradientIcon;
