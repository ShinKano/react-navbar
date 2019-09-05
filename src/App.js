import React, { Component, useState } from 'react';
import Navbar from './components/navbar';
import GlobalStyle from './styles/Global';

const App = () => {

    const { navbarOpen, setNavbarOpen } = useState(false);

    handleNavbar = () => { // Toggle navber if it's opened or not.
        setNavbarOpen(!navbarOpen);
    }

    return (
        <div>
            <Navbar 
                navbarState={navbarOpen}
                handleNavbar={handleNavbar}
            />
            <GlobalStyle />
        </div>
    )
}

export default App;
