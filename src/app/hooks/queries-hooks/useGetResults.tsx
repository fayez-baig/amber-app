import { useQuery, UseQueryResult } from 'react-query';
import { getResults } from 'app/queries';
import { SearchResults } from 'app/domains/kernel/types';

export const useGetResults = (searchTerm: string): UseQueryResult<SearchResults, Error> =>
    useQuery([`results-${searchTerm}`, searchTerm], () => getResults(searchTerm), {
        refetchOnWindowFocus: false,
        staleTime: 150000,
        enabled: !!searchTerm,
    });
