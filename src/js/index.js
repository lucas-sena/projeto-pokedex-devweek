/*  
Quando clicar no pokemon da listagem, vou esconder todos os cartões e mostrar na frente o cartão
do pokemon selecionado.  

pra isso vamos trabalhar com 2 elementos: 
1- listagem
2- cartão do pokemon

vamos precisar trabalhar com o evento clique feito pelo usuário na LISTAGEM

Passo:
- 
- ao clicar no cartão da listagem, pegar o id do pokemon para saber qual cartão mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

// precisamos criar 2 variáveis no JS para trabalhar com os elementos da tela
const listSelectionPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listSelectionPokemon.forEach(pokemon => {
    // vamos precisar trabalhar com o evento clique feito pelo usuário na LISTAGEM
    pokemon.addEventListener('click', () => {
    // remover classe aberto do cartão que está aberto
    
    })
})