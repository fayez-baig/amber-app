import { useRef, useEffect, MutableRefObject } from 'react';

const useOutSideClick = (callback: () => void): MutableRefObject<HTMLInputElement | null> => {
    const callbackRef = useRef<() => void>(callback); // initialize mutable ref, which stores callback
    const innerRef = useRef<HTMLInputElement | null>(null); // returned to client, who marks "border" element

    const handleClick = (e: MouseEvent) => {
        if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target as Node))
            callbackRef.current();
    };

    // update cb on each render, so second useEffect has access to current value
    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []); // no dependencies -> stable click listener

    return innerRef; // convenience for client (doesn't need to init ref himself)
};

export default useOutSideClick;
