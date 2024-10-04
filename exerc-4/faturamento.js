// Dados de faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamento) {
    // Calcular o faturamento total
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Calcular o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }

    return percentuais;
}

// Executar o cálculo
const percentuais = calcularPercentuais(faturamento);

// Exibir os resultados
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
