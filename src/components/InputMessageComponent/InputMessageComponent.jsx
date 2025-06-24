// InputMessageComponent.jsx
import React from 'react'
import './InputMessageComponent.css'

function InputMessageComponent(props) {
  return (
    <div className='input-message-container'>
      <form className='input-message-form' onSubmit={props.messageSend}>
        <input
          type="text"
          name="texto" // importante para acceder desde event.target
          placeholder='Mensaje'
          className='input-message'
          autoComplete='off'
        />
        <button className='input-message-button'>Enviar</button>
      </form>
    </div>
  )
}

export default InputMessageComponent