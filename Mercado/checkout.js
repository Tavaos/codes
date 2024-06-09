document.getElementById('form-checkout').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const email = document.getElementById('email').value;
    const metodoPagamento = document.getElementById('metodo-pagamento').value;
    
    // Salvando as informações do usuário para exibição ou processamento posterior
    const informacoesUsuario = {
        endereco: endereco,
        cep: cep,
        email: email,
        metodoPagamento: metodoPagamento
    };
    
    console.log(`Endereço: ${endereco}`);
    console.log(`CEP: ${cep}`);
    console.log(`Email: ${email}`);
    console.log(`Método de Pagamento: ${metodoPagamento}`);
    
    alert('Compra Confirmada!');
    localStorage.removeItem('carrinho');
    window.location.href = 'index.html';
});
