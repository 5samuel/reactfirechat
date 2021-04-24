import { useEffect, useState, useRef} from "react";
import {db, firebase} from '../config/firebase';
import Message from './Message';

const Channel = ({user = null}) =>{
    const [messages, setMessages]= useState([]);
    //cargar los mensaje desde la base de datos.
    useEffect (() =>{
        /*

        Crear el query de los mensajes.
        Cargar 100 mensajes ordenados por fecha.
        */
        const query = db.collection('messages')
            .orderBy('creatdAt')
            .limit(100);

        const unsubscribe = query.onSnapshot(querySnapshot =>{
            //obtiene todos los mensajes desde la db con ID
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            //Actualizando los mensajes obtenidos desde la base de datos.
            setMessages(data);

        });

        return unsubscribe;

      }, []);
    
      const {uid, displayName, photoURL} = user;
      const [newMessage, setNewMessage] = useState('');

      const handleMessageOnChange = (e) => {
          e.preventDefault();
          setNewMessage(e.target.value);
      }

const messagesRef = db.collection('messages');


const handleOnSubmit = e => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
        //Add new message in firestore
        messagesRef.add({
text: trimmedMessage,
createdAt: firebase.firestore.FieldValue.serverTimestamp(),
uid,
displayName,
photoURL,
        });
        //Clear input field

        setNewMessage('');
    }
}};

const inputRef = useRef();
useEffect(() => {
    if (inputRef.current) {
        inputRef.current.focus();
    }
}, [inputRef]);

return (
    <>
    <ul>
        {messages.map(message => (
            <li key={message.id}>
                <Message {...message} />
                </li>
        ))}
    </ul>

    <form
    onSubmit={handleOnSubmit}>

        <input
        ref={inputRef}
        type="text"
        value={newMessage}
        onChange={handleMessageOnChange}
        placeholder="Escribe tu mensaje aqui..."
        
        />

        <button
        type="submit"
        disabled={!newMessage}
        >
            Send
            </button>
            </form>
            </>
);
        export default Channel;
    
    


