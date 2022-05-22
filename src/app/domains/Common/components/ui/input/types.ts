import { ReactNode, InputHTMLAttributes, ChangeEvent } from 'react';

type InputType = 'text' | 'email' | 'password';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readOnly?: boolean;
    type: InputType;
    value?: string;
    className?: string;
    icon: ReactNode;
    onIconClick?: () => void;
}
