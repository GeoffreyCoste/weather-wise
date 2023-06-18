import { Language } from "../@types/language";
import { Temperature } from "../@types/temperature";
import { Theme } from "../@types/theme";

export interface ContextInterface {
    context?: string,
    state: Language | Temperature,
    toggleState: (state: any) => void,
    firstOption?: string,
    secondOption?: string,
}

export interface LanguageContextInterface {
    language: Language,
    toggleLanguage: (language: Language) => void;
}

export interface TemperatureContextInterface {
    temperature: Temperature,
    toggleTemperature: (temperature: Temperature) => void;
}

export interface ThemeContextInterface {
    theme: Theme,
    toggleTheme: (theme: Theme) => void;
}