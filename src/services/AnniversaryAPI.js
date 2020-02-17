import ApiClient from './ApiClient';

var API = new ApiClient();

const AnniversaryAPI = {
    Create: async (anniversaryPayload) => {
        return await API.post('/v1/Anniversary',anniversaryPayload);
    },
    Update: "",
    GetByCustomer: async (customerId) => {
        return await API.get(`/v1/Anniversary/${customerId}`);
    },
    Delete: "",
    GetDetail: async () => {
        return await API.get();
    }
}

//make this component available to the app
export default AnniversaryAPI;