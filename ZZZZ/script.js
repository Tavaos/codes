function limpar(){
    document.getElementById('display').value = "";
}

function coleta(botao){
    document.getElementById('display').value += botao;
}

function resultado(){
    let display = document.getElementById('display').value;
    try {
        let resultado = eval(display);
        // eval é funcao que calcula uma expressao
        document.getElementById('display').value = resultado;
    } catch (error) {
        let display = document.getElementById('display').value = "Não pode :(";
    }
}