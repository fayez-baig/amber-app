import { FC } from 'react';
import ReactAutoComplete from 'app/domains/Common/components/react-autocomplete/ReactAutoComplete';
import { useDebounce } from 'app/hooks/app-hooks/useDebounce';
import { useGetResults } from 'app/hooks/queries-hooks/useGetResults';

const HomePage: FC = () => {
    const [debouncedSearchTerm, searchTerm, setSearchTerm] = useDebounce<string>('', 100);
    const { data, isFetching, isError } = useGetResults(debouncedSearchTerm);

    return (
        <>
            <ReactAutoComplete
                isFetching={isFetching}
                isError={isError}
                handleSubmit={(e) => {
                    e.preventDefault();
                }}
                defaultResult={[
                    {
                        title: 'Recent Searches',
                        recentSearch: ['london', 'paris', 'berlin'],
                    },
                    {
                        title: 'Popular cities',
                        recentSearch: [
                            'london',
                            'paris',
                            'berlin',
                            'london',
                            'paris',
                            'berlin',
                            'london',
                            'paris',
                            'berlin',
                        ],
                    },
                ]}
                setInputValue={setSearchTerm}
                inputValue={searchTerm}
                // @ts-ignore
                results={data?.data?.data?.result?.slice(0, 5) || []}
            />
        </>
    );
};
export default HomePage;
