import { useEffect, useState, useRef } from 'react';
import { db, firebase } from '../config/firebase';
import Message from './Message';
import '../style/style.css';


const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState([]);

    //Necesito cargar los mensajes desde la BD.
    useEffect(() => {
        /* 
            Crear el query de los mensajes.
            Cargar 100 mensajes ordenados por fecha.
        */
        const query = db.collection('messages')
            .orderBy('createdAt')
            .limit(100);

        const unsubscribe = query.onSnapshot(querySnapshot => {
            //Obtiene todos los mensajes desde la bd con su ID.
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            //mensaje de alerta
            
            // Actualizo los mensjaes obtenidos desde la bd. 
            setMessages(data);

        });
        //CleanUp
        return unsubscribe;

    }, [])


    //Codigo para agregar nuevos mensajes
    const { uid, displayName, photoURL } = user;
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
            // Add new message in Firestore
            messagesRef.add({
                text: trimmedMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL,
            });
            // Clear input field
            setNewMessage('');
        }
    };

    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);
    
    
    return (
        <>
       <meta name ="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <Message {...message} />
                    </li>
                ))}
            </ul>
            <section>
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
                    class=" enviar"
                    type="submit"
                    disabled={!newMessage}
                >
                    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-cursor-fill"
              viewBox="0 0 16 16"
            >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
        </button>
            
            </form>
            </section>
        </>
    );
};

export default Channel;

    
    


