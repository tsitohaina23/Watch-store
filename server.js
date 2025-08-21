const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour parser le corps des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Données des produits
const products = [
  {
    id: 1,
    name: "Chronographe Élégance",
    price: 499.99,
    image: "/images/watch1.jpg",
    description: "Une montre exceptionnelle avec chronographe et design raffiné."
  },
  {
    id: 2,
    name: "Automatique Prestige",
    price: 799.99,
    image: "/images/watch2.jpg",
    description: "Mouvement automatique suisse, cadran nacre et bracelet cuir."
  },
  {
    id: 3,
    name: "Sport Luxe",
    price: 649.99,
    image: "/images/watch3.jpg",
    description: "Robuste et élégante, parfaite pour les occasions sportives et formelles."
  },
  {
    id: 4,
    name: "Minimaliste Classique",
    price: 349.99,
    image: "/images/watch4.jpg",
    description: "Design épuré et intemporel pour un style toujours actuel."
  }
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products: products });
});

// Route pour les favicon et autres requêtes communes
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});