// Função principal
function calcularFaturamento(faturamentoMensal) {
    // Filtrar apenas dias com faturamento maior que zero
    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
    
    // Verificar se há dias com faturamento
    if (diasComFaturamento.length === 0) {
        return "Não há dias com faturamento.";
    }

    // Calcular o menor e o maior valor de faturamento
    const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Calcular a média mensal de faturamento
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Contar dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    // Retornar os resultados
    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Exemplo de uso com os dados fornecidos em JSON
fetch('http://192.168.0.7:8080/faturamento.json')
    .then(response => response.json())
    .then(faturamentoMensal => {
        const resultado = calcularFaturamento(faturamentoMensal);
        console.log("Menor valor de faturamento:", resultado.menorValor);
        console.log("Maior valor de faturamento:", resultado.maiorValor);
        console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
