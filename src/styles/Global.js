import { createGlobalStyle } from 'styled-components';

const GrobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

    /* CSS reset? */
    *,
    *::after,
    *::before {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

`;

export default GrobalStyles;