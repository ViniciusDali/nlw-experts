// const perguntas = [
//   "a", 0, 2.3,
// ];

// const celular = {
//   cor: 'preto',
//   modelo: 'samsung',
//   peso: 200
// };

// alert (celular.modelo)

// alert (perguntas)

// const perguntas = [
//   {
//     pergunta: "Pergunta ", 
//     resposta: [
//       "Resposta A",
//       "Resposta B",
//       "Resposta C",
//     ],
//     correta: 2
//   },
// ]

const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "myVar := 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' verifica em JavaScript?",
      respostas: [
        "Tipo e valor são iguais",
        "Valor é igual, mas o tipo pode ser diferente",
        "Valor é igual, mas o tipo pode ser diferente e não considera maiúsculas e minúsculas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento do DOM pelo seu seletor CSS",
        "Seleciona todos os elementos do DOM",
        "Seleciona um elemento do DOM pelo seu ID",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof([]))?",
      respostas: [
        "'array'",
        "'object'",
        "'arrayobject'",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "função",
        "declare",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes métodos remove o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 3 + '3' em JavaScript?",
      respostas: [
        "'33'",
        "6",
        "'6'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array JavaScript?",
      respostas: [
        "Cria um novo array com os resultados da chamada de uma função para cada elemento do array",
        "Remove todos os elementos do array",
        "Verifica se todos os elementos do array passam em um teste",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico 'NÃO' em JavaScript?",
      respostas: [
        "!",
        "NOT",
        "&&",
      ],
      correta: 0
    },
  ];
  
  //querySelector serve para selecionar algo
  const quiz = document.querySelector('#quiz');//Criamos essa variavel, apenas para ter acesso a div com id quiz, isso, para no loop criar um appendChild (filho*) dentro dessa variavel, que será quizItem
  const template = document.querySelector('template'); //Aqui, a variavel templete, tem a cópia do conteúdo introduzido dentro do (''), que no caso, são as informações da tag templete do html
  
  
  const corretas = new Set(); //new serve para criar coisas novas e um tipo de objeto especifico chamado Set, no Set pode adicionar ou tirar, só não pode repetir a informação
  
  const totalDePerguntas = perguntas.length; //faz a somatoria de todas as perguntas respondidas
  const mostrarTotal = document.querySelector('#acertos span');//aqui vamos acessar o html com ID #acertos e pegar apenas o span
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  //Aqui vamos substituir o conteudo de mostrarTotal(do span dentro de #acertos)
  
  //Loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true); //Essa variavel recebe template.content, o .cloneNode (true) é para clonar todos os nós/filhos dentro da tag template no html
  
    quizItem.querySelector('h3').textContent = item.pergunta; //quizItem é o template clonado, vamos pesquisar lá dentro por h3, o conteúdo em texto receberá um novo valor que está em item.pergunta
    
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true); //Aqui, a variavel dt está clonando tudo dentro da tag html dt
  
      dt.querySelector('span').textContent = resposta; //Aqui, colocamos no span que existe dentro do dt, um conteúdo em texto que estará contido em resposta
  
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      //Aqui estamos acessando o input, e fazendo com que o marcador das perguntas não sejam desmarcados ao selecionar a resposta da proxima pergunta. O set Attribute, atribui de acordo com o nome dentro da tag input e o valor, nesse caso, estamos concatenando o pergunta e os itens de Perguntas.
  
      dt.querySelector('input').value = item.respostas.indexOf(resposta); // Aqui estamos acessando o input e atribuindo a posição no array se é 0, 1 ou 2
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
        //Vamos entrar na tag dt, no input, e verificar a mudança (onchange), ao clicar em uma das escolhas (isso é uma mudança), vamos ativar a função event, que vai verificar se a posição no array (0, 1 ou 2) está igual ao item correta, para verificar se a resposta esta certa ou errada (true ou false)
  
        corretas.delete(item)//estou deletendo o item, se ele estiver certo, vamos colocar no if abaixo
        
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //Aqui vamos substituir o conteudo de mostrarTotal(do span dentro de #acertos)
      }
      
      quizItem.querySelector('dl').appendChild(dt); //Para colocar na tela, o quizItem, procura o dl e adiciona um filho que é o dt, isso colocará na tela todas opções de respostas na tela
    }
    
  quizItem.querySelector('dl dt').remove();// Aqui estamos removendo a primeira resposta, que seria "Resposta A"
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem); //serve para adicionar um filho dentro do quiz
  };