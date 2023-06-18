import { useContext } from "react";
import { LanguageContext } from "../context";
import { LanguageContextInterface } from "../interfaces";

export const useLanguage = () => {
    const { language, toggleLanguage } = useContext(LanguageContext) as LanguageContextInterface;
    return { language, toggleLanguage };
}