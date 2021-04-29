import { formatRelative } from 'date-fns';


const formatDate = date => {
    let formattedDate = '';
    if (date) {
        // Convert the date in words relative to the current date
        formattedDate = formatRelative(date, new Date());
        // Uppercase the first letter
        formattedDate =
            formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
};


// Message.js
const Message = ({
    createdAt = null,
    text = '',
    displayName = '',
    photoURL = '',
}) => {
    if (!text) return null;

    
    return (
        <div class="todo">
            
            {photoURL ? (
                <img
                    src={photoURL}
                    alt="Avatar"
                    className="rounded-full mr-4"
                    width={45}
                    height={45}
                />
            ) : null}
            
            {displayName ? <p >{displayName}</p> : null}
            {createdAt?.seconds ? (
                <span>{formatDate(new Date(createdAt.seconds * 1000))}</span>
            ) : null}
            <div class="text"><p class="hola">{text}</p></div>
        </div>
        
    );;
};

export default Message;