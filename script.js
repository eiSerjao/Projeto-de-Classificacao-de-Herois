let aventureiro = [
  ["Caião", 1000]
];

console.log("Olá aventureiro, pronto para uma nova aventura?")
console.log("Para começarmos, me dê o seu nome e qual o seu atual XP.")

if (aventureiro[0][1] < 1000){
  patente = "Ferro";
} else if (aventureiro[0][1] >= 1001 && aventureiro[0][1] <= 2000){
  patente = "Bronze"
} else if (aventureiro[0][1] >= 2001 && aventureiro[0][1] <= 5000){
  patente = "Prata"
} else if (aventureiro[0][1] >= 5001 && aventureiro[0][1] <= 7000){
  patente = "Ouro"
} else if (aventureiro[0][1] >= 7001 && aventureiro[0][1] <= 8000){
  patente = "PLatina"
} else if (aventureiro[0][1] >= 8001 && aventureiro[0][1] <= 9000){
  patente = "Ascendente"
} else if (aventureiro[0][1] >= 9001 && aventureiro[0][1] <= 10000){
  patente = "Ascendente"
} else if (aventureiro[0][1] >= 10001){
  patente = "Radiante"
} else {
  patente = "Radiante"
} 

console.log("Sua patente é do nivel " + patente)