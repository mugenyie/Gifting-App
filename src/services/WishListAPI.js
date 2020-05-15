import ApiClient from './ApiClient';

var API = new ApiClient();

const WishListAPI = {
    Save: async (payload) => {
        return API.post('/v1/SavedProduct',payload);
    }
}

//make this component available to the app
export default WishListAPI;