import ApiClient from './ApiClient';

var API = new ApiClient();

const AccountAPI = {
    GetByPhonenumber: async (phoneNumber) => {
        return await API.get(`/v1/Account/${phoneNumber}`);
    },

    Create: async (registerObject) => {
        return await API.post(`/v1/Account`,registerObject);
    },

    Update: async (updateObject) => {
        return await API.put(`/v1/Account`,updateObject)
    },
}

export default AccountAPI;
