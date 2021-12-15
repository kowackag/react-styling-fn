// ./src/components/Box.js
import React from 'react';
import Row from './Row';

const Box = () => {
    const divStyle = {
        padding: '100px'
    }

    return (
        <>
            <Row type="dark" />
            <Row style={ divStyle }/>
        </>
    );
}

export default Box;