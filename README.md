## Fullstack Experiment 6 – React Applications

This repository contains two related mini-projects built with **Create React App**, intended for practicing **front-end form handling**, **state management**, and **basic React project structure**.

- `fs_exp6.1` – detailed **form handling and validation** experiment
- `fs_exp6.2` – a separate **React app scaffold**, showing another independent CRA project inside the same repository

---

### 1. FS_EXP6.1 – Form Handling & Validation

**Goal**: Build a React form that collects user details, validates inputs, and shows the captured data in a structured way (using an alert with JSON for debugging/learning).

**Tech stack**

- React (via Create React App)
- JavaScript (function components + hooks)

**Main features**

- Controlled React form using `useState`.
- Single state object holding all fields (`firstName`, `lastName`, `dob`, `gender`, `skills`, `address`, `state`).
- Gender selection handled via radio buttons.
- Skills selected via a **checkbox group** and stored as an **array**.
- Form reset (Cancel button) that clears all fields.
- Simple validation:
  - Required fields cannot be empty.
  - Date of Birth cannot be a future date.

**Form fields**

- **First Name**: text input, required.
- **Last Name**: text input, required.
- **Date of Birth**: date input, required, max = today.
- **Gender**: radio buttons (`Male`, `Female`), required.
- **Skills**: checkbox list (multi-select, stored as an array):
  - Java
  - C++
  - HTML
  - Golang
  - Rust
- **Address**: textarea, required.
- **State**: select dropdown with **Indian states and union territories**.

**Component of interest**

- `src/Form.js`
  - Holds the `formData` state.
  - `handleChange` for generic input/select changes.
  - `handleGenderChange` for gender radio buttons.
  - `handleSkillChange` for adding/removing skills in an array.
  - `handleSubmit` to show the final data using `alert(JSON.stringify(formData, null, 2))`.
  - `handleCancel` to reset the form to its initial values.

#### How to run `fs_exp6.1`

From the repository root:

```bash
cd fs_exp6.1
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

To build for production:

```bash
npm run build
```

#### What to observe when running

- Try submitting with missing fields to see required field behavior.
- Change gender and skills and confirm the JSON output reflects your selections.
- Click **Cancel** and verify that all fields reset (skills checkboxes unchecked, text/textarea cleared, state reset).

---

### 2. FS_EXP6.2 – Separate React App (Nested)

**Goal**: Demonstrate a second independent React application living **inside a nested folder** in the same repository.

**Structure**

- `fs_exp6.2/` – root folder for Experiment 6.2 (contains this app’s README and the inner app folder).
- `fs_exp6.2/fs_exp6.2/` – the actual React application:
  - Has its own `package.json`
  - Has its own `node_modules`, `public`, `src`, and a default CRA `README.md`

**Tech stack**

- React (Create React App)
- JavaScript

This inner app follows the **standard CRA structure** and can be customized for any additional experiment you want (routing, API calls, components practice, etc.).

#### How to run `fs_exp6.2`

From the repository root:

```bash
cd fs_exp6.2/fs_exp6.2
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

To build for production:

```bash
npm run build
```

---

### Summary of Both Experiments

- **fs_exp6.1** focuses on:
  - React form handling with controlled components.
  - Managing multiple field types in a single state object.
  - Handling complex inputs like checkbox groups (`skills` array).
  - Simple validation and reset logic.

- **fs_exp6.2** focuses on:
  - Understanding and working with a second, independent CRA project.
  - Practicing running and managing multiple React apps inside one repo.

