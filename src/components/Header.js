import React from 'react';
import Typed from 'react-typed';
 
export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                
                <Typed
                    className="typed-text"
                    strings={["Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

