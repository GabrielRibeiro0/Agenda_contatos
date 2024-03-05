const form = document.getElementById('form-contato');
const contatos = [];
const numero = [];   


let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (contatos.includes(inputNome.value) & numero.includes(inputNumero.value)) {
        alert(`O Contato: ${inputNome.value} Já foi inserido`);
    } else {
    contatos.push(inputNome.value);
    numero.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`

    linhas += linha
    }
    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}