import styled from "styled-components";
import Menu from './menu'

const menuConfig = [
    {
        name: "Про нас",
        link: "#"
    },
    {
        name: "Наші курси",
        link: "#"
    },
    {
        name: "Пошук",
        link: "#"
    },
    {
        name: "Вхід",
        link: "#"
    },
];

function Header() {
    return (
        <HeaderTag className="container">
            <div className="main-menu__logo">
                <img className="main-menu__logo-img" src="images/icons/main-logo.png" alt="BA-logo" />
            </div>
            
            <Menu config = { menuConfig } />
        </HeaderTag>
    );
}
export default Header;

const HeaderTag = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    margin-bottom: 64px;

    .main-menu__logo-img {
        width: 241px;
    }
    @media screen and (max-width: 540px) {
        .main-menu__logo-img {
            width: 160px;
        }    
    }
`;