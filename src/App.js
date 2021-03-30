
import Button from './components/Button';
import{ googleAuthProvider, firebase} from './config/firebase';
function App() {

  const signInWithGoogle = async ()=>{
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(googleAuthProvider);
    }catch (e){
      console.error(e.message);
    }
  }
  return (
    
       <center> 
    <div>
          <center><h3>React Firechat</h3></center>
         <Button  onClick = {signInWithGoogle} > sing with Google</Button>
    </div>
    </center>

  );
}

export default App;
