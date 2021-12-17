import styled, {css} from 'styled-components';

const DefaultStyledDiv = styled.div`
        --color-alfa: #6cb2d1;
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
        p 
`
const StyledRow = styled(DefaultStyledDiv)(props=>props.style)

export default StyledRow;