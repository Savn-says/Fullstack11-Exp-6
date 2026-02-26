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

SCREENSHOTS : 
<img width="764" height="948" alt="Screenshot 2026-02-25 152200" src="https://github.com/user-attachments/assets/90006495-16e3-4a97-97ce-8f2343a3c198" />
<img width="1737" height="929" alt="Screenshot 2026-02-25 152143" src="https://github.com/user-attachments/assets/9bca2571-e7f8-4470-9a06-5a8d55f1c1e6" />



---

### 2. FS_EXP6.2 – Separate React App (Nested)

This project is a React form validation exercise that demonstrates client-side validation using controlled components and React hooks. The form collects email and password inputs, validates them according to specific rules, and provides real-time inline error messages. Invalid input prevents form submission, and on successful validation, the form resets, allowing repeated testing. This makes it a practical example of form handling, state management, and validation logic in React.

**Features**

The form implements the following key features:
-Email Validation

-Must contain @

-Must end with .com, .in, or a country code like .uk

-Displays a clear error message if the input is empty or invalid

**Password Validation**

-Must start with a capital letter

-Must include at least one number

-Must contain at least one special character

-Minimum 5 characters

-Inline error messages appear if any rule is violated

**Controlled Components**

-All inputs are managed using React state

-Validation occurs on change and on blur

-Tracks touched fields to avoid showing errors before interaction

-Form Submission

-Prevents submission if validation fails

-Shows a success alert when all inputs are valid

-Resets all fields after successful submission

**Form Fields**

The form captures the following data:

**Email ID** – text input, required

**Password**– password input, required

Each field is validated immediately, and error messages appear dynamically, helping the user correct mistakes before submitting the form.

**Tech Stack**
React (Create React App)
JavaScript (Functional Components + Hooks)

The state is managed with useState, and reusable validation functions isValidEmail and validatePassword keep the code clean and maintainable.
SCREENSHOTS:
<img width="1891" height="948" alt="Screenshot 2026-02-25 151226" src="https://github.com/user-attachments/assets/cb338c5c-dc22-4385-8ce4-3c2cc3ed20a5" />
<img width="1893" height="916" alt="Screenshot 2026-02-25 151246" src="https://github.com/user-attachments/assets/50ad2d26-7207-493b-9782-270723af7122" />
<img width="1892" height="952" alt="Screenshot 2026-02-25 151302" src="https://github.com/user-attachments/assets/640f185f-7f45-409a-8733-2cd6f5d2893b" />
<img width="1821" height="936" alt="Screenshot 2026-02-25 151311" src="https://github.com/user-attachments/assets/4c8242cd-a468-4a3f-9414-157d03c71c9b" />


 
### Summary of Both Experiments

- **fs_exp6.1** focuses on:
  - React form handling with controlled components.
  - Managing multiple field types in a single state object.
  - Handling complex inputs like checkbox groups (`skills` array).
  - Simple validation and reset logic.

- **fs_exp6.2** focuses on:
   This project is a React form validation exercise that demonstrates client-side validation using controlled components and React hooks. The form collects email and password inputs, validates them according to specific rules, and provides real-time inline error messages. Invalid input prevents form submission, and on successful validation, the form resets, allowing repeated testing. This makes it a practical example of form handling, state management, and validation logic in React.
