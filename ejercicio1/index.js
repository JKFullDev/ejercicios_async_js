document.addEventListener('DOMContentLoaded', async () => {
    const select = document.getElementById('character-list');
    const image = document.querySelector('.character-image');

    try {
        // hacemos fecth para la info de los personajes
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const characters = await response.json();

        // rellenamos los elementos del select con nombres de los personajes
        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl;
            option.textContent = character.fullName;
            select.appendChild(option);
        });

        // ponemos imagen por defecto
        if (characters.length > 0) {
            image.src = characters[0].imageUrl;
            image.alt = characters[0].fullName;
        }

        // event listener para cuando cambiamos de opcion en select
        select.addEventListener('change', (event) => {
            const selectedImageUrl = event.target.value;
            image.src = selectedImageUrl;
            image.alt = select.options[select.selectedIndex].textContent;
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
        select.innerHTML = '<option>Error loading characters</option>';
        image.src = '';
        image.alt = 'Error';
    }
});