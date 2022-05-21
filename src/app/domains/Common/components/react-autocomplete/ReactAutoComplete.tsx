/* eslint-disable no-console */
import { FC, useState } from 'react';
import { Input, Button } from 'app/domains/Common/components/ui';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { ReactAutoCompleteProps } from './types';
import Results from 'app/domains/Common/components/results/Results';
import { Result } from 'app/domains/kernel/types';
import useOutSideClick from 'app/hooks/app-hooks/useOutsideClick';

const ReactAutoComplete: FC<ReactAutoCompleteProps> = ({
    handleSubmit,
    results,
    inputValue,
    setInputValue,
    isFetching = false,
    isError = false,
}): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Result>();
    const inputRef = useOutSideClick(() => setIsFocused(false));

    console.log(inputValue, 'searchterm');
    return (
        <div className="container mx-auto max-w-[820px]">
            <form className="flex flex-col md:flex-row" onSubmit={(e) => e.preventDefault()}>
                <Input
                    type="text"
                    placeholder="Search by University or City"
                    icon={isFocused && <SvgIcon icon="CloseIcon" className="w-5 h-5" />}
                    minLength={3}
                    maxLength={100}
                    value={inputValue}
                    autoFocus={isFocused}
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => setInputValue?.(e.target.value)}
                    ref={inputRef}
                    onIconClick={() => setInputValue('')}
                />
                <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="py-5 px-[30px] w-full lg:w-auto"
                    icon={<SvgIcon icon="SearchIcon" className="w-5 h-5 mr-2" />}
                >
                    Search
                </Button>
            </form>
            {isFocused && (
                <Results
                    results={results || []}
                    handleClick={(item) => setSelectedItem(item)}
                    selectedItem={selectedItem}
                    inputValue={inputValue}
                    isFetching={isFetching}
                    isError={isError}
                />
            )}
        </div>
    );
};

export default ReactAutoComplete;
