const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Ma Garderie",
  slogan: "Un cocon pour grandir heureux",
  adresse: "12 rue des Lilas, 75011 Paris",
  telephone: "+33 1 23 45 67 89",
  email: "contact@magarderie.fr",
  horaires: "Lundi - Vendredi : 7h30 - 18h30"
};

const services = [
  { id: 1, titre: "Accueil périscolaire", description: "Accueil des enfants de 3 à 10 ans avant et après l'école.", icone: "🏫" },
  { id: 2, titre: "Repas équilibrés", description: "Repas préparés sur place par notre cuisinière.", icone: "🍽️" },
  { id: 3, titre: "Ateliers créatifs", description: "Peinture, musique, théâtre et éveil artistique.", icone: "🎨" },
  { id: 4, titre: "Aide aux devoirs", description: "Accompagnement scolaire par des animateurs diplômés.", icone: "📚" }
];

const activites = [
  { id: 1, jour: "Lundi", nom: "Éveil musical", heure: "16h00" },
  { id: 2, jour: "Mardi", nom: "Atelier peinture", heure: "16h30" },
  { id: 3, jour: "Mercredi", nom: "Sortie au parc", heure: "10h00" },
  { id: 4, jour: "Jeudi", nom: "Contes et histoires", heure: "17h00" },
  { id: 5, jour: "Vendredi", nom: "Jeux collectifs", heure: "16h00" }
];

app.get('/api/garderie', (req, res) => res.json(garderie));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/activites', (req, res) => res.json(activites));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend Ma Garderie en écoute sur le port ${PORT}`);
});
