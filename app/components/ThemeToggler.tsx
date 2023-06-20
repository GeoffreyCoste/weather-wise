'use client'

import { useTheme } from '../utils/hooks/useTheme';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme(); // useTheme returns theme value as 'state' and theme state toggle function as 'toggleState'

    return (
        <label role="button" htmlFor="theme-toggle" className={`w-16 h-8 inline-block relative border-2 ${theme === 'light' ? 'border-blue-300' : 'border-blue-300'} rounded-full cursor-pointer`} onChange={() => toggleTheme(theme)}>
        	<input type="checkbox" id="theme-toggle" className="hidden absolute top-1/2 translate-y-[-50%]" />
        	<span id="ball" className={`w-6 h-6 inline-block absolute top-1/2 left-[4px] z-10 translate-y-[-50%] ${theme === 'light' ? 'bg-blue-700' : 'bg-white/75'} rounded-full transition-transform`}></span>
        	<i id="sun" className={`absolute top-1/2 left-[5px] translate-y-[-50%] ${theme === 'light' ? 'hidden' : ''}`}>
                <svg className="w-5 h-5" fill="#93c5fd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Sun_SVGRepo_bgCarrier" strokeWidth="0"></g><g id="Sun_SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="Sun_SVGRepo_iconCarrier"><path d="M12,18a6,6,0,1,0-6-6A6.006,6.006,0,0,0,12,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8ZM11,3V2a1,1,0,0,1,2,0V3a1,1,0,0,1-2,0Zm1,17a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V21A1,1,0,0,1,12,20ZM17.657,6.343a1,1,0,0,1,0-1.414l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414,0ZM6.343,17.657a1,1,0,0,1,0,1.414l-.707.707a1,1,0,0,1-1.414-1.414l.707-.707A1,1,0,0,1,6.343,17.657ZM23,12a1,1,0,0,1-1,1H21a1,1,0,0,1,0-2h1A1,1,0,0,1,23,12ZM1,12a1,1,0,0,1,1-1H3a1,1,0,0,1,0,2H2A1,1,0,0,1,1,12Zm18.071,5.657.707.707a1,1,0,1,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414ZM4.222,5.636A1,1,0,0,1,5.636,4.222l.707.707A1,1,0,1,1,4.929,6.343Z"></path></g></svg>
            </i>
        	<i id="moon" className={`absolute top-1/2 right-[5px] translate-y-[-50%] ${theme === 'light' ? '' : 'hidden'}`}>
                <svg className="w-5 h-5" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#1d4ed8"><g id="Moon_SVGRepo_bgCarrier" strokeWidth="0"></g><g id="Moon_SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="Moon_SVGRepo_iconCarrier"> <title>moon [#114]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7719.000000)" fill="#1d4ed8"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M173.99029,7576.998 C171.388688,7576.998 169.058358,7575.74775 167.591892,7573.8028 C174.222522,7575.15916 180.17047,7569.27528 178.803103,7562.59159 C180.748048,7564.05806 181.998298,7566.38839 181.998298,7568.98999 C181.998298,7573.40541 178.405705,7576.998 173.99029,7576.998 M174.610911,7559 C176.076376,7560.36937 176.993293,7562.32032 176.993293,7564.48549 C176.993293,7571.32432 168.608909,7574.54254 164.0003,7569.60961 C164.32062,7574.84985 168.66997,7579 173.99029,7579 C179.518819,7579 184.0003,7574.51852 184.0003,7568.98999 C184.0003,7563.66967 179.85015,7559.32032 174.610911,7559" id="moon-[#114]"> </path> </g> </g> </g> </g></svg>
            </i>
        </label>
    )
}

export default ThemeToggler;



