// Experiment-2: Client-Side Form Validation
// Procedure: 1) Create form inputs  2) Define validation conditions
//            3) Display error messages  4) Allow submission only for valid data

import React, { useState } from 'react';

// Email: must contain @ and end with .com or .in or country code (e.g. .uk, .au)
const isValidEmail = (email) => {
  if (!email || !email.includes('@')) return false;
  const tldPart = email.split('@')[1];
  if (!tldPart) return false;
  // Must end with .com, .in, or .<country code (2+ letters)>
  return /\.(com|in|[a-z]{2,})$/i.test(tldPart);
};

// Password: 1) Start with capital  2) At least one number  3) At least one special char  4) At least 5 characters
const validatePassword = (password) => {
  const errors = [];
  if (password.length < 5) errors.push('At least 5 characters');
  if (!/^[A-Z]/.test(password)) errors.push('Start with a capital letter');
  if (!/[0-9]/.test(password)) errors.push('At least one number');
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) errors.push('At least one special character');
  return errors;
};

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (touched.email) setEmailError(getEmailError(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (touched.password) setPasswordError(getPasswordError(e.target.value));
  };

  const getEmailError = (value) => {
    if (!value.trim()) return 'Email is required.';
    if (!isValidEmail(value)) return 'Email must contain @ and end with .com, .in, or a country code (e.g. .uk).';
    return '';
  };

  const getPasswordError = (value) => {
    if (!value) return 'Password is required.';
    const errs = validatePassword(value);
    return errs.length ? errs.join('. ') : '';
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    if (field === 'email') setEmailError(getEmailError(email));
    if (field === 'password') setPasswordError(getPasswordError(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    const eErr = getEmailError(email);
    const pErr = getPasswordError(password);
    setEmailError(eErr);
    setPasswordError(pErr);

    if (!eErr && !pErr) {
      alert('Form submitted successfully!');
      setEmail('');
      setPassword('');
      setTouched({ email: false, password: false });
    }
  };

  return (
    <form className="validation-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="email">Email ID</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur('email')}
          placeholder="e.g. name@domain.com or name@domain.in"
          autoComplete="email"
          className={emailError ? 'input-error' : ''}
        />
        {emailError && <span className="error-msg">{emailError}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handleBlur('password')}
          placeholder="Starts with capital, 5+ chars, number, special char"
          autoComplete="current-password"
          className={passwordError ? 'input-error' : ''}
        />
        {passwordError && <span className="error-msg">{passwordError}</span>}
      </div>

      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
