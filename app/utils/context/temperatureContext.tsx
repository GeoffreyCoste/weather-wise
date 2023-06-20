'use client'

import { useState, createContext, PropsWithChildren } from 'react';
import { FunctionComponentInterface } from '../interfaces';
import { Temperature, TemperatureContextType } from "../@types/temperature";

export const TemperatureContext = createContext<TemperatureContextType | null>(null);

export const TemperatureProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({ children }) => {
    const [temperature, setTemperature] = useState<Temperature>('celsius');
    const toggleTemperature = () => {
        setTemperature(temperature === 'celsius' ? 'fahrenheit' : 'celsius');
    }

    const state = temperature;
    const toggleState = toggleTemperature;

    return (
        <TemperatureContext.Provider value={{ state, toggleState }}>
            { children }
        </TemperatureContext.Provider>
    )
}