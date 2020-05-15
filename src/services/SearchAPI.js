import ApiClient from './ApiClient';

var API = new ApiClient();

const SearchAPI = {
    SearchByKeyWord: async (query) => {
        return API.get(`/v1/Products?q=${query}`);
    }
}

//make this component available to the app
export default SearchAPI;