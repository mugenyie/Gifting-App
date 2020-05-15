import ApiClient from './ApiClient';


var API = new ApiClient();

const ConstantsAPI = {
    GetConstant: async (constantName) => {
        return await API.get(`/v1/Configuration?constant=${constantName}`);
    }
}

//make this component available to the app
export default ConstantsAPI;
