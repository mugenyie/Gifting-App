import ApiClient from './ApiClient';

var API = new ApiClient();

const CategoryAPI = {
    GetAll: async () => {
        return await API.get(`/v1/Category`);
    },
    GetFeatured: async () => {
        return await API.get(`/v1/Category/Featured`);
    },
    GetDetail: async (categoryId) => {
        return await API.get(`/v1/Category/${categoryId}`);
    }
}

//make this component available to the app
export default CategoryAPI;
