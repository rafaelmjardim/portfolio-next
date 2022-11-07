import styles from './StartProject.module.scss';7

const StartProject = () => {
    return (
        <div className={styles.start_project}>
            <h2 className={styles.start_project_title}>Iniciar um projeto</h2>

            <p className={styles.start_project_txt}>Interessado em meu trabalho?
             Devíamos arranjar uma hora para conversar.
             Vou preparar o café.</p>

             <button className={styles.start_project_button}>Vamos fazer isso</button>
        </div>
    );
}

export default StartProject;