import styles from './Contact.module.scss';

import Link from 'next/link';

import Image from 'next/image';
import logo from '../../public/logo.png';
import instagram from '../../public/icons/instagram.svg';
import linkedin from '../../public/icons/linkedin.svg';
import github from '../../public/icons/github.svg';
import email from '../../public/icons/email.svg';
import whatsapp from '../../public/icons/whatsapp.svg';

const Contact = () => {
   
    const openNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };

    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.contact_content}>
                <div className={styles.contact_content_logo}>
                    <Image src={logo}/>
                </div>

                
                <h2 className={styles.contact_content_txt}>
                    Criamos paginas web da maneira que você deseja, aqui tudo é possível e podemos <span>realizar!</span>
                </h2>
               

                <div className={styles.contact_content_icons}>

                  
                    <div className={styles.contact_content_icons_icon} onClick={() => openNewTab('https://www.linkedin.com/in/rafaelmjardim/')}>
                        <Image src={instagram}/>
                    </div>
                    

                    <Link href="https://www.linkedin.com/in/rafaelmjardim/" target="_blank">
                        <div className={styles.contact_content_icons_icon}>
                            <Image src={linkedin}/>
                        </div>
                    </Link>
                    
                    <Link href="https://github.com/rafaelmjardim" target="_blank">
                        <div className={styles.contact_content_icons_icon}>
                            <Image src={github}/>
                        </div>
                    </Link>

                    <Link href="rafaelmjardim@gmail.com" target="_blank">
                        <div className={styles.contact_content_icons_icon}>
                            <Image src={email}/>
                        </div>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank">
                        <div className={styles.contact_content_icons_icon}>
                            <Image src={whatsapp}/>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Contact;