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
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    
    //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value
    
    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

    //remover a classe ativo que marca o pokémon selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')
    
    //adicionar a classe ativo no item da lista selecionado 
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})