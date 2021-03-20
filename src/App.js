import {
  db,
  googleAuthProvider,
  firebase
}from './config/firebase';
import Button from './components/Button';

function App() {
  
const signInWithGoogle =async ()=> {
  firebase.auth().UseDeviceLanguage();

  try{
    await firebase.auth().singInWithpopup(googleAuthProvider);

  }catch(e){
    console.error(e.message);
  }

};
return(
  <div>
    <Button onclick={signInWithGoogle} > sing in with Google</Button>
  </div>
);
}
export default App;