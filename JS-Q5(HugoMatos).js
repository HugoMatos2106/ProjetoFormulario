function identificaMaiorElemento(elementos){

    var maiorDeTodos;
    for(var i=0 ; i<elementos.length ; i++){
        valorAtual = elementos[i];
        console.log('Valor atual: '+valorAtual, 'maior valor: ' +maiorDeTodos)
        
        if(maiorDeTodos == null || maiorDeTodos < valorAtual){
            maiorDeTodos = valorAtual;
            posicaoMaiorDeTodos = i;

        }
        console.log(maiorDeTodos)
    }
    console.log('Maior elemento é: '+ maiorDeTodos + ' está na posição: '+ posicaoMaiorDeTodos);
}