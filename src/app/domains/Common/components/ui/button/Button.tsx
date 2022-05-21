import { FC } from 'react';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
    className,
    type = 'button',
    children,
    disabled = false,
    onClick,
    icon,
}) => {
    const button = (
        <button
            type={type}
            className={`${
                icon ? 'justify-center group inline-flex items-center' : ''
            }  bg-[#e8415d] text-white font-light focus:outline-none text-base
			${className ?? ''} ${disabled ? 'opacity-20 cursor-not-allowed' : ''}
			`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    );

    return icon ? <div className="text-center">{button}</div> : button;
};

export default Button;
