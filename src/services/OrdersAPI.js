import ApiClient from './ApiClient';

var API = new ApiClient();

const OrdersAPI = {
    Create: async (orderPayload) => {
        return await API.post('/v1/Orders',orderPayload);
    },
    OrderHistory: async (customerId) => {
        return await API.get(`/v1/Orders/OrderHistory/${customerId}`);
    },
    GetDetail: async (orderId) => {
        return await API.get(`/v1/Orders/${orderId}`);
    }
}

//make this component available to the app
export default OrdersAPI;
