// ./src/components/Div.js
import React from 'react';
import styled, {css} from 'styled-components';

import StyledRow from './../components/styled/StyledRow'

// const DefaultStyledDiv = styled.div`
//         --color-alfa: ${props => props.theme.colorAlfa};     
//         border: 2px solid var(--color-alfa);
//         color: var(--color-alfa);
//         padding: 20px;
//         background-color: #fce2c2;
//         ${props => props.type === 'dark' &&  css`
//             background-color:  #c5aeb4;
//             color: #fce2c2;
//         `};
     
//         &:hover {
//             background-color: #fcc5c2;
//         }
//         h1 {font-size:20px}
//         p 
// `
// const StyledRow = styled(DefaultStyledDiv)(props=>props.style)


const Row = ({ style = {}, type }) => {
    // const bgColor = type === 'dark' 
    //         ? '#c5aeb4' : '#fce2c2';
    return (
        <StyledRow style ={style} type={type}>
            <h1>React: Styling</h1>
            <p>Lorem ipsum</p>
        </StyledRow>
    )
}

export default Row;