import styles from './Header.module.scss';
import Image from 'next/image';
import Logo from "../../public/logo.png";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <Image 
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
                <li><a href="#">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
            
            <div className={styles.header_action}>
                <button className={styles.header_action_button}>Contatar</button>
            </div>
        </div>

    );
}

export default Header;