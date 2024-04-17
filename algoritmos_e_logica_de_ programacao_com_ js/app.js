/*
//Encontre a solucao para o problema  
let nome = prompt('🤖 Qual é seu nome?')
alert('🤖 Olá ' + nome + ' seja bem vindo!' )

alert('🤖 Por favor, insira um número seguido de outro número para que eu possa calcular a soma dos dois valores.')
let numberOne = prompt('🤖 Digite o primeiro número')
let numberTwo = prompt('🤖 Digite o segundo número')
let resultado = Number(numberOne) + Number(numberTwo)
alert('🤖 Resultado: ' + resultado)
//resultado da prova 

let studant = prompt('qual o nome do aluno')
let n1 = prompt('qual a nota da primeira prova?')
let n2 = prompt('qual a nota da segunda prova?')
let n3 = prompt('qual a nota da terceira prova?')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6 

alert(result)

//resultado da prova 2

let studant = prompt('🤖 Qual o nome do aluno?')
let n1 = prompt('🤖 Qual a nota da primeira prova?')
let n2 = prompt('🤖 Qual a nota da segunda prova?')
let n3 = prompt('🤖 Qual a nota da terceira prova?')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6 

if (result) {
    alert('😁 Parabens ' + studant + '! Sua nota media foi de: ' + average + '!' )
}else{
    alert(studant + '☹️ Voce nao passou. Estude para sua prova de recuperacao. Sua media foi: ' + average)
}

operadores compatativos 
> maior que 
< menor que 
>= maior ou igual quer
<= menor ou igual quer
== igual a
!= diferente de 

//capture 10 itens para compor uma lista de supermercado 

let items = []; 
for (let item = 0; item < 10; item++){
    let itemName = prompt("Digite o item" + (item + 1))
    items[item] = itemName
}

alert(items)

// jogo da a dvinha 

let result = prompt('Adivinhe o número que estou pensando. Ele está entre 1 e 10.');
const randomNumber = Math.floor(Math.random() * 10) + 1;  // Garante que o número esteja entre 1 e 10

let xAttempts = 1;

while(Number(result) !== randomNumber){
    result = prompt('Erro, tente novamente:');
    xAttempts++;
}

alert(`Parabéns! O número que eu pensei foi o ${randomNumber} e você adivinhou o número em ${xAttempts} tentativas.`);

//Fazendo uma linsta

let option
let items =[]
let index = 0;

while(option !=3){
    
    option = Number( prompt( `
    Olá usuario! Digite o numero da operecao desejaada
    1.Cadastrar um item na lista 
    2.Mostrar os itens cadastrados
    3.Sair do programa
    `))
    
    if(option == 1){
        items[index] = prompt("Digite o nome do item")
        index++
    }
    
    else if (option == 2){
        
        if(items.length == 0){
            alert('nao existe itens cadastrados')
        }else{
            alert(items)
        }
    }
}

//fazendo outra lista

let option;
let items = [];

while (option != 3) {
  option = Number(
      prompt(`
    Olá usuário! Digite o número da operação desejada:
    1. Cadastrar um item na lista 
    2. Mostrar os itens cadastrados
    3. Sair do programa
    `)
);

switch (option) {
    case 1:
        let item = prompt("Digite o nome do item:");
        items.push(item);
        break;  // Corrigido para 'break' apenas
        case 2:
            if (items.length == 0) {
                alert("Não existem itens cadastrados.");
            } else {
                alert(items.join(", "));  // Usando join para melhor visualização dos itens
            }
      break;
      case 3:
          alert("Tchau");
          break;
          default:
              alert("Opção inválida. Tente novamente.");
            }
        }
        //Crie uma lista de pacientes 
        // Estrutura para armazenar os pacientes
let pacientes = [];

// Função para adicionar um paciente
function adicionarPaciente(nome, altura, peso) {
    pacientes.push({
        nome: nome,
        altura: altura,
        peso: peso,
        imc: calcularIMC(peso, altura)
    });
}

// Função para calcular o IMC (Índice de Massa Corporal)
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Função para listar todos os pacientes
function listarPacientes() {
    console.log("Lista de Pacientes:");
    pacientes.forEach(paciente => {
        console.log(`Nome: ${paciente.nome}, Altura: ${paciente.altura} m, Peso: ${paciente.peso} kg, IMC: ${paciente.imc}`);
    });
}

// Adicionando alguns pacientes para teste
adicionarPaciente("Ana Silva", 1.65, 65);
adicionarPaciente("João Cardoso", 1.75, 80);
adicionarPaciente("Maria Fernandes", 1.60, 55);

// Listando os pacientes
listarPacientes();

//site de imc 
const patients = [
    {
        name: 'Lugon',
        age: 23,
        wieght: 75,
        height: 175
    },
    {
        name: 'Igor',
        age: 25,
        wieght: 70,
        height: 180
    },
    {
        name: 'Guilherme',
        age: 28,
        wieght: 83,
        height: 160
    }
]
/*
alert(`O Paciente se chama ${patients[0].name}, tem ${patients[0].age} anos, ${patients[0].wieght}kg e ${patients[0].height} de altura`)
function IMC(weight, height){
    return weight / ((height /100) **2). toFixed (2)
}

function printPatientIMC(patient){
    alert(`
    O Paciente ${patient.name} possui o IMC de ${(patient.wieght / ((patient.height / 100) ** 2 )). toFixed (2)}
    `)    
}

printPatientIMC(patients[0])
printPatientIMC(patients[1])
printPatientIMC(patients[2])
//array
const myArray = [1,2,'a', 'b', true]

//Object 
const myObject = {property: 'value'}

//Funcao 

//name 
function myFunction() {}

//Anonymous
const myFunction = function() {}

//Arrow
const myFunction = () => {}

//arguments & return
function sum(a,b) {
    return a + b
}
const sum = (a, b) => a + b

//Excecucao
myFunction()
sum(1,2)

//switch 
const water = "sem gas"

switch(water) {
    case "com gas" :
        alert('Essa agua é com gas')
        break 
        case "sem gas":
            alert('Agua fresquinha da fonte') 
            break
            default: 
            alert('cade minha agua?')
        }
        
        //while
        let play = true 
        while(play) {
            
        }
        
//for 
let text = 'abc'
for (let i = 0; i <text.length; i++){
    alert(text[i])
}

//for... of
for (let char of text) {
    alert(char)
} 

//operadores 
()
*
**
/
%
+
-
//logico
&& // e 
|| // ou
! // negacao

//comparacao 
> // maior 
< //menor
>= //maior ou igual 
<= //menor ou igual 
== // igual
=== // estritamente igual
=! // diferente 

// atribuicao 
= // 
*= //
/= //
+= //
-= //

typeof // tipo do dado 
++ // incremento 
-- //decremento
{} // objeto vazio 
[] // array vazio 
, // separa elemento de uma array  
*/