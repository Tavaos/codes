const empilharBotao = document.getElementById('empilhar-botao');
const desempilharBotao = document.getElementById('desempilhar-botao');
const mostrarBotao = document.getElementById('mostrar-botao');
const pilhaItens = document.querySelector('.pilha-itens');

let pilha = [];

empilharBotao.addEventListener('click', () => {
    const valorItem = prompt('Digite o valor do item:');
    if (valorItem) {
        pilha.push(valorItem); // Adiciona item ao topo da pilha
        const itemElemento = document.createElement('li');
        itemElemento.textContent = valorItem;
        pilhaItens.appendChild(itemElemento); // Exibe o novo item no topo da pilha
    }
});

desempilharBotao.addEventListener('click', () => {
    if (pilha.length > 0) {
        const valorItem = pilha.pop(); // Remove o item do topo da pilha
        const itemElemento = pilhaItens.querySelector('li:last-child'); // Seleciona o último item da lista (topo da pilha)
        pilhaItens.removeChild(itemElemento); // Remove o item da lista
    } else {
        alert('A pilha está vazia');
    }
});

mostrarBotao.addEventListener('click', () => {
    pilhaItens.innerHTML = ''; // Limpa a lista
    for (const item of pilha) {
        const itemElemento = document.createElement('li');
        itemElemento.textContent = item;
        pilhaItens.appendChild(itemElemento);
    }
});
