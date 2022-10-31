import styles from './About.module.scss';
import Image from 'next/image';
import imgPerfil from '../../public/perfil.jpg';
const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about_perfil}>
                <Image className={styles.about_perfil_img} 
                    src={imgPerfil} 
                    alt='Imagem de perfil'>
                </Image>
            </div>

            <div className={styles.about_article}>
                <h2 className={styles.about_article_title}>Sobre mim</h2>
                <p className={styles.about_article_txt}>Iniciei minha jornada como desenvolvedor e 
                design freelancer, onde adiquiri muitos conhecimentos e 
                habilidades, fiz trabalhos remotos para micro empresas e trabalhei com 
                pessoas muito talentosas criando sistemas e soluções digitais.</p>
                <p className={styles.about_article_txt}>Estou sempre a procura de novos desafios, tendo o desenvolvimento de 
                minhas habilidades e a geração de resultados como objetivo.</p>
            </div>
        </section>
    );
}

export default About;