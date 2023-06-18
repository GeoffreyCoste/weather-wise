'use client'

import { useContext } from 'react';
import { ThemeContext } from '../context';
import { ThemeContextInterface } from '../interfaces';


export const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextInterface;
    return { theme, toggleTheme };
}