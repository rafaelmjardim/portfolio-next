import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            Copyright © 2022 | Feito por <span>Rafael Jardim.</span>
        </div>
    );
}

export default Footer;