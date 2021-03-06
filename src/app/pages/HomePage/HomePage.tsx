import { FC } from 'react';
import ReactAutoComplete from 'app/domains/Common/components/react-autocomplete/ReactAutoComplete';
import { useDebounce } from 'app/hooks/app-hooks/useDebounce';
import { useGetResults } from 'app/hooks/queries-hooks/useGetResults';

const HomePage: FC = () => {
    const [debouncedSearchTerm, searchTerm, setSearchTerm] = useDebounce<string>('', 100);
    const { data, isFetching, isError } = useGetResults(debouncedSearchTerm);

    return (
        <div className="relative bg-[url('/src/assets/images/bg-image.jpeg')] bg-no-repeat bg-cover flex flex-col items-center h-[calc(100vh-4rem)]">
            <div className="absolute p-2 top-36">
                <div className="mb-10 text-center">
                    <h1 className="mb-1 text-white drop-shadow-[2px 2px 5px rgb(0 0 0 / 15%)] text-5xl lg:text-6xl">
                        Home away from Home
                    </h1>
                    <h2 className="text-xl text-white lg:text-2xl">
                        Book your student accommodation near top universities across the globe
                    </h2>
                </div>
                <ReactAutoComplete
                    isFetching={isFetching}
                    isError={isError}
                    // eslint-disable-next-line no-console
                    handleSubmit={(result) => console.log(result)}
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
                                'Germany',
                                'New York',
                                'France',
                                'UAE',
                                'USA',
                                'Netherlands',
                            ],
                        },
                    ]}
                    setInputValue={setSearchTerm}
                    inputValue={searchTerm}
                    results={data?.data?.data?.result?.slice(0, 5) || []}
                />
            </div>
        </div>
    );
};
export default HomePage;
