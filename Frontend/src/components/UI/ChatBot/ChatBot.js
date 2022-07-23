import React from 'react'
import '../ChatBot/ChatBot.css'

export const ChatBot = (props) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div onClick={()=>setOpen(!open)} className="chatbot">
      {open && 
            <iframe title="Chatbot" src="https://web.powerva.microsoft.com/environments/Default-d4963ce2-af94-4122-95a9-644e8b01624d/bots/new_bot_628e1b73674e4da7859b35425b3f09cc/webchat" frameborder="0" ></iframe>
          }
          {props.children}
    </div>
        
  )
}
