import {firebase} from '../config/firebase';

function signOut() {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.error(e);
    }
}
export default signOut;