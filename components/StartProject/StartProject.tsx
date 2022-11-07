import styles from './StartProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import handup from '../../public/icons/handup.png';

const StartProject = () => {
    return (
        <div className={styles.start_project}>
            <h2 className={styles.start_project_title}>Iniciar um projeto</h2>

            <p className={styles.start_project_txt}>Interessado em meu trabalho?
             Devíamos arranjar uma hora para conversar.
             Vou preparar o café.</p>

            <Link href={"https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"}>
                <button className={styles.start_project_button}>
                    <Image src={handup}></Image>
                    Vamos fazer isso
                </button>
            </Link>
        </div>
    );
}

export default StartProject;