import styles from './Projects.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import gallery1 from '../../public/capas/mr3.png';
import gallery2 from '../../public/capas/galeria2.png';
import gallery3 from '../../public/capas/travel-turk.png';
import gallery4 from '../../public/capas/payment.png';
import gallery5 from '../../public/capas/travel.png';
import gallery6 from '../../public/capas/login.png';

const Projects = () => {

   const handleOpenNewTab = (url: string) => {
        window.open(url, '_blank');
    }

    return (
        <section id='projects' className={styles.projects}>
            <div className={styles.projects_header}>
                <h2 className={styles.projects_header_title}>Projetos</h2>
                <p className={styles.projects_header_txt}>Alguns de meus projetos que trabalhei anteriormente</p>
            </div>

            <div className={styles.projects_main}>
                <div className={styles.projects_main_gallery}>
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery1}
                            alt="Imagem da galeria" 
                            onClick={() => handleOpenNewTab('https://www.mr3licitacoes.com.br/')}
                        ></Image>
                    </div> 
                   
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery2}
                            alt="Imagem da galeria"
                            onClick={() => handleOpenNewTab('https://coffeelayout.vercel.app/')}
                        ></Image>
                    </div> 
                   
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery3}
                            alt="Imagem da galeria"
                            onClick={() => handleOpenNewTab('https://travel-landinpage.vercel.app/')}
                        ></Image>
                    </div> 
                   
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery4}
                            alt="Imagem da galeria"
                            onClick={() => handleOpenNewTab('https://spa-angular-xi.vercel.app/')}
                        ></Image>
                    </div> 
                   
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery5}
                            alt="Imagem da galeria"
                            // onClick={() => handleOpenNewTab('')}
                        ></Image>
                    </div> 
                   
                    <div className={styles.projects_main_gallery_box}>
                        <Image 
                            src={gallery6}
                            alt="Imagem da galeria"
                            onClick={() => handleOpenNewTab('https://login-angular.vercel.app/')}
                        ></Image>
                    </div> 
                    
                    
                </div>
            </div>
        </section>
    );
}

export default Projects;