import './styles.css'; 
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

    
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/rafael-vieira-dos-santos-7a1842201/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/raaffa_vieira/?hl=pt-br" target="_new">
                    <InstagramIcon />
                </a>
             </div>
        </footer>
    )
}

export default Footer;