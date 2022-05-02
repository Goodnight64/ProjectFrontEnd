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
const passagemComprada = false;

listaDeDestinos.push(`cuiaba`);
console.log('Destino possiveis');
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
    console.log(`você compro o destino para ${listaDeDestinos[1]}, Boa Viagem`)
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);

}else {
    console.log(`você não tem autorização para cpmprar`)
}

console.log(`Embarque: \n\n`)
if(idadeComprador >= 18 && passagemComprada && estaAcompanhada){
    console.log(`Boa Vaigem`)
}else{
    console.log(`Não pode embarcar`)
}

console.log(`Destinos possiveis ainda São ${listaDeDestinos}`);

//operdores
// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
