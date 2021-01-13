import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

const Footer = ({ radioStation }) => {
    const radioStations = useSelector((state) => state.radioStations.radioStations);

    const pickedRadioStation = radioStations.filter((station) => station.id === radioStation);

    return (
        <footer className={styles.footer}>
            {pickedRadioStation.map((station) => (
                <div className={styles.container} key={station.id}>
                    <span className={styles.footerText}>CURRENTLY PLAYING</span>
                    <span className={styles.radioStation}>{station.name}</span>
                </div>
            ))}
        </footer>
    );
};

Footer.propTypes = {
    radioStation: PropTypes.number
};

export default Footer;
