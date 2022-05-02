console.log(`trabalhando com condicionais`);

//lista
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `curitiba`
);

const idadeComprador = 19;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = "curitiba";

listaDeDestinos.push(`cuiaba`);
console.log('Destino possiveis');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;

console.log("Destino existe:", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("boa viagem")

}else{
    console.log("desculpe tivemos um erro")
}

for(let cont = 0 ;cont < 5 ;cont++){

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}