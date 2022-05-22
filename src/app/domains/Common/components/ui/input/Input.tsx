import { forwardRef, RefObject } from 'react';
import { InputProps } from './types';

const Input = forwardRef<
    RefObject<{
        inputRef: RefObject<HTMLInputElement>;
        searchBoxRef: RefObject<HTMLInputElement>;
    }>,
    InputProps
>(({ className, icon, onIconClick, ...inputProps }, ref) => {
    // @ts-ignore
    const { inputRef, searchBoxRef } = ref?.current;
    const input = (
        <input
            {...inputProps}
            className={`w-full p-5 pr-8 bg-white dark:dark-mode-text dark:bg-dark-mode focus:outline-none ${className}`}
            ref={searchBoxRef}
        />
    );
    return icon ? (
        <div
            className="relative flex items-center justify-center w-full cursor-pointer dark:dark-mode-text"
            ref={inputRef}
        >
            <div className="absolute right-0 pr-2 mt-1" onClick={onIconClick}>
                {icon}
            </div>
            {input}
        </div>
    ) : (
        input
    );
});

export default Input;
