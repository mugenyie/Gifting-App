import ApiClient from './ApiClient';

var API = new ApiClient();

const AnniversaryAPI = {
    Create: async (anniversaryPayload) => {
        return await API.post('/v1/Anniversary',anniversaryPayload);
    },
    Update: async (anniversaryPayload) => {
        return await API.put('/v1/Anniversary',anniversaryPayload);
    },
    GetByCustomer: async (customerId) => {
        return await API.get(`/v1/Anniversary/${customerId}`);
    },
    Delete: async (anniversaryId) => {
        return await API.delete(`/v1/Anniversary/${anniversaryId}`);
    },
    GetDetail: ""
}

//make this component available to the app
export default AnniversaryAPI;