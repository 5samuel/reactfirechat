
import Button from './components/Button';
import {signInWithGoogle} from './login';
import signOut from './login/signOut';
import {useAuthState} from './hooks';
import { firebase } from './config/firebase';


function App(){
  const {user, initializing} = useAuthState(firebase.auth());
  return(
    <div>
      {
        user ? (
          <>
          <Button onClick={signOut}> sign in with Google</Button>
          <p>Bienvenidos al Chat!</p>
          </>
          ):<Button onClick={signInWithGoogle} > Sign in with Google</Button>
        }
        
    </div>
  );
}
export default App;
