import styles from '../MainPage/MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={styles.main_page} >
            <h1>Olá, Eu sou <span>Rafael Jardim!</span></h1>
            <p>Desenvolvedor Front_End e design gráfico.</p>

            <div>
                <a href="#">Portifolio</a>
                <a href="#">GitHub</a>
            </div>
        </div>
    );
}

export default MainPage;