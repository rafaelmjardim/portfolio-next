import styles from './Header.module.scss';
import Image from 'next/image';
import Logo from "../../public/logo.png";
import handleNewTabLink from '../handleNewTabLink';
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import MenuMobile from '../MenuMobile/MenuMobile';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <Image 
                    alt='Logo'
                    src={Logo}
                    width={102}
                    height={110.78}
                    placeholder="blur"
                />
            </div>

            <ul className={styles.header_menu}>
                <li><a href="#"><span>Home</span></a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            
            <div className={styles.header_action}>
                <button className={styles.header_action_button} onClick={() => handleNewTabLink('https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!')}>Contatar</button>
                <div className={styles.header_action_mobile} onClick={() => showMenu = !showMenu}>
                    <HiMenuAlt1/>
                </div>
            </div>


            <div className="menu_mobile" >
                Menu Mobile
                <MenuMobile/>
            </div>
        </div>

    );
}

export default Header;