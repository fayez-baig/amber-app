import { forwardRef } from 'react';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon, onIconClick, ...inputProps }, ref) => {
        const input = (
            <input
                ref={ref}
                className={`w-full p-5 pr-8 bg-white dark:dark-mode-text dark:bg-dark-mode focus:outline-none ${className}`}
                {...inputProps}
            />
        );
        return icon ? (
            <div className="relative flex items-center justify-center w-full cursor-pointer dark:dark-mode-text">
                <div className="absolute right-0 pr-2 mt-1" onClick={onIconClick}>
                    {icon}
                </div>
                {input}
            </div>
        ) : (
            input
        );
    },
);

export default Input;
