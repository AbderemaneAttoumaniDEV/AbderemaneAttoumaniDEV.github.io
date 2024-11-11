const mapContainer = document.getElementById('map');

// Vérifiez si l'élément existe et s'il n'a pas déjà la classe "leaflet-container"
if (mapContainer && !mapContainer.classList.contains('leaflet-container')) {
    // Initialisation de la carte
    const map = L.map('map').setView([47.2186, -1.5536], 6.4); // Coordonnées de Nantes

    // Configuration de la couche de tuiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Ajouter un marqueur pour Nantes
    L.marker([47.2186, -1.5536]).addTo(map)
        .bindPopup('Nantes')
        .openPopup();

    // Ajouter un marqueur pour Meaux
    L.marker([48.9583, 2.8774]).addTo(map)
        .bindPopup('Meaux')
        .openPopup();

    // Ajouter un marqueur pour Paris
    L.marker([48.8533, 2.3691]).addTo(map)
        .bindPopup('Paris')
        .openPopup();

} else {
    console.error("Le conteneur de carte est introuvable ou la carte est déjà chargée.");
}
