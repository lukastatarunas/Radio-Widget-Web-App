import React, { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import styles from './RadioWidget.module.scss';

const RadioWidget = () => {
    const [radioStation, setRadioStation] = useState(null);

    const pickRadioStation = (event, id) => setRadioStation(id);

    return (
        <div className={styles.container}>
            <Header />
            <Main radioStation={radioStation} pickRadioStation={pickRadioStation} />
            <Footer radioStation={radioStation} />
        </div>
    );
};

export default RadioWidget;
