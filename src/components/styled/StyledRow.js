import styled, {css, keyframes} from 'styled-components';

const loadAnimation = keyframes`
    0% {opacity:0; transform: translateX(-100vw)}
    25% {opacity:.25; transform: translateX(-50vw)}
    75% {opacity:.25; transform: translateX(-100vw)}
    75% {opacity:1; transform: translateX(0}`;

const DefaultStyledDiv = styled.div`
        animation:${loadAnimation} 3s;
        --color-alfa: ${props => props.theme.colorAlfa};
        border: 2px solid var(--color-alfa);
        color: var(--color-alfa);
        padding: 20px;
        background-color: #fce2c2;
        ${props => props.type === 'dark' &&  css`
            background-color:  #c5aeb4;
            color: #fce2c2;
        `};
     
        &:hover {
            background-color: #fcc5c2;
        }
        h1 {font-size:20px}

        @media ${props => props.theme.media.tablet} {
            margin:0 40px;
        }
`
const StyledRow = styled(DefaultStyledDiv)(props=>props.style)

export default StyledRow;