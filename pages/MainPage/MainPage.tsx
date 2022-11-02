import styles from './MainPage.module.scss';
import Link from 'next/link';
const MainPage = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.main_title}>Olá, Eu sou <span>Rafael Jardim!</span></h1>
            <p className={styles.main_subtitle}>Desenvolvedor Front-End e design gráfico.</p>

            <div className={styles.main_actions}>
                <Link href='#'><button className={styles.main_actions_button}>Portifolio</button></Link>
                <Link href='#'><button className={styles.main_actions_button}>GitHub</button></Link>
            </div>
        </section>
    );
}

export default MainPage;