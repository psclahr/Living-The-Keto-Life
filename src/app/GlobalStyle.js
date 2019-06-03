import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box; 
        font-size: 16px; 
    }
    
    body {
        height: 100vh;
        margin: 0; 
        padding: 0;
        font-size: 16px; 
    }

    input{
        font-size: 16px;

        &::placeholder {
            font-size: 16px;
        }

    }

    textarea {
        font-size: 16px; 

        &::placeholder {
            font-size: 16px; 
        }
    }

    li {
        font-size: 18px;
    }

`;

export default GlobalStyle;
