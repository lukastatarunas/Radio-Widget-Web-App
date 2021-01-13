import backArrow from '../../images/back-arrow.png';
import onOff from '../../images/switch.png';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                className={styles.headerIcon}
                src={backArrow}
                alt="back-arrow-button-icon"
                width="20px"
            />
            <p className={styles.headerText}>STATIONS</p>
            <img className={styles.headerIcon} src={onOff} alt="on-off-button-icon" width="30px" />
        </header>
    );
};

export default Header;
