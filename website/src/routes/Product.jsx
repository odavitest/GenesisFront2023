import React from 'react';
import Preloader from '../component/preloader';
import Header from '../component/header';

function Product() {

    const [ active, setActive ] = React.useState(true);
    
    document.querySelector('body').classList.add('genesis');

    return (
        <>

            <Preloader active = { active } />
            {/* Header section with logo and main menu */}
            <Header />
            {/* Course information section showing all lessons */}
            <section className="container course-info">
                <div id="adv" className="course-adv__left">
                    {/* <h4 className="course-adv__left-date text-gradient orange">
                        Старт 30 січня
                    </h4> */}
                    <h2 className="title-h2">Вітаємо на курсі</h2>
                    <div className="course-adv__right">
                        <div className="course-rating">
                            <div id="rating" className="stars text-16px">4,5</div>
                        </div>
                        <img id="course-image" className="profile-photo" src="./images/emblem.png" alt="profile photo" width="634" height="647" />
                    </div>
                    <h1 id="course-title" className="course-adv__left-title title-h1 text-gradient blue">Lack of Motivation & How to Overcome It</h1>
                    <p id="course-descr" className="text-22px text-italic">Reignite your inner drive by managing factors that dampen your motivation.</p>
                </div>
                <div id="launch-date" className="course-avail text-orange text-16px">Доступно з 21.03.2023 16:30</div>
                <div className="block-with-list">
                    <dvi className="you-expect text-20px">Вас чекають:</dvi>
                    <ul className="course-adv__left-features">
                        <li id="duration" className="features">27 днів навчання, практики</li>
                        <li id="lessons" className="features">2 уроки</li>
                    </ul>
                </div>
                <div className="block-with-list">
                    <dvi className="you-get text-20px">Ви здобудете:</dvi>
                    <ul id="skills" className="course-adv__left-features">
                        <li className="features">Aligning your goals with your motives</li>
                        <li className="features">Overcoming decision paralysis</li>
                        <li className="features">Reframing negative self-talk</li>
                        <li className="features">Gaining clarity</li>
                        <li className="features">Challenging yourself</li>
                    </ul>
                </div>
            </section>
            
            {/* Section with the list of courses */}
            <section className="list-courses">
                    <h2 className="title-h2 container">Програма курсу</h2>
                    <div className="active-lesson container">
                        
                        <div className="active-lesson-card">
                            <div id="active-course-photo" className="course-photo">
                                <img id="active-lesson-photo" src="/images/tom2.jpg" alt="preview" />
                                {/* <video loop="true" disablepictureinpicture="false" controlslist="nodownload" src="http://porkahd.co/get_file/3/f81a4dd6b5bd20bde6195adf835ec6fe9a71e83677/1000/1895/1895_preview.mp4/" -webkit-playsinline="true" playsinline="true"></video> 
                                */}
                                {/* <video id="video" controls="" autoplay="" className="videoCentered" style="width: 80%" src="moz-extension://e0d6127e-e5bd-4b28-aff4-55fc03450a05/index.html#https://wisey.app/videos/money-management-for-financial-freedom/preview/AppleHLS1/preview.m3u8"></video> */}
                    
                                <video id="player" width="1920" height="1080" poster="/images/tom2.jpg" className="video-js vjs-default-skin" controls preload="auto">
                                    <source src="https://wisey.app/videos/money-management-for-financial-freedom/preview/AppleHLS1/preview.m3u8" type="application/x-mpegURL" />
                                </video>
                            </div>
                            
                            <div className="video-caption">
                                <div className="lesson__circle-block">
                                    <div className="lesson__day">
                                        <p className="text-14px text-gradient orange">Урок</p>
                                        <p id="active-lesson-number" className="lesson__number text-gradient orange">1</p>
                                    </div>
                                </div>
                            
                                <div id="active-lesson-descr" className="lesson__info text-16px">Знайомство з онлайн-сервісом Figma і проба пера мовами HTML &amp; CSS. Учасники марафону оз найомляться із прикладами синтаксису HTML &amp; CSS для загального розуміння того, як код пишеться і працює.</div>
                            </div>
                            <div className="additional-resources">
                                <h4>Додаткові матеріали:</h4>
                                <ul>
                                    <li>Знайомство з онлайн-сервісом Figma і проба пера мовами HTML & CSS.</li> 
                                    <li>Учасники марафону ознайомляться із прикладами синтаксису HTML & CSS для загального розуміння того, як код пишеться і працює.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div id="lessons-container" className="all-lessons container">
                        <div className="lesson-card active">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">1</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус виконання: 10%</div>
                            <div className="lesson__info text-16px">Знайомство з онлайн-сервісом Figma і проба пера мовами HTML &amp; CSS. Учасники марафону ознайомляться із прикладами синтаксису HTML &amp; CSS для загального розуміння того, як код пишеться і працює.</div>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">2</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус виконання: 0%</div>
                            <div className="lesson__info text-16px">Створення верхньої частини головної сторінки сайту. Розбираються ключові моменти, що прописуються для подальших сторінок.</div>
                        </div>
                        <div className="lesson-card">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">3</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус виконання: 0%</div>
                            <div className="lesson__info text-16px">Розгляд адаптивного верстання з використанням технології Flexbox, яка дозволяє сайту однаково гарно виглядати на екранах різних розмірів. Стилізація сайту відповідно до макету для мобільних пристроїв.</div>
                        </div>
                        <div className="lesson-card blocked">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">4</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус: Заблоковано</div>
                            <div className="lesson__info text-16px">Закріплення знань з технології Flexbox з паралельним ускладненням вкладеності і побудови елементів для створення необхідних блоків сторінки.</div>
                        </div>
                        <div className="lesson-card blocked">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">5</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус: Заблоковано</div>
                            <div className="lesson__info text-16px">Розгляд різних варіацій при створенні сторінки: побудова на власний розсуд, де та як можуть знаходитися елементи головного контенту з можливістю правильно вказувати шлях до зображень тощо.</div>
                        </div>
                        <div className="lesson-card blocked">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">6</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус: Заблоковано</div>
                            <div className="lesson__info text-16px">Реалізація нижньої частини сайту, де вказані соцмережі та присутній функціонал переходу до інших сторінок. Також розглядається правильне задання маршруту для переходу.</div>
                        </div>
                        <div className="lesson-card blocked">
                            <div className="lesson__circle-block">
                                <div className="lesson__day">
                                    <p className="text-14px text-gradient orange">Урок</p>
                                    <p className="lesson__number text-gradient orange">7</p>
                                </div>
                            </div>
                            <div className="lesson__status text-16px">Статус: Заблоковано</div>
                            <div className="lesson__info text-16px">Фінальний день марафону присвячений створенню секції постів, що закріплює розуміння пріоритетності селекторів для елементів – коли імена вже використовувались для інших елементів сайту. Завершення роботи над сайтом-портфоліо.</div>
                        </div>
                        <div className="lesson-card lesson-card-last filled-gradient blue">
                            <div className="lesson__info text-22px">Твій результат за 7 днів – готовий проект</div>
                        </div>
                        
                    </div>
            </section>
            {/* Footer of the page */}
            <footer className="footer-genesis filled-gradient blue">
                <div className="footer-genesis__content container">
                    
                    <div className="footer-genesis__left">
                        <img src="/images/icons/main-logo-white.png" alt="BA_Logo" />
                        <h4 className="text-20px">Навчальний центр для всіх</h4>
                        <p className="footer-genesis__copyright text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                    </div>
                    
                    <div className="footer-genesis__center">
                        <h4 className="text-20px">Контакти</h4>
                        <ul className="footer-genesis__contacts">
                            <li>
                                <a href="tel:+0800337146" target="_blank"> 
                                    <img src="/images/icons/phone-icon.svg" alt="phone" />
                                    <p className="text-16px">0 800 555 555 (безкоштовно)</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank"> 
                                    <img
                                        src="/images/icons/earth-icon.svg" alt="earth" />
                                    <p className="text-16px">babys.com.ua</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank"> 
                                    <img
                                        src="/images/icons/telegram-icon.svg" alt="telegram" />
                                    <p className="text-16px">babys_support</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank"> 
                                    <img
                                        src="/images/icons/mail-icon.svg" alt="mail" />
                                    <p className="text-16px">edu@babys.com.ua</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank"> 
                                    <img
                                        src="/images/icons/skype-icon.svg" alt="skype" />
                                    <p className="text-16px">support_babys</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-genesis__right">
                        <h4 className="text-20px">Соц. мережі</h4>
                        <div className="footer-genesis__social">
                            <a href="#" target="_blank">
                                <img src="/images/icons/instagram.svg" alt="instagram" />
                            </a> 
                            <a href="#" target="_blank">
                                <img src="/images/icons/facebook.svg" alt="facebook" />
                            </a> 
                            <a href="#" target="_blank">
                                <img src="/images/icons/youtube.svg" alt="youtube" />
                            </a> 
                            <a href="#" target="_blank">
                                <img src="/images/icons/linkedin.svg" alt="linkedin" />
                            </a> 
                            <a href="#"  target="_blank">
                                <img src="/images/icons/telegram.svg" alt="telegram" />
                            </a>
                        </div>
                        <div className="footer-genesis__scroll-top"><img src="/images/icons/arrow.svg" alt="top" /></div>
                        <p className="footer-genesis__copyright-mobile text-12px">© 2023 БЕЙБІЗ АКАДЕМІ (Baby’s Academy). Всі права захищені.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Product;