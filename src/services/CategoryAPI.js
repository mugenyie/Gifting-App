import ApiClient from './ApiClient';

var API = new ApiClient();

const CategoryAPI = {
    GetAll: "",
    GetFeatured: async () => {
        return await API.get(`/v1/Category/Featured`);
    },
    GetDetail: ""
}

//make this component available to the app
export default CategoryAPI;
