import React from 'react';
import './App.css';
import Preloader from './preloader';
import Header from './header'
import emblemImage from './images/emblem.png';

function App() {
    
    const [ active, setActive ] = React.useState(true);
    
    document.querySelector('body').classList.add('genesis');

    return (
        <div className="App">
        
            <Preloader active = { active } />
            
            <Header />
                        
        <section className="container course-adv">
            <div id="adv" className="course-adv__left">
                <h4 className="course-adv__left-date text-gradient orange">
                    Старт 30 січня
                </h4>
                <h2 className="title-h2">Безкоштовний курс</h2>
                <div className="course-adv__right">
                    <div className="course-rating">
                        <div id="rating" className="stars text-16px">4,5</div>
                    </div>
                    <img id="course-image" className="profile-photo" src={ emblemImage } alt="profile photo" width="634" height="647" />
                </div>
                <h1 className="course-adv__left-title title-h1 text-gradient blue">Lack of Motivation & How to Overcome It</h1>
                <p className="text-22px text-italic">Reignite your inner drive by managing factors that dampen your motivation.</p>
                <ul className="course-adv__left-features">
                    <li className="features">27 днів навчання, практики</li>
                    <li className="features">2 уроки</li>
                </ul>
                <button className="btn filled-gradient orange text-20px">Переглянути</button>
            </div>
            
        </section>
        
        <section className="slogan filled-gradient blue">
            <div className="container slogan__wrapper">
                <img className="pet-photo-left" src="images/header-dog.svg" alt="profile photo" width="167" height="167" />    
                <h2 className="container title-h2">Це вивчить, навіть, дитина</h2>
                <img className="pet-photo-right" src="images/header-cat.svg" alt="profile photo" width="167" height="167" />
            </div>
        </section>
        
        <section className="list-courses">
            <div className="container list-courses__head-block">
                <h2 className="title-h2">Обери свій курс</h2>
                <div className="list-courses__head-controls">
                    <div className="icon-block">
                        <div className="icon-wrapper filled-gradient blue">
                            <img src="images/earth.svg" alt="All" />
                        </div>
                        <p>Усі</p>
                    </div>
                    <div className="icon-block">
                        <div className="icon-wrapper filled-gradient blue">
                            <img src="images/dolar.svg" alt="Paid" /> 
                        </div>
                        <p>Платні</p>
                    </div>
                    <div className="icon-block">
                        <div className="icon-wrapper filled-gradient blue">
                            <img src="images/remote.svg" alt="Free" />
                        </div>
                        <p>Безплатні</p>
                    </div>
                </div>
            </div>
            <div id="list-courses" className="container list-courses__cards-block">       
                
                
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-gradient blue text-16px">USD 15</div>
                                <div className="stars text-16px">4,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">СТАРТ 30 БЕРЕЗНЯ</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Lack of Motivation & How to Overcome It</h4>
                            <p className="course-abstract card-wrapper text-16px">Reignite your inner drive by managing factors that dampen your motivation.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">7 уроків</div>
                                <div className="days text-16px">500 годин</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient orange">Реєстрація</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div className="list-courses__card">
                        <div>
                            <div className="upper-status card-wrapper">
                                <div className="price text-orange text-16px">Безкоштовно</div>
                                <div className="stars text-16px">3,5</div>
                            </div>
                            <div className="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div className="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 className="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p className="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div className="course-meta card-wrapper">
                                <div className="lessons text-16px">2 уроки</div>
                                <div className="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button className="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                

            </div>
            <div className="container list-courses__pagination">
                <button className="pagination-left"></button>
                <div className="pagination-page filled-gradient gray text-16px">Сторінка 1/4</div>
                <button className="pagination-right on"></button>
            </div>
        </section>
        
        <footer className="footer-genesis filled-gradient blue">
            <div className="footer-genesis__content container">
                
                <div className="footer-genesis__left">
                    <img src="images/icons/main-logo-white.png" alt="BA_Logo" />
                    <h4 className="text-20px">Навчальний центр для всіх</h4>
                    <p className="footer-genesis__copyright text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                </div>
                
                <div className="footer-genesis__center">
                    <h4 className="text-20px">Контакти</h4>
                    <ul className="footer-genesis__contacts">
                        <li>
                            <a href="tel:+0800337146" target="_blank"> 
                                <img src="images/icons/phone-icon.svg" alt="phone" />
                                <p className="text-16px">0 800 555 555 (безкоштовно)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/earth-icon.svg" alt="earth" />
                                <p className="text-16px">babys.com.ua</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/telegram-icon.svg" alt="telegram" />
                                <p className="text-16px">babys_support</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/mail-icon.svg" alt="mail" />
                                <p className="text-16px">edu@babys.com.ua</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/skype-icon.svg" alt="skype" />
                                <p className="text-16px">support_babys</p>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="footer-genesis__right">
                    <h4 className="text-20px">Соц. мережі</h4>
                    <div className="footer-genesis__social">
                        <a href="#" target="_blank">
                            <img src="images/icons/instagram.svg" alt="instagram" />
                        </a> 
                        <a href="#" target="_blank">
                            <img src="images/icons/facebook.svg" alt="facebook" />
                        </a> 
                        <a href="#" target="_blank">
                            <img src="images/icons/youtube.svg" alt="youtube" />
                        </a> 
                        <a href="#" target="_blank">
                            <img src="images/icons/linkedin.svg" alt="linkedin" />
                        </a> 
                        <a href="#"  target="_blank">
                            <img src="images/icons/telegram.svg" alt="telegram" />
                        </a>
                    </div>
                    <div className="footer-genesis__scroll-top"><img src="images/icons/arrow.svg" alt="top" /></div>
                    <p className="footer-genesis__copyright-mobile text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                </div>
            </div>
        </footer>
        
    </div>
  );
}

export default App;
