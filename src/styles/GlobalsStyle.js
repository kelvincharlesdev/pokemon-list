import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        width: 100%;
        margin:  0 auto;
        background-color: ${({theme}) => theme.backgroundColor};
    }
    
    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    input, input:focus {
    border: none; 
    outline: none; 
    box-shadow: none; 
    background: none; 
    }

  
`