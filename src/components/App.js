// ./src/components/App.js
import React from 'react';
// import Box from './Box';
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';
import LoginPanel from './LoginPanel'

const App = () => (
    <>
        <ResetStyle/>
        <GlobalStyle/>
        <LoginPanel/>
        {/* <Box /> */}
    </>
);


export default App;