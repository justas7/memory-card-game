import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
