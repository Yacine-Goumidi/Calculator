# Calculator

![Calculator Preview](/Assets/CalculatorScreenshot.png)

## 🚀 Overview

This project is a **modern web calculator**, developed as part of a front-end portfolio.  
It was designed to showcase **proficiency in modern HTML, CSS, and JavaScript**, as well as **best practices in web development**.

The goal is to provide a **smooth user experience**, a **modern and responsive design**, and **clean, maintainable code**, while keeping the application simple and functional.

---

## 🎯 Project Goals

- Develop an **elegant and responsive user interface**.  
- Implement a **reliable calculation logic** with a centralized state (`state`).  
- Apply **modern JS best practices** (event delegation, `data-attributes`, modular functions).  
- Ensure a **clear separation of HTML, CSS, and JS**.  
- Deliver a **portfolio-ready project**, readable and presentable.

---

## 🛠 Technologies Used

- **HTML5** – semantic and accessible structure.  
- **CSS3** – modern design, CSS variables, responsive layout with Grid and Media Queries.  
- **JavaScript ES6+** – calculation logic, event delegation, state management.  
- **Google Fonts** – `Inter` and `JetBrains Mono` for readability and modern style.

---

## ⚙ Features

- Input of **numbers and operators** (`+`, `−`, `×`, `÷`).  
- Management of **0 spanning two columns** and the **= button taking the entire bottom row**.  
- **Interactive button effects** (hover, active, focus).  
- **Clear and readable display** with monospace font.  
- **Responsive design** for smartphones, tablets, and desktops.  
- Error handling with an **“Error” message** for invalid calculations.

---

## 💡 Challenges Encountered

1. **State and calculation logic**  
   - Initially used `eval()` and string concatenation.  
   - Solution: centralized state (`state`) + `sanitize()` function.

2. **HTML / JS separation**  
   - Issue: inline `onclick` attributes were not maintainable.  
   - Solution: event delegation + `data-*` attributes.

3. **UI / Alignment**  
   - Numbers, 0, and = buttons were misaligned.  
   - Solution: CSS Grid and `grid-column: span ...`.

4. **UX and feedback**  
   - Confusing symbols and no visible error feedback.  
   - Solution: monospace font + error message.

5. **Responsive design**  
   - Initial layout not mobile-friendly.  
   - Solution: Media Queries and adjusted button/display sizes.

6. **JS security**  
   - Using `eval()` was risky.  
   - Solution: `Function()` with `sanitize()` to handle operators safely.

---

## 🎨 UI / UX Design

- **Colors:**  
  - Numbers: light glass effect (`rgba`)  
  - Operators: orange gradient  
  - Clear: red gradient  
  - Equal: turquoise gradient  
- **Monospace font** for clear number and operator display.  
- **Interactive buttons**: hover, active, focus.

---

## 📱 Responsive

- **Smartphones:** button and display sizes adjusted.  
- **Tablets:** slightly larger buttons.  
- **Desktop:** original layout preserved.

---

## 🔧 Installation & Usage

1. **Clone the repository:**
```bash
git clone https://github.com/Yacine-Goumidi/Calculator.git
