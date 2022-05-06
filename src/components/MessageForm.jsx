import react, { useState } from 'react';
import bootstrap from 'bootstrap';


const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg)
        // what should we do with the message?
    };

    return (
        <div className="form-group row">
            <form onSubmit={handleSubmit}>
                <h1>Set Message</h1>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                ></textarea>
                <br></br>
                <button className="btn btn-success mt-2" type="submit">Send Message</button>
            </form>
        </div>
        
    );
};

export default MessageForm;
