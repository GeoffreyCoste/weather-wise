/* import { useRef, useEffect, useCallback } from "react"; */
/* import { useState } from "react"; */
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import * as modalActions from '../redux/features/modal';

interface ModalInterface {
    children: React.ReactNode;
}

export default function Modal({ children }: ModalInterface) {
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(modalActions.toggle());
    };

    return (
        <div id="modal-overlay" className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-slate-950/50" onClick={() => toggleModal}>
            <div className="w-1/2 h-96">
                <div className="w-full h-full bg-white p-4 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )

    /* const modalContent = (
        <div id="modal-overlay" className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-slate-950/50" onClick={() => toggleModal}>
            <div className="w-1/2 h-96">
                <div className="w-full h-full bg-white p-4 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );

    return createPortal(
        modalContent,
        document.getElementById("modal-root")! // confirm element exists
    ); */
}

/* export default function Modal({ children, onClose/* , onOverlayClick * }: ModalInterface) {
    // ref for the modal wrapper element
    const modalWrapperRef = useRef();
    /* const overlayClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onOverlayClick();
    } *

    // check if user clicked inside or outside the modal
    // useCallback is used to store the function reference, so that on modal closure, the correct callback can be cleaned in window.removeEventListener
    const overlayHandler = useCallback((event: React.MouseEvent) => {
        if (!modalWrapperRef?.current?.contains(event.target)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        // wrap inside setTimeout in order to prevent the eventListener to be attached before the modeal is opened
        setTimeout(() => {
            window.addEventListener('click', overlayHandler)
        })
    }, []);

    useEffect(() => {
        return () => window.removeEventListener('click', overlayHandler)
    }, []);

    const modalContent = (
        <div id="modal-overlay" className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-slate-950/50"/* onClick={() => overlayClickHandler} *>
            <div className="w-1/2 h-96" ref={modalWrapperRef}>
                <div className="w-full h-full bg-white p-4 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
    
    return createPortal(
        modalContent,
        document.getElementById("modal-root")! // confirm element exists
    );
} */