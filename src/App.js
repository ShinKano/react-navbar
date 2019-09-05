import React, { Component, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';

const App = () => {

    const { navbarOpen, setNavbarOpen } = useState(false);

    const handleNavbar = () => { // Toggle navber if it's opened or not.
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
