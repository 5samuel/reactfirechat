import {formatRelative} from 'date-fns';

const formatDate = date => {
    let formattedDate = '';
    if (date){
        // convert the date in words relative to the current date
        formatteDate = formatRelative(date, new Date());
        // Uppercase the first letter
        formattedDate =
                formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
            
        }
        return formattedDate;
};
// Message.js
const Message =({
    createdAt =null,
    text= '',
    displayName='',
    photoURL= '',
})=>{
    if (!text) return null;
    return (
        <div>
            {photoURL ?(
                <img 
                src={photoURL}
                alt="Avatar"
                className="rounded-full mr-4"
                width={45}
                height={45}
                />
            ): null}
            {displayName ? <p>{displayName}</p> : null}
            {createdAt?.seconds(
                <span>{formatDate(new Date(CreatedAt.seconds * 1000))}</span>

            )}
            <p>{text}</p>
        </div>
    );;
};
export default Message