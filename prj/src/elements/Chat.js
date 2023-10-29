import React, {useRef} from "react";
import './Chat.css'

function Chat() {
    const chatMessagesRef = useRef(null);
    const inputRef = useRef(null);

    function handleFormSubmit(e) {
        e.preventDefault();
        const message = inputRef.current.value;
        inputRef.current.value = '';
        send(message);
    }
    function send(message) {
        const messageItem = document.createElement('p');
        messageItem.textContent = message;
        messageItem.classList.add('message');

        chatMessagesRef.current.appendChild(messageItem);

        setTimeout(()=> {
            chatMessagesRef.current.removeChild(messageItem)
        }, 10000)
        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }

    return(
        <>
        <div className="mainChat">
            <div ref={chatMessagesRef} className="messages"></div>
        </div>
        <div className="divinput">
            <form className="form" onSubmit={handleFormSubmit}>
                <input ref={inputRef} className="input" type="text" placeholder="Your message" maxLength='30'/>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
        </>
    );
}

export default Chat;