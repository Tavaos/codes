const botaoAdicionar = document.getElementById('adicionar-botao');
const botaoRemover = document.getElementById('remover-botao');
const itensFila = document.querySelector('.itens-fila');

let fila = [];

botaoAdicionar.addEventListener('click', () => {
    const valorItem = prompt('Digite o valor do item:');
    if (valorItem) {
        fila.push(valorItem);
        const itemElemento = document.createElement('li');
        itemElemento.textContent = valorItem;
        itensFila.appendChild(itemElemento);
    }
});

botaoRemover.addEventListener('click', () => {
    if (fila.length > 0) {
        const valorItem = fila.shift();
        const itemElemento = itensFila.querySelector(`li:nth-child(1)`);
        itensFila.removeChild(itemElemento);
    } else {
        alert('A fila está vazia');
    }
});
