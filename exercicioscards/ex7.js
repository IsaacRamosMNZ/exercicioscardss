let lista = [];

function adicionarItem() {
    let item = document.getElementById("item").value;
    let resultado = document.getElementById("resultado");

    if (item === "") {
        resultado.innerText = "Por favor, insira um item.";
        return;
    }

    lista.push(item);
    exibirLista();
}

function removerItem(index) {
    lista.splice(index, 1);
    exibirLista();
}

function exibirLista() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    lista.forEach((item, index) => {
        resultado.innerHTML += `
            <li>${item} <button onclick="removerItem(${index})">Remover</button></li>
        `;
    });
}
