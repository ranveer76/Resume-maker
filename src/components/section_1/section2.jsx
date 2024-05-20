// SectionTwo.js
import React from 'react';

function SectionTwo({children}) {
    return (
        <div className="section-two bg-bright">
        <div className="container">
            <div className="section-two-content">
            <div className="section-items">
                {children}
            </div>
            </div>
        </div>
        </div>
    );
}

export default SectionTwo;
