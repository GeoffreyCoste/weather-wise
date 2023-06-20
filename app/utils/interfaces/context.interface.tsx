import { Language } from "../@types/language";
import { Temperature } from "../@types/temperature";
import { Theme } from "../@types/theme";


export interface ContextInterface<StateType> {
    state: StateType;
    toggleState: (state: StateType) => void;
}
/* export interface ContextInterface {
    state: Language | Temperature,
    toggleState: (state: any) => void,
} */

export interface ToggleContextInterface extends ContextInterface<Language | Temperature | Theme> {
    context?: string,
    firstOption?: string,
    secondOption?: string,
}

/* export interface LanguageContextInterface {
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
} */