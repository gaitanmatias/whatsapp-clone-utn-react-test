import React from 'react'
import { useState } from 'react'
import MensajesIniciales from '../../data/messages.jsx'
import MessageComponent from '../MessageComponent/MessageComponent.jsx'
import InputMessageComponent from '../InputMessageComponent/InputMessageComponent.jsx'
import './ChatComponent.css'

function ChatComponent() {
  const [mensajes, setMensajes] = React.useState(MensajesIniciales);

  const messageDelete = (id) => {
    setMensajes(mensajes.filter((mensaje) => mensaje.id !== id));
  };

  // ChatComponent.jsx
  const messageSend = (event) => {
    event.preventDefault()
    const texto = event.target.texto.value.trim()
    if (!texto) return

    const nuevoMensaje = {
      id: mensajes.length > 0 ? mensajes[mensajes.length - 1].id + 1 : 1,
      emisor: 'YO',
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      texto: texto,
      status: 'no-recibido'
    }

    setMensajes([...mensajes, nuevoMensaje])
    event.target.reset() // Limpia el formulario
  }

  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        {mensajes.map((mensaje, index) => {
        const anterior = mensajes[index - 1]; 
        const seguido = anterior?.emisor === mensaje.emisor;

        return (
          <MessageComponent
            key={mensaje.id}
            id={mensaje.id}
            emisor={mensaje.emisor}
            hora={mensaje.hora}
            texto={mensaje.texto}
            estado={mensaje.status}
            seguido={seguido}
            messageDelete={messageDelete}
          />
        );
      })}
      </div>
      <InputMessageComponent messageSend={messageSend} />
    </div>
  );
}

export default ChatComponent