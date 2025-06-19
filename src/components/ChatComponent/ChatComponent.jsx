import React from 'react'
import Mensajes from './../../data/messages.jsx'
import MessagesComponent from '../MessageComponent/MessageComponent.jsx'
import './ChatComponent.css'

function ChatComponent() {
  return (
    <div className='chat-container'>
      {Mensajes.map((mensaje, index) => {
        // Verifica si el mensaje anterior existe y si su emisor es el mismo que el del mensaje actual
        // Esto permite determinar si el mensaje actual es "seguido" por el mismo emisor
        const anterior = Mensajes[index - 1]; 
        const seguido = anterior?.emisor === mensaje.emisor;

        return (
          <MessagesComponent
            key={mensaje.id}
            emisor={mensaje.emisor}
            hora={mensaje.hora}
            texto={mensaje.texto}
            estado={mensaje.status}
            seguido={seguido} // propiedad para indicar si el mensaje es seguido
          />
        );
      })}
    </div>
  );
}

export default ChatComponent
