import styled, { css, keyframes } from 'styled-components';

function Preloader({ active }) {
    return (
        <BlockTag active = { active }>
            <Content></Content>           
        </BlockTag>
    );
}
export default Preloader;

const BlockTag = styled.div`
    ${({ active }) => {
        if (!active) {
            return css`
                display: none;
            `;
        }

        return css`
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(187, 225, 250, 0.71);
            position: fixed;
            z-index: 99999;
        `;
    }};
`;
const bounce = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-50px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`;
const Content = styled.div`
    width: 200px;
    height: 200px;
    background-image: url('images/emblem.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin: calc(50vh - 100px) auto;
    animation-name: ${bounce};
    animation-timing-function: ease;
    animation-duration: 2.2s;
    animation-iteration-count: infinite;
`;