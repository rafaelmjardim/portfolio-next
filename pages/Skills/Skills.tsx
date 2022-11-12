import styles from './Skills.module.scss'

import Image from 'next/image';
import html from '../../public/icons/html.svg'
import css from '../../public/icons/css.svg'
import js from '../../public/icons/js.svg'
import git from '../../public/icons/git.svg'
import github from '../../public/icons/github_box.svg'
import vscode from '../../public/icons/vscode.svg'
import angular from '../../public/icons/angular.svg'
import sass from '../../public/icons/sass.svg'
import react from '../../public/icons/react.svg'
import ts from '../../public/icons/ts.svg'


const Skills = () => {
    return (
        <section id='skills' className={styles.skills}>
            <div className={styles.skills_content}>
                <h2 className={styles.skills_content_title}>Minhas Habilidade e Tecnologias</h2>
                <p className={styles.skills_content_txt}>
                    Essas são as ferramentas que utilizo diariamente nos meu projetos...
                </p>
            </div>
            <div className={styles.skills_icons}>
                <div className={styles.skills_icons_group}>
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={html}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={css}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={js}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={git}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={github}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={vscode}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={angular}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={sass}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={react}/>
                    </div>
                    
                    <div className={styles.skills_icons_group_box}>
                        <Image alt="Icons Skills" src={ts}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;