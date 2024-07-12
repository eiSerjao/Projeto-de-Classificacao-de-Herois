let aventureiro = [
  ["Caião", 500],
  ["Serjão", 1001],
  ["Leleco", 2001],
  ["Yago", 5001],
  ["Henrique", 7001],
  ["Raonny", 8001],
  ["Natalia", 9001],
  ["João", 10001]
];

console.log("Olá aventureiros, prontos para uma nova aventura?")
console.log("Para começarmos, me dê o seus nomes e seu atual XP.");


for (let contador = 0; contador < aventureiro.length; contador++){
  let nome = aventureiro[contador][0];
  let xp = aventureiro[contador][1];
  let patente = "";

  if (xp < 1000){
    patente = "Ferro";
  } else if (xp >= 1001 && xp <= 2000){
    patente = "Bronze";
  } else if (xp >= 2001 && xp <= 5000){
    patente = "Prata";
  } else if (xp >= 5001 && xp <= 7000){
    patente = "Ouro";
  } else if (xp >= 7001 && xp <= 8000){
    patente = "Platina";
  } else if (xp >= 8001 && xp <= 9000){
    patente = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000){
    patente = "Imortal";
  } else {
    patente = "Radiante";
  }

  console.log("O Herói de nome " + nome + " está no nível " + xp + " e possui a patente " + patente);
}
