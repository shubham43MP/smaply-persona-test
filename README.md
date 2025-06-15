# 🚀 Smaply Persona Test – Crafted with Precision

Welcome to the implementation of the **Smaply Test Task** – a thoughtfully architected React + Vite application designed to manage personas via a sleek UI. The goal was to focus on **modularity**, **performance**, and **developer experience**, while staying as close as possible to the original design intent.

---

## 🧱 Development Setup

### 🛠️ Prerequisites

Ensure the following tools are installed and aligned with these versions:

* **Node.js**: `v20.15.1`
* **npm**: `v10.7.0`
* **Yarn**: `v1.22.19`
* OS used: **Ubuntu 20.04**

> 💡 You can use either `npm` or `yarn` based on your preference.

---

### 📦 Getting Started

1. **Clone the Repository**

```bash
git clone git@github.com:shubham43MP/smaply-persona-test.git
```

2. **Navigate to the Project Directory**

```bash
cd smaply-persona-test
```

3. **Install Dependencies**

```bash
npm install
# OR
yarn install
```

4. **Start the Development Server**

```bash
npm run dev
# OR
yarn run dev
```

The app will be running at `http://localhost:5173`

---

## 🎨 Screenshots

### 🔹 Main Page with Modal

![Main Page with Modal](/public/github-asset/smaply-ui-outlook.png?raw=true)

### 🔹 Persona Editor Page

![Persona page Editor](/public/github-asset/persona-editor.png?raw=true)

---

## 💡 Development Notes & Design Patterns

* 🧩 **Component Architecture**:

  * `atoms/` — atomic UI elements (e.g. button, icon, input)
  * `compounds/` — complex, reusable component compositions

* 🧠 **Code Modularity**:

  * Modular approach using `index.ts` to manage cleaner imports
  * Logical separation of concerns between logic and JSX

* ⚙️ **Performance Optimizations**:

  * Debounced input handling
  * Controlled re-renders through state isolation

* 🧠 **Dynamic Data Handling**:

  * Smart use of structured state to manage cards across columns
  * Easily extensible for future enhancements

* ✍️ **Rich Text Editor**:

  * Integrated `react-quill` for persona content editing
  * Custom logic for saving and handling RTE state

* 🎨 **Tailwind Setup Bottleneck**:

  * Faced challenges with dynamic styling
  * Resolved using Tailwind config exploration and community threads ([reference](https://stackoverflow.com/questions/72481680/tailwinds-background-color-is-not-being-applied-when-added-dynamically))

---

## 🚀 Future Enhancements (Given More Time)

* 🌍 **Real-Time Collaboration**:

  * Integration of `Yjs` for multiplayer collaboration (currently not added due to time constraints)

* 📱 **Responsive Refinement**:

  * Finer tuning of UI responsiveness for mobile and tablet

* 🧭 **Left Menubar**:

  * Not implemented as no clear reference was provided in the task brief

* 🎨 **RTE Enhancements**:

  * More advanced formatting options and style controls

* 🧹 **Codebase Polish**:

  * While already clean and structured, there’s always room for micro-optimizations

---

## ✨ Final Words

This project is a glimpse into how I approach real-world tasks: with **clarity, focus, scalability**, and **pixel-level care**. If you're reviewing this – thanks for your time, and I hope the code speaks louder than words. 🚀
