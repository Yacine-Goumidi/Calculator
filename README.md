# Calculatrice Portfolio

![Calculatrice Preview](/Assets/CalculatorScreenshot.png)

## 🚀 Présentation

Ce projet est une **calculatrice web moderne**, développée dans le cadre d’un portfolio front-end.  
Il a été conçu pour démontrer **la maîtrise du HTML, CSS et JavaScript moderne**, ainsi que des bonnes pratiques de développement web.

L’objectif est de fournir une **expérience utilisateur fluide**, un **design moderne et responsive**, et un **code propre et maintenable**, tout en restant simple et fonctionnel.

---

## 🎯 Objectifs du projet

- Développer une **interface utilisateur élégante et responsive**.
- Implémenter une **logique de calcul fiable** avec un état centralisé (`state`).
- Utiliser des **bonnes pratiques JS modernes** (event delegation, `data-attributes`, fonctions modulaires).
- Garantir une **séparation claire HTML / CSS / JS**.
- Produire un projet **portfolio-ready**, lisible et défendable à l’oral.

---

## 🛠 Technologies utilisées

- **HTML5** – structure sémantique et accessible.
- **CSS3** – design moderne, variables CSS, responsive layout avec Grid et Media Queries.
- **JavaScript ES6+** – logique de calcul, event delegation, gestion de l’état.
- **Fonts Google** – `Inter` et `JetBrains Mono` pour lisibilité et style moderne.

---

## ⚙ Fonctionnalités

- Saisie des **chiffres et opérateurs** (`+`, `−`, `×`, `÷`).
- Gestion du **0 sur deux colonnes** et du bouton **=** occupant toute la ligne.
- **Effet visuel interactif** sur les boutons (hover, active, focus).
- **Affichage clair et lisible** avec police monospace.
- **Responsive design** pour smartphone, tablette et desktop.
- Gestion des **erreurs de calcul** avec message `Error`.

---

## 💡 Problématiques rencontrées

1. **Gestion de l’état et logique de calcul**
   - Initialement `eval()` et concaténation de chaînes.
   - Solution : état centralisé (`state`) + fonction `sanitize()`.

2. **Séparation HTML / JS**
   - Problème : `onclick` inline non maintenable.
   - Solution : event delegation + `data-*` attributes.

3. **UI / Alignement**
   - Chiffres et boutons 0 / = mal positionnés.
   - Solution : CSS Grid et `grid-column: span ...`.

4. **UX et feedback**
   - Symboles confus et absence d’erreur visible.
   - Solution : monospace + message d’erreur.

5. **Responsive**
   - Design initial non adapté aux mobiles.
   - Solution : Media Queries et ajustement tailles boutons/display.

6. **Sécurité JS**
   - Utilisation de `eval()` risquée.
   - Solution : `Function()` avec `sanitize()` pour les opérateurs.

---

## 📐 Structure du projet
calculatrice-portfolio/
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ assets/
    └─ screenshot.png

---

## 🎨 UI / UX

- **Couleurs :**
  - Chiffres : léger verre flou (`rgba`)  
  - Opérateurs : gradient orange  
  - Clear : gradient rouge  
  - Equal : gradient turquoise  
- **Police monospace** pour lisibilité des chiffres et opérations.
- **Boutons interactifs** : hover, active, focus.

---

## 📱 Responsive

- Smartphones : ajustement taille boutons et display.
- Tablettes : légère augmentation des boutons.
- Desktop : layout original maintenu.

---

## 🔧 Installation et utilisation

1. **Cloner le projet :**
```bash
git clone https://github.com/Yacine-Goumidi/Calculator.git
