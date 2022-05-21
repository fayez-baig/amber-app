import { Result, DefaultResult } from 'app/domains/kernel/types';

export interface ResultsProps {
    results: Result[];
    handleClick: (data: Result) => void;
    selectedItem?: Result;
    inputValue: string;
    isFetching: boolean;
    isError: boolean;
    isFocused: boolean;
    defaultResult: DefaultResult[];
}
