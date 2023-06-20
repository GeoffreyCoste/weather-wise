'use client'

import { useContext } from 'react';
import { TemperatureContext } from '../context';
import { TemperatureContextType } from '../@types/temperature';

export const useTemperature = () => {
    const { state, toggleState } = useContext(TemperatureContext) as TemperatureContextType;
    const temperature = state;
    const toggleTemperature = toggleState;
    return { temperature, toggleTemperature };
}