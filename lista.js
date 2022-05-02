console.log(`trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//lista
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `curitiba`
)

listaDeDestinos.push(`cuiaba`)//adicionar item na lista
console.log('Destino possiveis');
//console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1);//retirar item da lista
console.log(listaDeDestinos) 
console.log(listaDeDestinos[1])

let num = [ 5,8,4];//lista
num.push(7,3,2,1,6);//adicionar a lista
num.length;//quantidade na lista
num.sort();//ordem crescente
console.log(num);
console.log(`sua lista tem: ${num}`);
console.log(`sua lista tem: ${num.length} posições`);
console.log(`seu primeiro elemento da lista é ${num[0]}`);
