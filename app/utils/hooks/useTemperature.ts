'use client'

import { useContext } from 'react';
import { TemperatureContext } from '../context';
import { TemperatureContextInterface } from '../interfaces';


export const useTemperature = () => {
    const { temperature, toggleTemperature } = useContext(TemperatureContext) as TemperatureContextInterface;
    return { temperature, toggleTemperature };
}