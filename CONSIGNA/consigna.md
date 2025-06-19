const mensajes = [
    {
        emisor: 'YO'
        hora: '23:10'
        id: 1,
        texto: 'Hola que tal?',
        status: 'visto'
    },
    {
        emisor: 'USUARIO'
        hora: '23:11'
        id: 2,
        texto: 'Hola',
        status: 'visto'
    },
    {
        emisor: 'USUARIO'
        hora: '23:11'
        id: 3,
        texto: 'Si, hoy aprendí estados',
        status: 'visto'
    },
    {
        emisor: 'YO'
        hora: '23:12'
        id: 4,
        texto: 'Eso que significa 🤓?',
        status: 'no-visto'
    },
    {
        emisor: 'YO'
        hora: '23:15'
        id: 5,
        texto: 'Estas ahi?',
        status: 'no-recibido'
    },
]

## Consigna:
En base a la lista de mensajes deberemos desarrollar un componente llamado "Chat" que recibirá por props una lista de mensajes y por cada mensaje se deberá mostrar un dialogo de chat, en este caso el estilo es libre (Es decir podes permitirte NO tener fidelidad visual con la pagina de ejemplo de la consigna).

## ACLARACIONES:

- En vez de usar el icono de visto o no visto podes usar un circulo (12px . 12px) con azul para visto, gris/amarillo para no visto
- No es necesario que el dialogo del chat se vea EXACTAMENTE IGUAL
- Tratar de siempre mostrar el tiempo en el mensaje como en el mensaje de "Do you know what time is it?"