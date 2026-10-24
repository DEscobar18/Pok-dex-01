
const pokemons = document.querySelectorAll('.card')

function filtrarFogo() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        if (tipos.includes('Fogo')) {
            pokemon.style.display = ''
        } else {
            pokemon.style.display = 'none'
        }
    })
}

function filtrarAgua() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        if (tipos.includes('Água')) {
            pokemon.style.display = ''
        } else {
            pokemon.style.display = 'none'
        }
    })
}

function filtrarPlanta() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        if (tipos.includes('Planta')) {
            pokemon.style.display = ''
        } else {
            pokemon.style.display = 'none'
        }
    })
}

function filtrarEletrico() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        if (tipos.includes('Elétrico')) {
            pokemon.style.display = ''
        } else {
            pokemon.style.display = 'none'
        }
    })
}

function mostrarTodos() {
    pokemons.forEach(function(pokemon) {
        pokemon.style.display = ''
    })
}

document.getElementById('bfogo').addEventListener('click', filtrarFogo)
document.getElementById('bagua').addEventListener('click', filtrarAgua)
document.getElementById('bplanta').addEventListener('click', filtrarPlanta)
document.getElementById('beletrico').addEventListener('click', filtrarEletrico)
document.getElementById('btodos').addEventListener('click', mostrarTodos)


var pesquisa = document.getElementById('pesquisa')

console.log(pesquisa.value)