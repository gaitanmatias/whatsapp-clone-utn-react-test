import React from 'react'
import ChatComponent from '../ChatComponent/ChatComponent'
import './MessageComponent.css'

function MessageComponent(props) {
  const renderTildes = () => {
    if (props.emisor !== "YO") return null

    if (props.estado === 'visto') {
      return <span className="tildes tildes-azul">☑️</span>
    } else if (props.estado === 'no-visto') {
      return <span className="tildes tildes-gris">✅</span>
    } else if (props.estado === 'no-recibido') {
      return <span className="tildes tildes-gris"> ✓</span>
    }
    return null
  }
  
    return (
    <div className={`
      ${props.emisor === "YO" ? 'message-container--yo' : 'message-container--otro'}
      ${props.seguido ? "message--seguido" : ""}
    `}>
      <span className='message__text-content'>{props.texto}
      <div className='message__footer'>
        <span className='footer__hora'>{props.hora}</span>
        <span className='footer__estado'>{renderTildes()}</span>
      </div>
      </span>
    </div>
  )
}

export default MessageComponent
