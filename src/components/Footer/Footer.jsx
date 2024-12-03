import './Footer.css';
import logoYummy from '../../assets/img/Logo Yummy.svg';

function Footer() {
    return(
        <footer>
            <div className="container footer-container">
                <a href="#" className="logo"><img src={logoYummy} alt="logo"/></a>
                <h2>Приєднуйся і живи зі мною у світі солодощів!</h2>
            </div>
        </footer>
    );
}

export default Footer;