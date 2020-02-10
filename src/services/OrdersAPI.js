import ApiClient from './ApiClient';

var API = new ApiClient();

const OrdersAPI = {
    Create: async (orderPayload) => {
        return await API.post('/v1/Orders',orderPayload);
    },
    OrderHistory: "",
    GetDetail: ""
}

//make this component available to the app
export default OrdersAPI;
