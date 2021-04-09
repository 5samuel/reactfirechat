
import Button from './components/Button';
import {signInWithGoogle} from './login';
import signOut from './login/signOut';
import {useAuthState} from './hooks';
import { firebase } from './config/firebase';
import { render } from '@testing-library/react';


function App(){
  const {user, initializing} = useAuthState(firebase.auth());

  const renderLoading = ()=> {
    if (initializing){
      return <div>
        <h1>Loading ...</h1>
      </div>
    }
  }
  return(
    <div>
      {renderLoading()}
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
