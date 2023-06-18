'use client'

import React, { useState, createContext, PropsWithChildren } from 'react';
import { FunctionComponentInterface, ThemeContextInterface } from '../interfaces';
import { Theme } from '../@types/theme';

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
};