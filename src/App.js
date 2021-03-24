
import Button from './components/Button';
import{ googleAuthProvider, firebase} from './config/firebase';
function App() {

  const signInWithGoogle = async ()=>{
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInwithPopup(googleAuthProvider);
    }catch (e){
      console.error(e.message);
    }
  }
  return (
    <div>
      <Button onClick = {signInWithGoogle} > sing with Google</Button>
    </div>
  );
}

export default App;
