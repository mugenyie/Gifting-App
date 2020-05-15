import ApiClient from './ApiClient';

var API = new ApiClient();

const AccountAPI = {
    GetByPhonenumber: async (phoneNumber) => {
        return await API.get(`/v1/Account/${phoneNumber}`);
    },

    Save: async (userObject) => {
        return await API.post(`/v1/Account`,userObject);
    }
}

export default AccountAPI;
