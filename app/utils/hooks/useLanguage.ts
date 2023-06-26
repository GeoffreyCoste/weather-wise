import { useContext } from "react";
import { LanguageContext } from "../context";
import { LanguageContextType } from "../@types/language";

export const useLanguage = () => {
    const { state, handleStateChange /* toggleState */ } = useContext(LanguageContext) as LanguageContextType;
    const language = state;
    const handleLanguageChange = handleStateChange;
    /* const toggleLanguage = toggleState; */
    return { language, handleLanguageChange /* toggleLanguage */ };
}