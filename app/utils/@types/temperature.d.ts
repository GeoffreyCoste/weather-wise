import { ContextInterface } from "../interfaces";

export type Temperature = 'celsius' | 'fahrenheit';

export type TemperatureContextType = ContextInterface<Temperature>