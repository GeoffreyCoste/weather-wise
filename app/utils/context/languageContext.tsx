'use client'

import { useState, useEffect, createContext, PropsWithChildren } from "react";
import { FunctionComponentInterface } from "../interfaces";
import { LanguageContextType } from "../@types/language";
import { Language } from "../@types/language";
import { Locale } from "@/i18n-config";
import { usePathname } from "next/navigation";

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({children}) => {
    const [language, setLanguage] = useState<Language>('fr');
    /* const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    } */

    const pathname = usePathname();

    useEffect(() => {
        const segments = pathname.split('/');
        const locale: | Language = segments[1];
        if (!language) {
            setLanguage(locale);
        }
    });

    const handleLanguageChange = (lang: Locale) => {
        setLanguage(lang);
    }
    const state = language;
    const handleStateChange = handleLanguageChange;
    /* const toggleState = toggleLanguage; */

    return (
        <LanguageContext.Provider value={{ state, handleStateChange /* toggleState */ }}>
            {children}
        </LanguageContext.Provider>
    )
}