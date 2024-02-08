const perguntas = [
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console()",
      ],
      correta: 1 // "log()"
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1 // "let"
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1 // "==="
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        ".pop()",
        ".shift()",
        ".slice()",
      ],
      correta: 0 // ".pop()"
    },
    {
      pergunta: "Qual é o tipo de dado que retorna verdadeiro ou falso em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Number",
      ],
      correta: 1 // "Boolean"
    },
    {
      pergunta: "Qual é o símbolo de atribuição em JavaScript?",
      respostas: [
        ":",
        "=",
        "==",
      ],
      correta: 1 // "="
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        "execute()",
        "callFunction()",
        "invokeFunction()",
      ],
      correta: 2 // "invokeFunction()"
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário",
      ],
      correta: 0 // "// Este é um comentário"
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "convertToInt()",
        "stringToNumber()",
      ],
      correta: 0 // "parseInt()"
    },
    {
      pergunta: "O que o método 'push()' faz em JavaScript?",
      respostas: [
        "Adiciona um elemento no início de um array",
        "Adiciona um elemento no final de um array",
        "Remove o último elemento de um array",
      ],
      correta: 1 // "Adiciona um elemento no final de um array"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }