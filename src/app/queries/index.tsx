import { axiosInstance } from '../axios/axios-instance';

const getResults = async <T,>(query: string): Promise<T> =>
    await axiosInstance.get(
        `regions?sort_key=search_name&sort_order=desc&states=active&search_name=${query}`,
    );

export { getResults };
