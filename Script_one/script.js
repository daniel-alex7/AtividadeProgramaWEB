let produtos = [];
let valores = [];
let quantidades = [];

function Adicionar() {
    let nome = document.getElementById("N_produto").value;
    let valor = Number(document.getElementById("V_produto").value);
    let quantidade = Number(document.getElementById("Q_produto").value);

    if (!nome || isNaN(valor) || isNaN(quantidade)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    produtos.push(nome);
    valores.push(valor);
    quantidades.push(quantidade);

    document.getElementById("saida").innerHTML =
        "Produto adicionado: " + nome +
        " | Valor: R$ " + valor.toFixed(2) +
        " | Quantidade: " + quantidade + "<br>" +
        "<strong>Total de produtos cadastrados: " + produtos.length + "</strong>";

    // limpa os inputs
    document.getElementById("N_produto").value = "";
    document.getElementById("V_produto").value = "";
    document.getElementById("Q_produto").value = "";
}

function Finalizar() {
    if (produtos.length === 0) {
        alert("Nenhum produto adicionado!");
        return;
    }

    let valoresTotais = [];
    for (let i = 0; i < produtos.length; i++) {
        valoresTotais[i] = valores[i] * quantidades[i];
    }

    // O método reduce() em JavaScript é usado para iterar sobre um array e acumular um único valor de resultado, que pode ser um número, string, objeto ou até outro array.

    let totalVendas = valoresTotais.reduce((soma, v) => soma + v, 0);
    let medDay = totalVendas / 7;
    let maiorVenda = Math.max(...valoresTotais);
    let menorVenda = Math.min(...valoresTotais);

    document.getElementById("saida").innerHTML =
        "<h3> Relatório de Vendas</h3>" +
        "Total vendido: R$ " + totalVendas.toFixed(2) + "<br>" +
        "Média diária: R$ " + medDay.toFixed(2) + "<br>" +
        "Maior venda de produto: R$ " + maiorVenda.toFixed(2) + "<br>" +
        "Menor venda de produto: R$ " + menorVenda.toFixed(2);
}