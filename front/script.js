function searchCharacter() {
    const characterName = document.getElementById('characterName').value;
    fetch(`http://localhost:3000/characters/${characterName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Personaje no encontrado');
            }
            return response.json();
        })
        .then(data => {
            displayCharacter(data);
        })
        .catch(error => {
            console.error(error);
            document.getElementById('characterInfo').innerHTML = 'Personaje no encontrado';
        });
}

function displayCharacter(character) {
    const characterInfo = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
        <p>Género: ${character.gender}</p>
        <p>Origen: ${character.origin.name}</p>
    `;
    document.getElementById('characterInfo').innerHTML = characterInfo;
}
