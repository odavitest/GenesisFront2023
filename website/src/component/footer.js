import styled from "styled-components";

function Footer() {
    return (
        <>    
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
        </>
    );
}
export default Footer;
