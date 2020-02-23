import ApiClient from './ApiClient';

var API = new ApiClient();

const WishListAPI = {
    Add: async (payload) => {
        return API.post('/v1/WishList',payload);
    },
    Remove: async (payload) => {
        return API.delete('/v1/WishList',payload);
    },
    GetByCustomer: async (customerId) =>{
        return API.get(`/v1/WishList/${customerId}`)
    }
}

//make this component available to the app
export default WishListAPI;