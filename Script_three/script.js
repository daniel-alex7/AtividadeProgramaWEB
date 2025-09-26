let carrinho = [];

function atualizarSaida() {
    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    if (carrinho.length === 0) {
        saida.innerHTML = "<p>Carrinho vazio!</p>";
        return;
    }

    // Professor, aqui notei que precisava executar uma função para cada elemento, por isso pesquisei e achei o forEach()
    let total = 0;
    carrinho.forEach(item => {
        let subtotal = item.valor * item.quantidade;
        total += subtotal;
        saida.innerHTML +=
            `${item.nome} | R$ ${item.valor.toFixed(2)} | Qtd: ${item.quantidade} | Subtotal: R$ ${subtotal.toFixed(2)}<br>`;
    });

    saida.innerHTML += "<hr><strong>Total do carrinho: R$ " + total.toFixed(2) + "</strong>";
}

//Para inserir o produto:
function Inserir() {
    let select = document.getElementById("N_produto");
    let nome = select.value;
    let valor = Number(select.selectedOptions[0].getAttribute("data-valor"));
    let quantidade = Number(document.getElementById("Q_produto").value);

    if (quantidade <= 0) {
        alert("Informe uma quantidade válida!");
        return;
    }

    carrinho.push({ nome, valor, quantidade });
    atualizarSaida();
}

//Remover produto
function Remover() {
    if (carrinho.length === 0) {
        alert("Carrinho já está vazio!");
        return;
    }
    carrinho.pop();
    atualizarSaida();
}

//Finalizar compra
function Finalizar() {
    if (carrinho.length === 0) {
        alert("Nenhum produto no carrinho!");
        return;
    }
    let total = carrinho.reduce((soma, item) => soma + (item.valor * item.quantidade), 0);
    atualizarSaida();
    alert("Compra finalizada! Total: R$ " + total.toFixed(2));
}