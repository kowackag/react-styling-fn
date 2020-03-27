// ./src/components/Div.js
import React from 'react';

const Div = props => {
    const { style = {}, type } = props;
    const bgColor = type === 'dark' 
            ? '#c5aeb4' : '#fce2c2';

    const defaultStyle = {
        '--color-alfa': '#6cb2d1',
        backgroundColor: bgColor,
        border: '2px solid var(--color-alfa)',
        color: 'var(--color-alfa)',
        padding: '20px',
    }

    return (
        <div style={ {...defaultStyle, ...style} }>
            React: Styling
        </div>
    )
}

export default Div;