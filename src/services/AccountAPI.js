import ApiClient from './ApiClient';

const Url = "​/v1​/Account";

const AccountAPI = {
    GetByPhonenumber: async (phonenumber) => {
        const _url = Url+"/phonenumber";
        return await ApiClient.get(_url);
    },

    Create: async (registerObject) => {
        try{

            return await ApiClient.post(_url, registerObject);
        }catch(err){
            return {error: err};
        }
    },

    Update: async (updateObject) => {
        try{

            return await ApiClient.put(_url, updateObject);
        }catch(err){
            return {error: err};
        }
    },
}

//make this component available to the app
export default AccountAPI;
