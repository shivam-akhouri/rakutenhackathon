import React from 'react'
import '../ChatBot/ChatBot.css'

export const ChatBot = (props) => {
  return (
    <button className={`${props.className} chatbot`} onClick={()=>props.onClick()} type={props.type||'chatbot'}>
            {props.children}
        </button>
  )
}
