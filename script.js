function contarVogais(frase) {
    const vogais = 'aeiouAEIOU';
    let count = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            count++;
        }
    }
    
    return count;
}

const frase = prompt("Digite uma frase: ");
const numeroDeVogais = contarVogais(frase);
console.log("Número de vogais na frase:", numeroDeVogais);