import styled from "styled-components";
import { themes } from "../../contexts/ThemeContext";


export const ToggleThemeButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme === themes.light ? 'yellow' : 'blue' };
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);

    svg {
    color: ${({theme}) => theme === themes.light ? 'blue' : 'yellow'};
    width: 20px;
    height: 20px;
   }
`




