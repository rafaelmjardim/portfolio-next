import styles from './StartProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import handup from '../../public/icons/handup.png';

type Info = {
    title: string
    txt: string
    btn: string
}

const StartProject = (props: Info) => {
    return (
        <div className={styles.start_project}>
            <h2 className={styles.start_project_title}>
                {props.title}
            </h2>

            <p className={styles.start_project_txt}>
                {props.txt}
            </p>

            <Link href={"https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"}>
                <button className={styles.start_project_button}>
                    <Image src={handup}></Image>
                    {props.btn}
                </button>
            </Link>
        </div>
    );
}

export default StartProject;