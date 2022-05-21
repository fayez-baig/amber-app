import { FC } from 'react';
import { SvgIcon } from '../svg-icon';
import { ResultsProps } from './types';

const Results: FC<ResultsProps> = ({
    results = [],
    handleClick,
    selectedItem,
    inputValue,
    isFetching,
    isError,
}): JSX.Element => {
    return (
        <ul className="md:max-w-[583px] lg:max-w-[682px] bg-light-mode dark:bg-dark-mode  dark:text-white">
            {!isFetching && !results.length && isError && (
                <li className="py-[10px] pl-5 pr-5 flex items-center justify-center">
                    Something went wrong try again !!!
                </li>
            )}

            {isFetching && !results.length && (
                <li className="py-[10px] pl-5 pr-5 flex items-center justify-center">
                    Finding matching results...
                </li>
            )}
            {inputValue && !results.length && !isFetching && (
                <li className="py-[10px] pl-5 pr-5 flex items-center justify-center">
                    Sorry but nothing matched your search terms 🙃
                </li>
            )}

            {results?.map((result, index) => (
                <div key={`result-${result.id}`}>
                    <li
                        className={`${
                            selectedItem?.id === result.id ? 'border-blue-500' : 'border-none'
                        } py-[10px] pl-5 pr-5 flex items-center`}
                        onMouseDown={() => handleClick(result)}
                        onClick={() => handleClick(result)}
                    >
                        <SvgIcon
                            icon={
                                result?.region_type === 'establishment'
                                    ? 'GraduateIcon'
                                    : 'LocationIcon'
                            }
                            className="w-6 h-6 mr-3 text-dark-mode dark:text-white"
                        />
                        <div className="flex flex-col">
                            <span className="text-[#f06673] text-sm">{result.name}</span>
                            <span className="text-xs">{result.secondary_name}</span>
                        </div>
                    </li>
                    {index !== results.length - 1 && <div className="border-b border-gray-500" />}
                </div>
            ))}
        </ul>
    );
};

export default Results;
