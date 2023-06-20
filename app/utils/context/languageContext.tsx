'use client'

import { useState, createContext, PropsWithChildren } from "react";
import { FunctionComponentInterface } from "../interfaces";
import { LanguageContextType } from "../@types/language";
import { Language } from "../@types/language";

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({children}) => {
    const [language, setLanguage] = useState<Language>('fr');
    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }
    const state = language;
    const toggleState = toggleLanguage;

    return (
        <LanguageContext.Provider value={{ state, toggleState }}>
            {children}
        </LanguageContext.Provider>
    )
}