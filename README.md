# Todo List App avec React, Redux et Tailwind CSS

Bienvenue dans ce projet de **Todo List App** conçu pour démontrer mes compétences en développement frontend avec **React**, **Redux**, et **Tailwind CSS**. Ce projet met en avant la gestion d'état avec Redux, l'utilisation de composants réactifs et un design simple mais efficace grâce à Tailwind CSS.

---

## Fonctionnalités

### Fonctionnalités de base :
- **Ajouter une tâche** : Ajoutez une tâche avec un texte descriptif.
- **Marquer comme terminée** : Indiquez qu'une tâche est terminée.
- **Supprimer une tâche** : Supprimez une tâche de la liste.
- **Modifier une tâche** : Mettez à jour le texte d'une tâche existante.

### Gestion de l'état :
- L'état des tâches est géré globalement avec **Redux**.
- Les actions suivantes sont prises en charge : 
  - `ADD_TODO`
  - `REMOVE_TODO`
  - `TOGGLE_TODO`
  - `EDIT_TODO`

### Interface utilisateur :
- **Responsive** et design propre grâce à **Tailwind CSS**.
- Boutons interactifs avec des effets visuels au survol (hover).
- **Modale** pour la modification des tâches.

---

## Technologies utilisées

- **React** : Pour la construction de l'interface utilisateur.
- **Redux** : Pour la gestion centralisée de l'état de l'application.
- **Tailwind CSS** : Pour le design et la mise en page.
- **Vite** : Pour un environnement de développement rapide et performant.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :
- **Node.js** (version 14 ou supérieure)
- **npm** ou **yarn**

---

## Installation et lancement

1. Clonez le projet :
   ```bash
   git clone https://github.com/votre-repo/todo-list-app.git
   cd todo-list-app
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le projet en mode développement :
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse suivante :
   ```
   http://localhost:3000
   ```

---

## Aperçu du code

### Exemple de reducer :
```javascript
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
};
```

### Exemple d'interface utilisateur :
```jsx
<button
  className="bg-green-400 hover:bg-green-500 text-white p-2 rounded"
  onClick={() => handleToggleTodo(todo.id)}
>
  Terminé
</button>
```

---

## Points forts du projet

- **Architecture claire** : Le projet est organisé pour être extensible et facile à maintenir.
- **Gestion d'état robuste** : Utilisation des actions et reducers Redux pour des opérations prévisibles.
- **Design moderne** : Utilisation de Tailwind CSS pour une interface soignée et responsive.
- **Prêt pour des améliorations** : Le projet peut être facilement étendu avec des fonctionnalités comme la persistance des données via une API ou un backend.

---

## Améliorations possibles

- Intégration avec une base de données (ex. : Firebase, Supabase).
- Ajout de tests unitaires avec **Jest**.
- Ajout d'un système d'authentification pour gérer les utilisateurs.

---

## Auteur

Créé par **Djibril SAMASSA**  
[Votre Portfolio](https://votre-portfolio.com) | [LinkedIn](https://linkedin.com/in/votreprofil) | [GitHub](https://github.com/votreprofil](https://github.com/DjibrilKB)

---

Merci de votre intérêt pour ce projet ! 🎉  
N'hésitez pas à me contacter pour toute question ou opportunité. 😊
