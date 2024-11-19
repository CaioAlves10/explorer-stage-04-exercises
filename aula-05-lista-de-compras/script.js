alert("Lista de compras");

let i = 1;
let itens = [];

while(i <= 10) {
  let item = prompt(`Item ${i}:`);
  itens.push(item);
  i++
};

alert(`A lista de compra contém os itens: ${itens}`);