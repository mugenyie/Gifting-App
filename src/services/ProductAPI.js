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
    GetDetail: async (productId, customerId) => {
        return await API.get(`/v1/Products/${productId}/${customerId}`);
    },
    GetByCategory: async (categoryId) => {
        return await API.get(`/v1/Products/Category/${categoryId}`);
    },
    GetByVendor: async (vendorId) => {
        return await API.get(`/v1/Products/Vendor/${vendorId}`);
    }
}

//make this component available to the app
export default ProductAPI;
