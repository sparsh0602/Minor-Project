import React from 'react'
import { useState } from 'react'
import './ChatBox.css'
export default function ChatBox() {
    const [userMessage, setuserMessage] = useState("Give Your Input Here")
    const [botMessage, setbotMessage] = useState([{
        bot: "Hi"
    },
    {
        bot: "Check if the content falls within the classification of hate speech."
    }]);

    const handleOnclick=()=>{
        if(userMessage!="" || userMessage!="Give Your Input Here")
        {
            let obj={
                bot:"",
                human:userMessage
            }
            let newMessageArray=[...botMessage,obj];
            setbotMessage(newMessageArray)
        }
        setuserMessage("Give Your Input Here");
    }
  
    return (
        <div className="chatBoxBodyContainer">
            <div className="chatBoxContainer">

                {
                    botMessage.map((message) => {
                        console.log(message.bot);
                        return (
                            message.bot != "" ? <div className="botMessage"><text className="botMessageText">{message.bot}</text></div> :
                                <div className="humanMessage"><text className="humanMessageText">{message.human}</text></div>)
                    })
                }
            </div>
            
            <textarea type="text" value={userMessage} onChange={(e) => setuserMessage(e.target.value)} className="chatBoxInputContainer"  cols="40" 
       rows="5" />

       <button className="submitButtonContainer" onClick={handleOnclick}>
           Submit
           </button>
        </div>
    )
}
