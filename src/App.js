import {Button, Channel} from './components';
import {signInWithGoogle, signOut} from './login';
import {useAuthState} from './hooks';
import { firebase } from './config/firebase';



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
          <br></br><br></br><br></br>
          <center>
          <div class="contenedor">
          <br></br><br></br><br></br>
          <Button onClick={signOut}> Logout Google</Button>
          
          <br></br><br></br><br></br><br></br><br></br>
          <p>Bienvenidos al Chat!</p>
          
          <Channel user={user}/>
          <br></br><br></br><br></br>
          </div>
          </center>
          <br></br>
          </>
          
          ):<Button onClick={signInWithGoogle} > Sign in with Google</Button>
          
        }
        <br></br>
    </div>
  );
}
export default App;
