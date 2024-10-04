// Função para inverter a string
function inverterString(str) {
    let stringInvertida = '';
    
    // Percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// Entrada de exemplo
const entrada = "Exemplo de string";

// Inverter a string
const resultado = inverterString(entrada);

// Exibir o resultado
console.log("String original:", entrada);
console.log("String invertida:", resultado);
