import React, { useState } from 'react';

const PortfolioText = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prev => !prev);
    };

    console.log("render");

    return (
        <button onClick={handleToggle}>{+isToggled}</button>
    );
};

export default PortfolioText;