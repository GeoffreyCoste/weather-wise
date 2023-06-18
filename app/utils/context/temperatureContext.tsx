'use client'

import { useState, createContext, PropsWithChildren } from 'react';
import { FunctionComponentInterface, TemperatureContextInterface } from '../interfaces';
import { Temperature } from "../@types/temperature";

export const TemperatureContext = createContext<TemperatureContextInterface | null>(null);

export const TemperatureProvider: React.FC<PropsWithChildren<FunctionComponentInterface>> = ({ children }) => {
    const [temperature, setTemperature] = useState<Temperature>('celsius');
    const toggleTemperature = () => {
        setTemperature(temperature === 'celsius' ? 'fahrenheit' : 'celsius');
    }

    return (
        <TemperatureContext.Provider value={{ temperature, toggleTemperature }}>
            { children }
        </TemperatureContext.Provider>
    )
}