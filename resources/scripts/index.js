// Função para buscar músicas na API do iTunes
async function searchSongsItunes(query) {
    const url = `https://itunes.apple.com/search?term=${query}&entity=song&limit=10`; // Limite de 10 resultados para a busca
    const response = await fetch(url);
    const data = await response.json();
    return data.results; // Retorna os resultados
}

// Função para exibir resultados na página
function displayResults(results) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Limpa a lista de resultados anteriores

    if (results.length > 0) {
        results.forEach(song => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `<strong>${song.trackName}</strong> - ${song.artistName} (${song.collectionName})`;
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.innerHTML = '<li class="list-group-item">Nenhum resultado encontrado.</li>';
    }
}

// Função para lidar com a pesquisa ao clicar no botão "Pesquisa Google"
document.getElementById('search-google').addEventListener('click', async function() {
    const query = document.querySelector('.google-input').value.trim();
    if (query.length > 0) {
        const results = await searchSongsItunes(query);
        displayResults(results);
    }
});

// Função para lidar com a pesquisa ao clicar no botão "Estou com sorte"
document.getElementById('lucky-search').addEventListener('click', async function() {
    const query = document.querySelector('.google-input').value.trim();
    if (query.length > 0) {
        const results = await searchSongsItunes(query);
        displayResults(results);
    }
});
