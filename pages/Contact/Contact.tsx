import styles from './Contact.module.scss';

import Link from 'next/link';

import Image from 'next/image';
import logo from '../../public/logo.png';
import instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';
import github from '../../public/icons/github.svg';
import email from '../../public/icons/email.svg';
import whatsapp from '../../public/icons/whatsapp.svg';
import Footer from '../../components/Footer/Footer';
import StartProject from '../../components/StartProject/StartProject';

const Contact = () => {
   
    const openNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };

    return (
        <section id='contact' className={styles.contact}>
            <StartProject 
                title='Iniciar um projeto'
                txt='Interessado em meu trabalho?
                Devíamos arranjar uma hora para conversar.
                Vou preparar o café.'
                btn='Vamos Fazer isso'
                btnLink='https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!'
            />
            <div className={styles.contact_content}>
                <div className={styles.contact_content_logo}>
                    <Image src={logo}/>
                </div>

                
                <h2 className={styles.contact_content_txt}>
                    Criamos paginas web da maneira que você deseja, aqui tudo é possível e podemos <span>realizar!</span>
                </h2>
               

                <div className={styles.contact_content_icons}>

                  
                    <div className={styles.contact_content_icons_icon} onClick={() => openNewTab('https://www.instagram.com/rafaelmjardim/')}>
                        <Image className={styles.contact_content_icons_icon_img} src={instagram}/>
                    </div>
                    

                    <div className={styles.contact_content_icons_icon} onClick={() => openNewTab('https://www.linkedin.com/in/rafaelmjardim/')}>
                        <Image src={linkedin}/>
                    </div>
                    
                    <div className={styles.contact_content_icons_icon} onClick={() => openNewTab('https://github.com/rafaelmjardim')}>
                        <Image src={github}/>
                    </div>

                    <div className={styles.contact_content_icons_icon}>
                        <Image src={email}/>
                    </div>

                    <div className={styles.contact_content_icons_icon} onClick={() => openNewTab('https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!')}>
                        <Image src={whatsapp}/>
                    </div>

                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default Contact;