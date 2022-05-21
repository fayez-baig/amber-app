import { SyntheticEvent } from 'react';
import { Result, DefaultResult } from 'app/domains/kernel/types';

export interface ReactAutoCompleteProps {
    handleSubmit: (e: SyntheticEvent) => void;
    results: Result[];
    inputValue: string;
    setInputValue: (val: string) => void;
    isFetching: boolean;
    isError: boolean;
    defaultResult: DefaultResult[];
}
