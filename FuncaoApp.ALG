Algoritmo "FuncaoApp"

Var
   endereco: caracter
   escolhaMenu: inteiro
   
Inicio
      escolhaMenu <- 0
      procedimento printMenu()
      inicio
         escreval("Escolha o tipo de dispositivo: ")
         escreval("1. Celular")
         escreval("2. Componentes Eletronicos")
         escreval("3. Perifericos")
      fimprocedimento
   
      escreval("=== Seja bem vindo ao App de coleta de lixo eletronico! ===")
      escreva("Digite seu endereco: ")
      leia(endereco)

      enquanto (escolhaMenu <= 0) ou (escolhaMenu > 3) faca
          printMenu()
          leia(escolhaMenu)
          escolha(escolhaMenu)
             caso 1
                 escreval("Seu celular vai ser reciclado! Compareca a um ponto de coleta proximo de " + endereco + ".")
             caso 2
                  escreval("Seu componente eletronico vai ser reciclado! Compareca a um ponto de coleta proximo de " + endereco + ".")
             caso 3
                  escreval("Seu periferico vai ser reciclado! Compareca a um ponto de coleta proximo de " + endereco + ".")
             outrocaso
                  escreval("Opcao invalida!")
          fimescolha
      fimenquanto

Fimalgoritmo