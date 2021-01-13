import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PuffLoader from 'react-spinners/PuffLoader';

import { getRadioStations } from '../../redux/actions/radioStations';

import minus from '../../images/minus.png';
import radio from '../../images/radio.png';
import plus from '../../images/plus.png';

import styles from './Main.module.scss';
import { css } from '@emotion/core';

const Main = ({ radioStation, pickRadioStation }) => {
    const dispatch = useDispatch();

    const radioStations = useSelector((state) => state.radioStations.radioStations);
    const loading = useSelector((state) => state.radioStations.loading);
    const error = useSelector((state) => state.radioStations.error);

    useEffect(() => {
        dispatch(getRadioStations());
    }, []);

    return (
        <main className={styles.main}>
            {loading && <PuffLoader css={override} />}
            {!radioStations && !loading && <p>No Radio Stations available!</p>}
            {error && !loading && <p>{error}</p>}
            {radioStations &&
                radioStations.map((station) => (
                    <div key={station.id}>
                        {station.id === radioStation ? (
                            <div className={styles.radioStationsPopUp}>
                                <img
                                    className={styles.radioStationsIcon}
                                    src={minus}
                                    alt="minus-button-icon"
                                />
                                <img
                                    className={styles.radioStationsImage}
                                    src={radio}
                                    alt="radio-station"
                                    width="80px"
                                    height="80px"
                                />
                                <img
                                    className={styles.radioStationsIcon}
                                    src={plus}
                                    alt="plus-button-icon"
                                />
                            </div>
                        ) : null}
                        {station.id === 1 ? <br /> : null}
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={(event, id = station.id) => pickRadioStation(event, id)}
                            onKeyPress={(event, id = station.id) => pickRadioStation(event, id)}
                            className={styles.radioStationsContainer}>
                            <p className={styles.radioStation}>{station.name}</p>
                            <p id={styles.frequency} className={styles.radioStation}>
                                {station.frequency}
                            </p>
                        </div>
                        {station.id !== radioStations.length ? (
                            <hr className={styles.hr}></hr>
                        ) : null}
                    </div>
                ))}
        </main>
    );
};

const override = css`
    display: block;
    margin: 0 auto;
`;

Main.propTypes = {
    radioStation: PropTypes.number,
    pickRadioStation: PropTypes.func
};

export default Main;
