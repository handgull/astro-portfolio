import React, { useState } from 'react';
import styles from "./hidden-text.module.css";

const PortfolioText = (props) => {
    const [isTranslated, setIsTranslated] = useState(false);

    const handleToggle = () => {
        setIsTranslated(prev => !prev);
    };

    return (
        <>
            <span className={isTranslated ? styles.hidden : ""}>{props.en}</span>
            <span className={isTranslated ? "" : styles.hidden}>{props.it}</span>
            <button onClick={handleToggle}>{+isTranslated}</button>
        </>
    );
};

export default PortfolioText;
