const lista = document.querySelector('.lista');
const botaoAdicionar = document.getElementById('adicionarItem');
const botaoRemover = document.getElementById('removerItem');
const mensagem = document.querySelector('.mensagem');

let contador = 0;

botaoAdicionar.addEventListener('click', function() {
    const novoItem = document.createElement('li');
    const texto = document.getElementById('novoItem').value;

    if (texto) {
        novoItem.textContent = texto;
        lista.appendChild(novoItem);
        contador++;
        mensagem.textContent = `A lista contém ${contador} elementos.`;
    } else {
        alert("Insira o texto que deseja adicionar!")
    }
});

botaoRemover.addEventListener('click', function() {
    const ultimoItem = lista.lastChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
        contador--;
        mensagem.textContent = `A lista contém ${contador} elementos.`;
    }
});
