let filaNome = [];

function renderizarFila() {
    let saida = document.getElementById("saida");
    saida.innerHTML = ""; // limpa a área

    // Vai percorrer array, cria para cada elemento o cliente
    filaNome.forEach(
        cliente => {
        let div = document.createElement("div"); // cria novo elemento(lugar na memoria)
        div.className = "cliente";
        div.textContent = cliente; // colocar o texto dentro da div como sendo o nome
        saida.appendChild(div); // adiciona div em saida
    });
}

function Adicionar() {
    let nome = document.getElementById("tx_nome").value;

    if (!nome) {
        alert("Digite um nome!");
        return;
    }

    filaNome.push(nome);
    renderizarFila();
    document.getElementById("tx_nome").value = "";
}

function Remover() {
    if (filaNome.length === 0) {
        alert("A fila está vazia!");
        return;
    }

    filaNome.shift();
    renderizarFila();
}