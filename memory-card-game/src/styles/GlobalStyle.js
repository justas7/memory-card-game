import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Open-Sans, Helvetica, Sans-Serif;       
        background-image: linear-gradient(to right, #F1E7D9 0%, #F1E7D9 33%, #F4CAA4 33%, #F4CAA4 66%, #E9B089 66%);            
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
