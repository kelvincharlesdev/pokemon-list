import PropTypes from 'prop-types';

import { createContext, useState } from "react";

import { dark, light } from "../styles/Theme";
import { ThemeProvider } from "styled-components";


export const themes = {
    light,
    dark
}

export const ThemeContext = createContext({})

export const ThemeProviderContext = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    const toggle = () => {
        setTheme((prevTheme) => prevTheme === themes.light ? themes.dark : themes.light)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

ThemeProviderContext.propTypes = {
    children: PropTypes.node.isRequired,
};