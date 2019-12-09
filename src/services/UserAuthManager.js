import AsyncStorage from '@react-native-community/async-storage';
import GoogleAuth from './GoogleAuth';
const GoogleAuthClient = new GoogleAuth();

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

export const SignInUser = async () => {
    await GoogleAuthClient._signIn().then(user => StoreUserData(user)).catch(error => alert(error));
}

export const SignOutUser = async () => {
    await GoogleAuthClient._signOut();
    await AsyncStorage.removeItem('userData');
    return;
}