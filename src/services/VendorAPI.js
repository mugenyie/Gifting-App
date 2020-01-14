import ApiClient from './ApiClient';

var API = new ApiClient();

const VendorAPI = {
    GetAll: "",
    GetFeatured: async () => {
        return await API.get(`/v1/Vendors/Featured`);
    },
    GetDetail: async (vendorId) => {
        return await API.get(`/v1/Vendors/${vendorId}`);
    }
}

//make this component available to the app
export default VendorAPI;
