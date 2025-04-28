
## Diaporama

### Pré-Production

* Création de Trello pour la géstion.

* Réalisation des  algorithmes ce qui nous à permis de découper les tâches en plusieurs catégorie : 

    * Mise en place de la webcam (WebcamCapture.jsx)
    * Détection des objets avec le modèle COCO-SSD de TensorFlow.js
    * Gestion des entrées sauvegardées dans le localStorage (EntryManager.jsx)

* Réalisation de la maquette sur Figma

* Réalisation de la stucture HTML

*  Tailwind CSS


* Réalisation de l'UML pour la structure de notre code

* Mise en place de l'environnement de travail :
    
    * Installation de l'environnement technique sur Visual Studio Code
        * Installation de React + Vite en JS
        * Installation de Tensorflow et CocoSSD pour la reconnaissance d'objet
        * Installation de React-Webcam pour la gestion de la caméra
    
    * Mise en place de Git
        * Création du Repository 
        * Mise en place des différentes branches         

### Répartition du travail

* [Florian] : Intégration de la webcam et détection d'objets (TensorFlow.js + capture) et envoie dans le local storage
* [Hugo] : Récupération des captures via EntryManager et sauvegarde des capure sur l'ordinateur
* [Yasmina] : Mise en page générale et création des cartes d'affichage

Chacun a travaillé sur ça branche associé et nous avons tous mis commun à la fin grâce à l'outil merge de Git

## Fonctionnement de l’application (Démo Site)

* On arrive la page d'acceuil

* On active la caméra 

* On montre un premier objet en expliquant qu'on as fait le tris dans la détéction pour retirer le présentateur 

* On discard la détéction du premier objet 

* On montre un second objet pour montrer que la nouvelle détéction remplace l'ancienne 

* On sauvegarde le second object pour monter le lien fait entre la save et l'entry management

* On montre deux objets ensembles

* On sauvegarde les deux 

* On Sauvegarde dans notre ordinateur l'entry au milieu 

* On supprime l'entry au milieu

* On clear All

* On se déconnéctegit 
