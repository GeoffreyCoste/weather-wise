'use client'

import { useState, createContext, PropsWithChildren } from "react";
import { FunctionComponentInterface, LanguageContextInterface } from "../interfaces";
import { Language } from "../@types/language";

export const LanguageContext = createContext<LanguageContextInterface | null>(null);

export const LanguageProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({children}) => {
    const [language, setLanguage] = useState<Language>('fr');
    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}