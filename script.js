// Charger les données JSON
const animeData = [
    {
        "title": "Blue Lock",
        "image": "blue_lock.jpg",
        "link": "blue_lock.html"
    },
    {
        "title": "Jujutsu kaisen (season2)",
        "image": "JJK.jpg",
        "link": "jujutsu.html"
    },
    {
        "title": "Blue Lock (season 2)",
        "image": "blue_lock.jpg",
        "link": "BluelockS2.html"
    },
    {
        "title": "Captain Tsubasa",
        "image": "captain_tsubasa.jpg",
        "link": "captain_tsubasa.html"
    }
];

// Fonction pour afficher les animes
function displayAnimes(animes) {
    const animeContainer = document.getElementById('animeList');
    animeContainer.innerHTML = ''; // Réinitialiser la liste des animes

    animes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <a href="${anime.link}">Regarder</a>
        `;
        animeContainer.appendChild(animeCard);
    });
}

// Fonction de recherche
function searchAnime() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredAnimes = animeData.filter(anime => anime.title.toLowerCase().includes(searchInput));
    displayAnimes(filteredAnimes);
}

// Afficher tous les animes au chargement de la page
window.onload = () => {
    displayAnimes(animeData);
};
