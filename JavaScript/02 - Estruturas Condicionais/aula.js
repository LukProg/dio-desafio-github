
const numero = 50;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log("Número inválido")
} else if (numeroDivisivelPor5) {
    console.log("O número " + numero + " é divisivel por 5")
} else {
    console.log("O número " + numero + " não é divisivel por 5")
}