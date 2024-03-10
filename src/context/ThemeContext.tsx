import React from 'react'

interface ThemeContextProps {
    theme: string,
    toggleTheme:()=>void
}

export const ThemeContext = React.createContext<ThemeContextProps | null>(null);
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;