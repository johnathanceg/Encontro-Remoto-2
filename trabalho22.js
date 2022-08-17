// Considerar a quantidade de alunos presentes na sala, percorra 
// do zero o número total de alunos e retornar os seguintes resultados.
// se o número para par, escreva 'par' e o número correspondente.
// se o número para ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspondente.



for (let alunos = 0; alunos <= 30; alunos ++) {
    
    
    if(alunos == 0) {
        console.log (alunos + " Zero");
} else {

        
if (alunos % 2 == 0) {
    console.log ("Par " + alunos);
} else {
        console.log (alunos + " Impar");
        }
    }
} console.log("Obrigado")
  console.log("Fim do Programa!!")