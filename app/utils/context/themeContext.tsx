'use client'

import React, { useState, createContext, PropsWithChildren } from 'react';
import { FunctionComponentInterface } from '../interfaces';
import { ThemeContextType } from '../@types/theme';
import { Theme } from '../@types/theme';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const state = theme;
  const toggleState = toggleTheme;

  return (
    <ThemeContext.Provider value={{ state, toggleState }}>
      { children }
    </ThemeContext.Provider>
  );
};