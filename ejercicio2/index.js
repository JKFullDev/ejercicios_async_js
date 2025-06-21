const mostrarPokemon = async () => {

    const image = document.querySelector('.random-image');
    let numberRandom = Math.floor(Math.random() * 151) + 1;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberRandom}`);
        const pokemon = await response.json();

        // ponemos imagen por defecto (en el json es la nombrada front_default)
        image.src = pokemon.sprites.front_default;
        image.alt = pokemon.name;

    } catch (error) {
        console.error('Error fetching characters:', error);
        image.src = '';
        image.alt = 'Error';
    }


};

window.addEventListener("DOMContentLoaded", () => {
    mostrarPokemon();
});