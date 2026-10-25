
const pokemons = document.querySelectorAll('.card')

var favoritos = JSON.parse(localStorage.getItem('favoritos')) || []

function filtrarFogo() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        pokemon.style.display = tipos.includes('Fogo') ? '' : 'none'
    })
}

function filtrarAgua() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        pokemon.style.display = tipos.includes('Água') ? '' : 'none'
    })
}

function filtrarPlanta() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        pokemon.style.display = tipos.includes('Planta') ? '' : 'none'
    })
}

function filtrarEletrico() {
    pokemons.forEach(function(pokemon) {
        const tipos = pokemon.querySelector('.tipos').textContent

        pokemon.style.display = tipos.includes('Elétrico') ? '' : 'none'
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

function atualizarFavoritos() {
    pokemons.forEach(function(pokemon) {
        const nome = pokemon.querySelector('h2').textContent.trim()
        const botao = pokemon.querySelector('.favoritar')

        if (favoritos.includes(nome)) {
            botao.textContent = '♥'
            botao.classList.add('ativo')
        } else {
            botao.textContent = '♡'
            botao.classList.remove('ativo')
        }
    })
}

function alternarFavorito(pokemon) {
    const nome = pokemon.querySelector('h2').textContent.trim()

    if (favoritos.includes(nome)) {
        favoritos = favoritos.filter(function(favorito) {
            return favorito !== nome
        })
    } else {
        favoritos.push(nome)
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    atualizarFavoritos()
}

pokemons.forEach(function(pokemon) {
    const botao = document.createElement('button')

    botao.className = 'favoritar'
    botao.type = 'button'
    botao.setAttribute('aria-label', 'Adicionar aos favoritos')

    botao.addEventListener('click', function() {
        alternarFavorito(pokemon)
    })

    pokemon.appendChild(botao)
})

function mostrarFavoritos() {
    pokemons.forEach(function(pokemon) {
        const nome = pokemon.querySelector('h2').textContent.trim()

        pokemon.style.display = favoritos.includes(nome) ? '' : 'none'
    })
}

document.getElementById('bFavoritos').addEventListener('click', mostrarFavoritos)

const pesquisa = document.getElementById('pesquisa')

pesquisa.addEventListener('input', function() {
    const nomePesquisado = pesquisa.value.toLowerCase().trim()

    pokemons.forEach(function(pokemon) {
        const nome = pokemon.querySelector('h2').textContent.toLowerCase()

        pokemon.style.display = nome.includes(nomePesquisado) ? '' : 'none'
    })
})

atualizarFavoritos()
