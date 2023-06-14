'use client';

import { useState } from "react";
import _cities from '../../lib/city.list.json';
import Link from "next/link";

export interface SearchbarInterface {
    placeholder?: string;
}

export interface CityInterface {
    id: number;
    name: string;
    state: string;
    country: string;
    coord: { lon: number, lat: number};
    slug?: string
}

const cities = _cities as CityInterface[];

export default function Searchbar({ placeholder }: SearchbarInterface) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<CityInterface[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setQuery(value);

        let matchingCities: CityInterface[] = [];

        if (value.length > 3) {
            for (let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }

                const match = city.name.toLowerCase().startsWith(value.toLowerCase());

                if (match) {
                    const cityData: CityInterface = {
                        ...city,
                        slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
                    };

                    matchingCities.push(cityData);
                    continue;
                }
            }
        }

        return setResults(matchingCities);
    }

    return (
        <div id="searchbar" className="w-full md:w-6/12 mt-10 md:mt-0 mx-auto">
            <form id="search" className="relative w-full" role="search">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-50 dark:text-gray-400" fill="#9ca3af" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <label htmlFor="search-input" className="hidden">Search location</label>
                <input 
                    type="search"
                    name="search"
                    spellCheck="false"
                    autoComplete="off"
                    id="search-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow" 
                    placeholder={placeholder ? placeholder : ''} 
                    value={query}
                    onChange={onChange}
                    required 
                />
                {query && (
                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer" onClick={() => setQuery('')}>
                        <svg className="w-6 h-6 text-gray-50 dark:text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                )}
                {query.length > 3 && (
                    <ul className="absolute top-14 w-full bg-gray-50 px-5 py-3 rounded-lg shadow">
                        {results.length > 0 ? (
                            results.map((city: CityInterface, index: number) => {
                                return (
                                    <li key={`${index}-${city.slug}-491663bc-4024-434d-aae2-464b5c1695d1`} className="w-full flex py-2" onClick={() => setQuery('')}>
                                        <Link href={`/city/${city.slug}`} className="w-full hover:text-blue-700 hover:font-bold">
                                                {city.name}
                                                {city.state ? `, ${city.state}` : ''}{' '}
                                                <span>({city.country})</span>
                                        </Link>
                                    </li>
                                )
                            })
                        ) : (
                            <li className="search__no-results">No results found</li>
                        )}
                    </ul>
                )}
            </form>
        </div>
    )
}