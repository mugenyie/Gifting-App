import AsyncStorage from '@react-native-community/async-storage';
import { firebase } from '@react-native-firebase/auth';

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

export const SignOutUser = async () => {
    await firebase.auth().signOut();
    await AsyncStorage.removeItem('userData');
    return;
}