const produtos = [
    { id: 1, nome: "Enantato de testosterona", preco: 230, descricao: "250mg", imagem: "imagem1.jpg" },
    { id: 2, nome: "Decanoato de nandrolona", preco: 230, descricao: "250mg", imagem: "imagem2.jpg" },
    { id: 3, nome: "Hemogenin", preco: 230, descricao: "250mg", imagem: "imagem3.jpg" },
    { id: 4, nome: "Acetato de trembolona", preco: 230, descricao: "250mg", imagem: "imagem4.jpg" }
];

let carrinho = [];

function exibirCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <div>
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: R$${produto.preco}</p>
            </div>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        catalogoDiv.appendChild(produtoDiv);
    });
}

function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    carrinho.push(produto);
    atualizarCarrinho();
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(produto => produto.id !== produtoId);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinhoUl = document.getElementById('itens-carrinho');
    const totalCarrinhoSpan = document.getElementById('total-carrinho');

    itensCarrinhoUl.innerHTML = '';
    let total = 0;
    carrinho.forEach(produto => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${produto.nome} - R$${produto.preco}
            <button onclick="removerDoCarrinho(${produto.id})">Remover</button>
        `;
        itensCarrinhoUl.appendChild(li);
        total += produto.preco;
    });
    totalCarrinhoSpan.textContent = total;
}

function finalizarCompra() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.href = 'checkout.html';
}

exibirCatalogo();

