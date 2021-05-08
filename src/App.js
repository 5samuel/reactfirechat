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
    
    <div class="container">
      {renderLoading()}
      {
        user ? (
          
          <>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"></link>
         
          <center>
          
          
          <header><h3>3487-CHAT</h3><Button onClick={signOut} class="cerrar"> Logout Google</Button></header>
     
          
          <div class="contenedor">
         
          
          <h4 class="ben">Bienvenidos al Chat!</h4>
          <hr></hr>
          
          <Channel user={user}/>
          </div>
          
            <br></br><br></br><br></br>
          
          </center>
          <br></br>
          
          </>
          
          ):<div class="inicio"><Button onClick={signInWithGoogle}> Sign in with Google</Button></div>
          
        }
        <br></br>
    </div>
  );
}
export default App;
