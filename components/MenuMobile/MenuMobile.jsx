import styles from './MenuMobile.module.scss';
import handleNewTabLink from '../handleNewTabLink';

const MenuMobile = (props) => {
    console.log(props.showMenu);
    return (
        <div className={styles.menu_mobile}>
            <ul className={styles.menu_mobile_options}>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>

            <div className={styles.menu_mobile_action}>
                <button className={styles.menu_mobile_action_button} onClick={() => handleNewTabLink('https://api.whatsapp.com/send?phone=5551998747124&text=Ol%C3%A1%2C%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es!')}>Contatar</button>
            </div>
        </div>
    );
}

export default MenuMobile;