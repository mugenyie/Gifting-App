import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-community/google-signin';
import type { User } from '@react-native-community/google-signin';
import Config from '../common/Config';

class GoogleAuth {

    constructor(){
        this.GoogleConfig = this._configureGoogleSignIn();
    }

    _configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: Config.webClientId,
            offlineAccess: false,
        });
    }

    async _getCurrentUser() {
        const userInfo = await GoogleSignin.signInSilently();
        return userInfo;
    }

    _signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          alert(error);
        }
      };

    _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            return userInfo;
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
            alert('cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
            alert('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('play services not available or outdated');
            } else {
            alert('Something went wrong', error.toString());
            }

            return;
        }
    };

}

export default GoogleAuth;
