let items = [];
let item;
let option = 0;

while(option !== 3) {
  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `));

  if(option === 1) {
    item = prompt("Qual item deseja cadastrar?");
    items.push(item);
  } else if(option === 2) {
    if(items.length === 0) {
      alert("Não existem itens cadastrados");
    } else {
      alert(`itens cadastrados: ${items}`);
    }
  } else if(option !== 3) {
    alert("Opção inválida");
  }
}