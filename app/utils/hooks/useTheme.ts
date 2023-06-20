'use client'

import { useContext } from 'react';
import { ThemeContext } from '../context';
import { ThemeContextType } from '../@types/theme';

export const useTheme = () => {
    const { state, toggleState } = useContext(ThemeContext) as ThemeContextType;
    const theme = state;
    const toggleTheme = toggleState;
    return { theme, toggleTheme };
}