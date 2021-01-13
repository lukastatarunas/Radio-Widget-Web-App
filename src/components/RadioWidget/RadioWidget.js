import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './RadioWidget.module.scss';

const RadioWidget = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default RadioWidget;
