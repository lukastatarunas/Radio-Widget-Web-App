import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PuffLoader from 'react-spinners/PuffLoader';

import { getRadioStations } from '../../redux/actions/radioStations';

import styles from './Main.module.scss';
import { css } from '@emotion/core';

const Main = ({ pickRadioStation }) => {
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
                radioStations.map((radioStation) => (
                    <div key={radioStation.id}>
                        {radioStation.id === 1 ? <br /> : null}
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={(event, id = radioStation.id) => pickRadioStation(event, id)}
                            onKeyPress={(event, id = radioStation.id) =>
                                pickRadioStation(event, id)
                            }
                            className={styles.radioStationsContainer}>
                            <p className={styles.radioStation}>{radioStation.name}</p>
                            <p id={styles.frequency} className={styles.radioStation}>
                                {radioStation.frequency}
                            </p>
                        </div>
                        {radioStation.id !== radioStations.length ? (
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
    pickRadioStation: PropTypes.func
};

export default Main;
