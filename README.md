# Classificador de Nível de Herói usando Lógica de Programação

## Descrição do Projeto

Inicialmente, achei que seria fácil implementar o projeto, mas enfrentei dificuldades ao usar matrizes e laços de repetição. Após dedicar tempo para testar e entender as funcionalidades necessárias, consegui superar os desafios e concluir o projeto com sucesso. O código principal está no arquivo chamado `script.js`.

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Instruções de Uso

### Pré-requisitos

- Node.js instalado

### Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/eiSerjao/Estudos-De-Logica-de-Progamacao.git
   ```
## Navegue até o diretório do projeto:
   ```bash
   cd Estudos-De-Logica-da-Progamacao
   ```
## Instale as dependências:
   ```bash
   npm install
   ```
## Execute o programa:
   ```bash
   node script.js
   ```
### Exemplos
```bash
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

for (let contador = 0; contador < aventureiro.length; contador++) {
  let nome = aventureiro[contador][0];
  let xp = aventureiro[contador][1];
  let patente = "";

  if (xp < 1000) {
    patente = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    patente = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    patente = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    patente = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    patente = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    patente = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    patente = "Imortal";
  } else {
    patente = "Radiante";
  }

  console.log("O Herói de nome " + nome + " está no nível " + xp + " e possui a patente " + patente);
}
```

### Contribuição
Se você deseja contribuir com este projeto, siga estas etapas:
1. Fork o projeto
2. Crie uma branch para sua feature
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -am 'Adicionar nova feature'
   ```bash
4. Push para a branch:
   ```bash
   git push origin feature/nova-feature
   ```
5. Crie um novo Pull Request

### Licença
Este projeto está licenciado sob a Licença MIT.

### Contato ou Suporte
Para dúvidas ou sugestões, entre em contato com paulosergiobarrosdesouza@gmail.com.

