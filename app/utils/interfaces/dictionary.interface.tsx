/* import { JSONValue } from "../@types/json";

export interface JSONObject {
    [key: string]: string | JSONValue;
} */

export interface dictionaryInterface {
    home: {
        title: string
    },
    city: {
        today: {
            title: {
                h3: string,
                span: string
            }
            content: {
                sunrise: string,
                sunset: string
            }
        },
        hourly: {
            title: {
                h3: string,
                span: string
            }
            content: {
                now: string,
            }
        },
        weekly: {
            title: {
                h3: string,
                span: string
            }
            content: {
                today: string,
                tomorrow: string
            }
        }
        codes: {
            [key: number]: string
        }
    }
}