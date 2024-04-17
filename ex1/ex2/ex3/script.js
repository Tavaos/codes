const formularioReserva = document.getElementById('formularioReserva');
const mensagemResultado = document.getElementById('mensagemResultado');

formularioReserva.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const localizacao = document.getElementById('localizacao').value;
  const carroPreferencia = document.getElementById('carroPreferencia').value;
  const passageiros = parseInt(document.getElementById('passageiros').value);
  const abastecer = document.getElementById('abastecer').checked;

  const dadosReserva = {
    nome: nome,
    telefone: telefone,
    localizacao: localizacao,
    carroPreferencia: carroPreferencia,
    passageiros: passageiros,
    abastecer: abastecer
  };

  // Simular envio dos dados para o servidor (substituir por API real)
  console.log('Dados da reserva:', dadosReserva);

  // Exibir mensagem de confirmação
  mensagemResultado.innerHTML = `<p>Reserva enviada com sucesso!</p>`;

  // Limpar o formulário
  formularioReserva.reset();
});
