export const celsiusToFahrenheit = (celsius: number): number => {
    const fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
};

export const fahrenheitToCelsius = (fahrenheit: number): number => {
    const celsius = fahrenheit * (5/9) - 32;
    return celsius;
}