function somar(){
    let a = document.getElementById('inputA');
    let b = document.getElementById('inputB');


    return parseFloat(a.value)+ parseFloat(b.value);
}

function calcQuadrado(valor){
    document.getElementById('saida').innerHTML = valor*valor;
}

function exec(){
    calcQuadrado(somar());
}