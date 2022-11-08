import styles from './StartProject.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import handup from '../../public/icons/handup.png';

type Info = {
    title: string
    txt: string
    btn: string
    btnLink: string
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

            <Link href={props.btnLink}>
                <button className={styles.start_project_button}>
                    <Image src={handup}></Image>
                    {props.btn}
                </button>
            </Link>
        </div>
    );
}

export default StartProject;