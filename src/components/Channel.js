import { useEffect, useState } from "react";
import {db} from '../config/firebase';

const Channel = ({user = null}) =>{
    const [messages, setMessages]= useState([]);
    useEffect (() =>{
        /*
        crear el query de los mensaje.
        carga 100 mensaje ordenados por fecha.       
        */ 
       const query = db.collection('messages')
            .orderBy('createdAt')
            .limit(100)
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

    })
    return (
    <ul>
        { messages.map(message => (
            // todos los mensajes seran mostrados en una lista.
            <li key={message.id}>{message.txt}</li>
        ))}
    </ul>
    );
};
export default Channel;