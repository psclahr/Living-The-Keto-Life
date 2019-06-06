import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box; 
        font-size: 18px;
        @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
        font-family: 'Roboto', sans-serif;
        
    }
    
    body {
        height: 100vh;
        margin: 0; 
        padding: 0;
    }


    h3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-;
        color: #3D9970;
        font-size: 17px; 
    }

`;

export default GlobalStyle;
