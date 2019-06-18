import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box; 
        font-size: 18px;
        font-family: 'Roboto Light', sans-serif;
        src: font-url("https://fonts.googleapis.com/css?family=Roboto:300&display=swap");
        background: #FBFFFD;
        color: #434644;
    }

    body {
        height: 100vh; 
        padding: 0; 
        margin: 0;
    }

    h1 {
        src: font-url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
        font-family: "Dancing Script", cursive;
        font-size: 28px;
    }

    h2 {
        font-family: "Dancing Script", cursive;
        font-size: 22px;
    }

    h3 {
        background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
        font-size: 20px;
        font-family: 'Roboto Light', sans-serif;
        color: #434644;
        padding: 5px;
        margin: 0;
    }

    h4 {
        font-size: 20px;
    }

    a {
        text-decoration: none;
    }

`;

export default GlobalStyle;
