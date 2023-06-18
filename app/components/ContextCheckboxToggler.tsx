'use client'

import React, { useState } from "react";
import { ContextInterface } from "../utils/interfaces";
import { useTheme } from "../utils/hooks/useTheme";

const ContextCheckboxToggler = ({ context, state, toggleState, firstOption, secondOption}: ContextInterface) => {

    const { theme } = useTheme();

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        toggleState(state);
    }

  return (
    <label role="button" htmlFor={`${context}-toggle`} className="cursor-pointer">
        <input type="checkbox" id={`${context}-toggle`} className="hidden absolute top-1/2 translate-y-[-50%]" checked={isChecked} onChange={handleChange} />
        <div className="text-blue-300 select-none">
            <span className={`${!isChecked ? `text-2xl ${theme === 'light' ? 'text-blue-700' : 'text-white/75'}` : `text-sm ${theme === 'light' ? 'text-blue-300' : 'text-blue-300'}`} font-bold mr-2`}>{firstOption}</span>
            /
            <span className={`${isChecked ? `text-2xl ${theme === 'light' ? 'text-blue-700' : 'text-white/75'}` : `text-sm ${theme === 'light' ? 'text-blue-300' : 'text-blue-300'}`} font-bold ml-2`}>{secondOption}</span>
        </div>
    </label>
  )
}

export default ContextCheckboxToggler;