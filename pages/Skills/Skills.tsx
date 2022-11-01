import styles from './Skills.module.scss'
const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.skills_content}>
                <h2 className={styles.skills_content_title}>Minhas Habilidade e Tecnologias</h2>
                <p className={styles.skills_content_txt}>Essas são as ferramentas que utilizo diariamente nos meu projetos...</p>
            </div>
            <div className={styles.skills_icons}>
                icons Group
            </div>
        </div>
    );
}

export default Skills;