let chosenNumber = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");

const randomNumber = Math.round(Math.random() * 10);

let cont = 1;
while(Number(chosenNumber) !== randomNumber){
  chosenNumber = prompt("Erro, tente novamente:");
  cont++;
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número em ${cont} tentativa(s).`); 