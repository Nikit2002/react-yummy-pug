import './ItemsSection.css';
import imgOne from '../../assets/img/img-1.jpg';
import imgTwo from '../../assets/img/img-2.jpg';
import imgThree from '../../assets/img/img-3.jpg';

function ItemsSection() {
    return(
        <section>
            <div className="container items-container">
                <h3><span>мої улюбленні</span> солодощі</h3>
                <div className="content">
                    <div className="item">
                        <img src={imgThree} alt="img1"/>
                        <h4>Червоний мак</h4>
                        <p>Пралене з додаванням карамельної крихти, пасти ядер горіхів фундука та мигдалюпокрите шоколадною глазурʼю</p>
                    </div>

                    <div className="item">
                        <img src={imgTwo} alt="img2"/>
                        <h4>Сливки-ленивки</h4>
                        <p>Світлі вафельні листи, поєднані молочно-вершковою начинкою та покриті глазур’ю.</p>
                    </div>

                    <div className="item">
                        <img src={imgOne} alt="img3"/>
                        <h4>Ліщина</h4>
                        <p>Праліне з додаванням подрібненої та тертої ліщини та мигдалю, покрите шоколадною глазур’ю.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemsSection;