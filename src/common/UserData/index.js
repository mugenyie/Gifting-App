import AsyncStorage from '@react-native-community/async-storage';

//Store data
export const StoreUserData = async (user) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(user));
  } catch (e) {
    // saving error
  }
}

//Read data
export const GetUserData = async () => {
    let data;
    
    try {
        let userData = await AsyncStorage.getItem('userData');
        data = JSON.parse(userData);
        return data
    } catch(e) {
        // error reading value
    } 

    return;
}

export const RemoveUserData = async () => {
    try{
        await AsyncStorage.removeItem('userData');
    }catch(e){
        
    }
}