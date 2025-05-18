# API de Prédiction de Congestion

Une API NestJS pour la gestion et la prédiction de la congestion routière.

## Description

Cette API fait partie d'un système de prédiction de congestion routière. Elle permet de :

- Gérer les utilisateurs et l'authentification
- Enregistrer et suivre des voyages
- Gérer des trajets avec leurs caractéristiques (météo, événements, etc.)
- Analyser les conditions de circulation

## Structure de la Base de Données

### User

- Gestion des comptes utilisateurs
- Informations personnelles (email, nom, prénom)
- Association avec les trajets et voyages

### Voyage

- Représente un itinéraire planifié
- Contient les points de départ et d'arrivée
- Lié à un utilisateur
- Peut contenir plusieurs trajets

### Trajet

- Détails spécifiques d'un segment de voyage
- Informations contextuelles :
  - Météo
  - Événements
  - Jour et heure
  - Données de circulation
- Données géographiques (latitude, longitude)
- Métriques (durée, distance, nombre de voitures)

## Configuration Technique

- Framework : NestJS
- Base de données : MongoDB avec Prisma ORM
- Port : 4000
- CORS activé

## Installation

```bash
npm install
```

## Lancement

```bash
npm run start
```

L'application sera accessible à l'adresse : http://localhost:4000
