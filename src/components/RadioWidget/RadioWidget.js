import React, { useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './RadioWidget.module.scss';

const RadioWidget = () => {
    const [radioStations, setRadioStations] = useState([]);
    useEffect(() => {
        fetch('https://api.jsonbin.io/b/5ffe894af98f6e35d5fbe749')
            .then((response) => response.json())
            .then((data) => setRadioStations(data));
    }, []);
    return (
        <div className={styles.container}>
            <Header />
            <Main radioStations={radioStations} />
            <Footer />
        </div>
    );
};

export default RadioWidget;
