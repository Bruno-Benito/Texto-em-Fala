
// Função que inicia fala
function startSpeech() {
    
    const meuTexto = document.getElementById("meuTexto").value;

    fetch('/start_speech', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto: meuTexto }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        document.getElementById('mensagem').innerText = data.message;
        document.getElementById('mensagem').hidden = false;
    })
    .catch((error) => {
        console.error('Erro:', error);
    });


}

// Função que limpa textarea
function cleanText() {
    document.getElementById('meuTexto').value = "";
    document.getElementById('mensagem').hidden = true;
}


