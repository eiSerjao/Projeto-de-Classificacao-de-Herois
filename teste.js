let aventureiro = [
  ["Caião", 500]
  ["Serjão", 1001]
  ["Leleco", 2001]
  ["Yago", 5001]
  ["Henrique", 7001]
  ["Raonny", 8001]
  ["Natalia", 9001]
  ["João", 10001]
];

console.log("Olá aventureiros, prontos para uma nova aventura?")
console.log("Para começarmos, me dê o seus nomes e seu atual XP.")

for (contador = 0; contador < aventureiro.length; contador++){
  let nome = aventureiro[contador][0];
  let xp = aventureiro[contador][1];
  let patente = "";
}

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
  patente = "Imortal"
} else {
  patente = "Radiante"
} 

console.log("O Herói de nome " + nome + " está no nível " + xp)