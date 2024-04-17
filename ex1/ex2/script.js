const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const codigoFio = document.getElementById('codigoFio').value;
  const corFio = document.getElementById('corFio').value;
  const precoMetro = parseFloat(document.getElementById('precoMetro').value);
  const quantidadeMetros = parseInt(document.getElementById('quantidadeMetros').value);

  if (!codigoFio || !corFio || isNaN(precoMetro) || isNaN(quantidadeMetros)) {
    resultado.innerHTML = '<p style="color: red;">Preencha todos os campos corretamente.</p>';
    return;
  }

  const valorTotal = precoMetro * quantidadeMetros;

  resultado.innerHTML = `
    <p>Fio: ${codigoFio} - ${corFio}</p>
    <p>Preço por metro: R$ ${precoMetro.toFixed(2)}</p>
    <p>Quantidade de metros: ${quantidadeMetros}</p>
    <hr>
    <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
  `;
});
