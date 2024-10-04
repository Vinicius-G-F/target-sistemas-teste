function fibonacciChecker(number){
    // inicia a lista com os dois primeiros numeros da sequencia de fibonacci
    fibonacciList = [0,1];

    // caso a variável "number" seja encontrada dentro do while essa variável aqui será trocada para true
    hasNumberInFibonacciList = false

    // este while ficou responsável por montar a sequência de fibonacci e verificar se o número da sequência fibonacci
    // está na lista, a condição de parada ficou meio estranha mas basicamente eu to pegando o penúltimo numéro da lista e 
    // subtraindo 1, dessa forma caso o numero escolido seja "0" ele entrara no while pois o penultimo número da lista no
    // seu estado inicial é 0 e substraindo 1 fica -1, sendo assim ele entra no while e faz a verificação se o 0 está 
    // presente, pois 0 é maior que -1, caso contrário a verificação teria de ser feita fora do while também.
    while(number > (fibonacciList[fibonacciList.length - 2] - 1)){
        if(fibonacciList.some((num)=> num === number)){
            hasNumberInFibonacciList = true
            break;
        }
        fibonacciList.push(fibonacciList[fibonacciList.length - 1] + fibonacciList[fibonacciList.length -2]);
    }
    if(hasNumberInFibonacciList){
        console.log(`O número ${number} pertence a sequência de fibonacci`);
    } else {
        console.log(`O número ${number} NÃO pertence a sequência de fibonacci`);
    }
}