import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles