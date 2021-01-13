import styles from './Main.module.scss';
import PropTypes from 'prop-types';

const Main = ({ radioStations }) => {
    return (
        <main className={styles.main}>
            {radioStations.map((radioStation) => (
                <div key={radioStation.id}>
                    <div className={styles.radioStationsContainer}>
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

Main.propTypes = {
    radioStations: PropTypes.array
};

export default Main;
