import ApiClient from './ApiClient';


var API = new ApiClient();

const ProductAPI = {
    GetAll: "",
    GetFeatured: async () => {
        return await API.get(`/v1/Products/Featured`);
    },
    GetPopular: async () => {
        return await API.get(`/v1/Products/Popular`);
    },
    GetDetail: async (productId) => {
        return await API.get(`/v1/Products/${productId}`);
    }
}

//make this component available to the app
export default ProductAPI;
