import styled from "styled-components";

function Menu({ config }) {
    return (
        <nav className="main-menu__menu">
            <input type="checkbox" name="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn"></label>
            <ul>
                <li><a href="#">Про нас</a></li>
                <li><a href="#">Наші курси</a></li>
                <li><a href="#">Пошук</a></li>
                <li><a href="#">Вхід</a></li>
            </ul>
        </nav>
    );
}
export default Menu;