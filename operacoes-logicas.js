/*
   passou := falso
   escreval("Digite o nome do aluno(a):")
   leia(nome)
   escreval("Digite a nota 1 do aluno(a):")
   leia(nota1)
   escreval("Digite a nota 2 do aluno(a):")
   leia(nota2)
   media := (nota1 + nota2) /2

   se media >= 50 entao
   passsou := verdadeiro
   
   se (passou) && (media >= 50 || media <= 70)  entao
    escreval("Aprovado!", nome)
    senao

    escreval("Reprovado", nome)
    fimse
    */

   var nome, nota1, nota2, passou;

   passou = false
   nome = prompt("Digite o nome do aluno(a):")
   nota1 = prompt("Digite a nota 1 do aluno(a):")
   nota2 = prompt("Digite a nota 2 do aluno(a):")

   media = (parseInt(nota1) + parseInt(nota2)) /2

   if (media >= 50)
      passou = true ;
    
     if (passou && (media >= 70 && media <= 90))
        alert("Aprovado"  +  nome)
     
        else
     alert("Reprovado"  +  nome)