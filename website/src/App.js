import React from 'react';
import './App.css';
import Preloader from './preloader';
import emblemImage from './images/emblem.png';


function App() {
    
    const [ active, setActive ] = React.useState(true);
    
    document.querySelector('body').classList.add('genesis');

    return (
        <div className="App">
        
            <Preloader active = { active } />
            
            <header class="container main-menu">
                <div class="main-menu__logo">
                    <img class="main-menu__logo-img" src="images/icons/main-logo.png" alt="BA-logo" />
                </div>
                <nav class="main-menu__menu">
                    
                    <input type="checkbox" name="menu-btn" id="menu-btn" />
                    <label for="menu-btn"></label>
                    <ul>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Наші курси</a></li>
                        <li><a href="#">Пошук</a></li>
                        <li><a href="#">Вхід</a></li>
                    </ul>
                </nav>
            </header>
            
        <section class="container course-adv">
            <div id="adv" class="course-adv__left">
                <h4 class="course-adv__left-date text-gradient orange">
                    Старт 30 січня
                </h4>
                <h2 class="title-h2">Безкоштовний курс</h2>
                <div class="course-adv__right">
                    <div class="course-rating">
                        <div id="rating" class="stars text-16px">4,5</div>
                    </div>
                    <img id="course-image" class="profile-photo" src={ emblemImage } alt="profile photo" width="634" height="647" />
                </div>
                <h1 class="course-adv__left-title title-h1 text-gradient blue">Lack of Motivation & How to Overcome It</h1>
                <p class="text-22px text-italic">Reignite your inner drive by managing factors that dampen your motivation.</p>
                <ul class="course-adv__left-features">
                    <li class="features">27 днів навчання, практики</li>
                    <li class="features">2 уроки</li>
                </ul>
                <button class="btn filled-gradient orange text-20px">Переглянути</button>
            </div>
            
        </section>
        
        <section class="slogan filled-gradient blue">
            <div class="container slogan__wrapper">
                <img class="pet-photo-left" src="images/header-dog.svg" alt="profile photo" width="167" height="167" />    
                <h2 class="container title-h2">Це вивчить, навіть, дитина</h2>
                <img class="pet-photo-right" src="images/header-cat.svg" alt="profile photo" width="167" height="167" />
            </div>
        </section>
        
        <section class="list-courses">
            <div class="container list-courses__head-block">
                <h2 class="title-h2">Обери свій курс</h2>
                <div class="list-courses__head-controls">
                    <div class="icon-block">
                        <div class="icon-wrapper filled-gradient blue">
                            <img src="images/earth.svg" alt="All" />
                        </div>
                        <p>Усі</p>
                    </div>
                    <div class="icon-block">
                        <div class="icon-wrapper filled-gradient blue">
                            <img src="images/dolar.svg" alt="Paid" /> 
                        </div>
                        <p>Платні</p>
                    </div>
                    <div class="icon-block">
                        <div class="icon-wrapper filled-gradient blue">
                            <img src="images/remote.svg" alt="Free" />
                        </div>
                        <p>Безплатні</p>
                    </div>
                </div>
            </div>
            <div id="list-courses" class="container list-courses__cards-block">       
                
                
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-gradient blue text-16px">USD 15</div>
                                <div class="stars text-16px">4,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">СТАРТ 30 БЕРЕЗНЯ</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Lack of Motivation & How to Overcome It</h4>
                            <p class="course-abstract card-wrapper text-16px">Reignite your inner drive by managing factors that dampen your motivation.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">7 уроків</div>
                                <div class="days text-16px">500 годин</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient orange">Реєстрація</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                    <div class="list-courses__card">
                        <div>
                            <div class="upper-status card-wrapper">
                                <div class="price text-orange text-16px">Безкоштовно</div>
                                <div class="stars text-16px">3,5</div>
                            </div>
                            <div class="course-photo">
                                <img src="images/tom.jpg" alt="preview" />
                            </div>
                            <div class="course-avail card-wrapper text-orange text-12px">Доступно з 21.03.2023 16:30</div>
                            <h4 class="course__title card-wrapper text-20px text-gradient blue">Високий попит на спеціалістів</h4>
                            <p class="course-abstract card-wrapper text-16px">Кожна сфера нашого життя сьогодні тісно пов’язана з ІТ, саме тому ІТ-фахівці дуже цінуються, а роботодавці забезпечують їх якомога кращими умовами праці.</p>
                            <div class="course-meta card-wrapper">
                                <div class="lessons text-16px">2 уроки</div>
                                <div class="days text-16px">27 днів</div>
                            </div>
                        </div>
                        <button class="btn text-16px filled-gradient gray">Переглянути</button>
                    </div>
                

            </div>
            <div class="container list-courses__pagination">
                <button class="pagination-left"></button>
                <div class="pagination-page filled-gradient gray text-16px">Сторінка 1/4</div>
                <button class="pagination-right on"></button>
            </div>
        </section>
        
        <footer class="footer-genesis filled-gradient blue">
            <div class="footer-genesis__content container">
                
                <div class="footer-genesis__left">
                    <img src="images/icons/main-logo-white.png" alt="BA_Logo" />
                    <h4 class="text-20px">Навчальний центр для всіх</h4>
                    <p class="footer-genesis__copyright text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                </div>
                
                <div class="footer-genesis__center">
                    <h4 class="text-20px">Контакти</h4>
                    <ul class="footer-genesis__contacts">
                        <li>
                            <a href="tel:+0800337146" target="_blank"> 
                                <img src="images/icons/phone-icon.svg" alt="phone" />
                                <p class="text-16px">0 800 555 555 (безкоштовно)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/earth-icon.svg" alt="earth" />
                                <p class="text-16px">babys.com.ua</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/telegram-icon.svg" alt="telegram" />
                                <p class="text-16px">babys_support</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/mail-icon.svg" alt="mail" />
                                <p class="text-16px">edu@babys.com.ua</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank"> 
                                <img
                                    src="images/icons/skype-icon.svg" alt="skype" />
                                <p class="text-16px">support_babys</p>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div class="footer-genesis__right">
                    <h4 class="text-20px">Соц. мережі</h4>
                    <div class="footer-genesis__social">
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
                    <div class="footer-genesis__scroll-top"><img src="images/icons/arrow.svg" alt="top" /></div>
                    <p class="footer-genesis__copyright-mobile text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                </div>
            </div>
        </footer>
        
    </div>
  );
}

export default App;
