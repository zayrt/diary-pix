# diary-pix

Ce projet a pour but de permettre aux utilisateurs l'accès à leur journal photo.
Pour ce faire une API a été développé from scratch au préalable en Ruby on Rails avec une base de données postgreSQL.

Liste des fonctionnalitées:

- Création de compte, requête POST avec transmission des params à l'API.
- Connexion, requête POST avec transmission des params à l'API et renvoi du token en cas de succès
puis stockage du token dans un service.
- Déconnexion, suppression du token.
- Accès au journal photo, requête GET, renvoi d'une liste d'image par l'API et affichage.

La fonctionnalité permettant d'ajouter une photo n'a pas été développer par manque de temps, néanmoins des images ont été
ajouter directement dans la base de donnée.


