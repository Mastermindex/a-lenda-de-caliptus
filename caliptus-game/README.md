# A Lenda de Caliptus

RPG de batalha por turnos, adaptado do projeto PHP original para HTML, CSS e JavaScript estáticos.

## Executar localmente
Abra `index.html` no navegador. Para desenvolvimento, também pode usar a extensão Live Server do VS Code.

## Publicar na Vercel
O projeto não precisa de build nem de variáveis de ambiente. Importe o repositório GitHub na Vercel e mantenha a raiz do projeto como `./`.

## Arquivos
- `index.html`: telas do jogo.
- `style.css`: identidade visual responsiva.
- `game.js`: personagens, equipamentos, consumíveis, combate e progressão.
- `assets/`: sprites originais extraídos de `Project.zip`.

## Observações de adaptação
- Os valores e personagens foram baseados no Game_Design.odt. Quando o documento apresenta valores diferentes entre a ficha individual e o quadro-resumo, foi priorizada a ficha individual.
- O documento usa “Azure” na lista inicial de elementos, mas as tabelas e personagens utilizam “Karma”; o jogo segue “Karma”.
- A classe de Opineu e alguns detalhes de balanceamento não estavam preenchidos; foram adotadas regras simples para permitir uma partida completa.
