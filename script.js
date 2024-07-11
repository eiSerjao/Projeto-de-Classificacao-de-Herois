let nome = "Caião"
let nivelXP = 10500
let patente = ""

console.log("Olá aventureiro, pronto para uma nova aventura?")
console.log("Para começarmos, me dê o seu nome e qual o seu atual XP.")

if (nivelXP < 1000){
  patente = "Ferro";
} else if (nivelXP >= 1001 && nivelXP <= 2000){
  patente = "Bronze"
} else if (nivelXP >= 2001 && nivelXP <= 5000){
  patente = "Prata"
} else if (nivelXP >= 5001 && nivelXP <= 7000){
  patente = "Ouro"
} else if (nivelXP >= 7001 && nivelXP <= 8000){
  patente = "PLatina"
} else if (nivelXP >= 8001 && nivelXP <= 9000){
  patente = "Ascendente"
} else if (nivelXP >= 9001 && nivelXP <= 10000){
  patente = "Ascendente"
} else if (nivelXP >= 10001){
  patente = "Radiante"
} else {
  ("Numero Invalido de Xp")
}

console.log("Sua patente é do nivel " + patente)