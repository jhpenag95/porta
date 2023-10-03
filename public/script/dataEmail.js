document.querySelector('.contenInput').addEventListener('submit', (event) => {
    event.preventDefault();

    let usuario = document.querySelector('.contenInput input[type="text"]').value;
    let correo = document.querySelector('.contenInput input[type="email"]').value;
    let mensaje = document.querySelector('.contenInput textarea').value;

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, correo, mensaje }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
