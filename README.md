# IPL_social

**Nom :** KHADRI
**Prénom :** YOUNESS
**Email :** youness.khadri@student.vinci.be
**URL du projet :** https://github.com/youness-khadri-vinci/IPL_social.git


## Explication du code
Ce projet implémente une fonction de validation d'adresses e-mail en **TypeScript** en respectant une approche de **Test Driven Development (TDD)**. La fonction analyse la structure de la chaîne de caractères sans utiliser de fonctions préconçues ou d'expressions régulières (Regex), conformément aux consignes. 

La fonction vérifie quatre critères fondamentaux :
1.  **Caractère @** : Il doit y avoir exactement un seul caractère "@".
2.  **Nom de domaine** : Il doit contenir au moins un point, et celui-ci ne peut pas être le dernier caractère.
3.  **Espaces** : La chaîne ne peut contenir aucun espace.
4.  **Contenu** : Il doit y avoir du texte avant et après le symbole "@".

---

## Pipeline CI/CD (GitHub Actions)
Le projet utilise **GitHub Actions** pour l'intégration continue. À chaque "push", un pipeline automatique est déclenché sur un environnement Ubuntu pour :
* Installer les dépendances avec `npm install`.
* Exécuter la suite de tests avec Jest.