"use client"

import React, { useState, useRef } from 'react';
import { useEscapeKey } from '../utils/hooks/useEscapeKey';
import { useTheme } from '../utils/hooks/useTheme';
import Button from './Button';
import { ModalInterface } from '../utils/interfaces/modal.interface';

// TODO: try 'createPortal'
// TODO: review display for breakpoints: mobile (<640px) and sm(640px): quid x to close modal? Switch to full screen? + for sm(640px) only: quid <ul> of bigger height 

export default function Modal({ children }: ModalInterface) {

    const { theme } = useTheme();

    const [openModal, setOpenModal] = useState(false);

    // Initialize the ref to null
    // Use type argument to cast ref to the type of element used as ref attribute
    const modalRef = useRef<HTMLDivElement>(null);

    const showModal = () => {
        setOpenModal(true);
    };

    const hideModal = () => {
        setOpenModal(false);
    };

    // Assuming that openModal = true && modalRef exists
    // Check if click occurs only on the overlay to close modal
    const handleOverlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const modalNode = modalRef.current;
        if (openModal && modalNode && !modalNode.contains(e.target as Node)) {
            hideModal();
        }
    }

    
    // When openModal = true, close modal when 'ESC' key on keyboard is pressed
    /* const handleEscKeyPress = (event: KeyboardEvent) => {
        if (openModal && event.key === 'Escape') hideModal();
    } */

    // On 'keyup' event, use the Escape Key Press handler
    /* useEffect(() => {
        document.addEventListener('keyup', handleEscKeyPress)
    }); */

    // custom Hook handling 'ESC' key press to close modal
    useEscapeKey(hideModal);

    return (
        <div id="modal-wrapper" className="w-full">
            <Button 
              type="button"
              id="modal-open-btn"
              style={`w-full sm:w-3/4 md:w-1/4 flex justify-between items-center ${theme === 'light' ? 'bg-slate-50/25 hover:bg-slate-50/50 text-blue-600' : 'bg-blue-300/25 hover:bg-blue-300/50 text-blue-300 hover:text-white'} font-semibold mx-auto mb-4 py-2 px-4 border border-2 ${theme === 'light' ? 'border-white' : 'border-blue-300'} rounded-lg shadow`} 
              onClick={showModal}
            >
              <div className="flex justify-between items-center space-x-4">
                <svg className="w-5 h-5 text-gray-50 dark:text-gray-400" fill={`${theme === 'light' ? '#2563eb' : '#93c5fd'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span>Search</span>
              </div>
              <span className="bg-blue-600 text-white ml-auto py-1 px-2 rounded-lg">ctrl K</span>
            </Button>
            {openModal && (
                <div id="modal-overlay" className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-slate-950/50" onClick={handleOverlayClick}>
                    <div className="w-full sm:w-3/4 lg:w-1/2 h-96 sm:h-4/6 lg:h-96 mx-2 md:mx-0" ref={modalRef}>
                        <div id="modal" className="w-full h-full relative bg-gradient-to-tr from-blue-500 to-blue-700 p-4 rounded-lg" role="alertdialog" aria-modal="true" aria-labelledby="dialog_label" aria-describedby="dialog_desc">
                            <button type="button" className="flex absolute right-0 items-center pr-3 cursor-pointer" onClick={hideModal}>
                                <svg className="w-8 h-8 text-gray-50 dark:text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
