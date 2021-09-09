
function verificarAprovacao(nota){
    var mensagem = '';
    if(nota > 7){
         mensagem = ' Aprovado!!!';
        }
    else if(nota <= 4){
        mensagem = ' Reprovado!!!';
    }
    else{
        mensagem = 'Precisa realizar VS';
     }
     return mensagem;
    }

    notaAluno = prompt('Digite sua nota');
   mensagem = verificarAprovacao(notaAluno);
   alert('Sua condição é: ' + mensagem);
