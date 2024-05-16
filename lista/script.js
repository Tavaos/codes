//Estrutura de dados
const listaDecompras = [];

function limpar(){
 document.getElementById('item').value ='';
 document.getElementById('valor').value ='';
}
function create(){
    let item = document.getElementById('item').value;
    let valor = Number(document.getElementById('valor').value).toFixed(4);

    const obj = {item, valor};

    listaDecompras.push(obj);
    console.log(listaDecompras);
    limpar();
    
}

function read(){

    listaDecompras.forEach((obj, indice) =>{
        console.log(obj.item);
        console.log(obj.valor);
        console.log(indice);


    });

   
}
function update(){

}
function apagar(){

}