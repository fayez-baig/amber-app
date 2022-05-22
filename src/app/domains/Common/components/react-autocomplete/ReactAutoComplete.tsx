import { FC, useState, useRef, useEffect } from 'react';
import { Input, Button } from 'app/domains/Common/components/ui';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';
import { ReactAutoCompleteProps } from './types';
import Results from 'app/domains/Common/components/results/Results';
import { Result } from 'app/domains/kernel/types';
import useOutSideClick from 'app/hooks/app-hooks/useOutsideClick';
import { useKeyPress } from 'app/hooks/app-hooks/useKeyPress';

const ReactAutoComplete: FC<ReactAutoCompleteProps> = ({
    handleSubmit,
    results,
    inputValue,
    setInputValue,
    isFetching = false,
    isError = false,
    defaultResult,
}): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Result>();
    const [cursor, setCursor] = useState<number>(-1);
    const inputRef = useOutSideClick(() => setIsFocused(false));
    const searchBoxRef = useRef<HTMLInputElement>(null);
    const ref = useRef({ inputRef, searchBoxRef });
    const downPress = useKeyPress('ArrowDown', searchBoxRef);
    const upPress = useKeyPress('ArrowUp', searchBoxRef);
    const enterPress = useKeyPress('Enter', searchBoxRef);

    useEffect(() => {
        if (results.length && downPress) {
            setCursor((prevState) => (prevState < results.length - 1 ? prevState + 1 : prevState));
        }
    }, [downPress]);
    useEffect(() => {
        if (results.length && upPress) {
            setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
        }
    }, [upPress]);
    useEffect(() => {
        if (results.length && enterPress) {
            setSelectedItem(results[cursor]);
        }
    }, [cursor, enterPress]);

    return (
        <div className="container mx-auto max-w-[820px]">
            <form
                className="flex flex-col md:flex-row"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (selectedItem) {
                        handleSubmit(selectedItem);
                    }
                }}
            >
                <Input
                    type="text"
                    placeholder="Search by University or City"
                    icon={isFocused && <SvgIcon icon="CloseIcon" className="w-5 h-5" />}
                    minLength={3}
                    maxLength={100}
                    value={inputValue}
                    autoFocus={isFocused}
                    onFocus={() => setIsFocused(true)}
                    onChange={(e) => {
                        setInputValue?.(e.target.value);
                        setCursor(-1);
                    }}
                    // @ts-ignore
                    ref={ref}
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
                    defaultResult={defaultResult}
                    handleClick={(item) => setSelectedItem(item)}
                    selectedItem={selectedItem}
                    inputValue={inputValue}
                    isFetching={isFetching}
                    isError={isError}
                    isFocused={isFocused}
                    currentCursor={cursor}
                />
            )}
        </div>
    );
};

export default ReactAutoComplete;
