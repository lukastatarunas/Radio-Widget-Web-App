import styles from './Main.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { getRadioStations } from '../../redux/actions/radioStations';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/core';

const Main = () => {
    const dispatch = useDispatch();

    const radioStations = useSelector((state) => state.radioStations.radioStations);
    const loading = useSelector((state) => state.radioStations.loading);
    const error = useSelector((state) => state.radioStations.error);

    useEffect(() => {
        dispatch(getRadioStations());
    }, []);

    const handleClick = (event, id) => {
        console.log(id);
    };

    return (
        <main className={styles.main}>
            {loading && <PuffLoader css={override} />}
            {!radioStations && !loading && <p>No radioStations available!</p>}
            {error && !loading && <p>{error}</p>}
            {radioStations &&
                radioStations.map((radioStation) => (
                    <div key={radioStation.id}>
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={(event, id = radioStation.id) => handleClick(event, id)}
                            onKeyPress={handleClick}
                            className={styles.radioStationsContainer}>
                            <p className={styles.paragraph}>{radioStation.name}</p>
                            <p id={styles.frequency} className={styles.paragraph}>
                                {radioStation.frequency}
                            </p>
                        </div>
                        <hr className={styles.hr}></hr>
                    </div>
                ))}
        </main>
    );
};

const override = css`
    display: block;
    margin: 0 auto;
`;

// Main.propTypes = {
//     radioStations: PropTypes.array
// };

export default Main;
