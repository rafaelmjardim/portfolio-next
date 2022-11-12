import styles from './MainPage.module.scss';
import Link from 'next/link';
import Header from '../../components/Header/Header';
const MainPage = () => {
    return (
        <section className={styles.main_page}>
            <div className={styles.main_page_header}>
                <Header/>
            </div>
            
            <div className={styles.main_page_main}>
                <h1 className={styles.main_page_title}>Olá, Eu sou <span>Rafael Jardim!</span></h1>
                <p className={styles.main_page_subtitle}>Desenvolvedor Front-End e design gráfico.</p>

                <div className={styles.main_page_actions}>
                    <Link href='#'><button className={styles.main_page_actions_button}>Portifolio</button></Link>
                    <Link href='#'><button className={styles.main_page_actions_button}>GitHub</button></Link>
                </div>
            </div>
        </section>
    );
}

export default MainPage;