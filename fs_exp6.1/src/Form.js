import React, { useState } from 'react';

const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: '',
  });

  // Get today's date in the required format (yyyy-mm-dd)
  const today = new Date().toISOString().split('T')[0];

  // Handle change for all form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const skills = new Set(prevData.skills);
      if (checked) {
        skills.add(value);
      } else {
        skills.delete(value);
      }
      return {
        ...prevData,
        skills: Array.from(skills),
      };
    });
  };

  // Handle gender selection
  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Details submitted: \n${JSON.stringify(formData, null, 2)}`);
  };

  // Handle form reset (cancel)
  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      skills: [],
      address: '',
      state: '',
    });
  };

  return (
    <form className="consent-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>
          First Name
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        </label>
      </div>
      <div className="form-field">
        <label>
          Last Name
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        </label>
      </div>
      <div className="form-field">
        <label>
          Date of Birth
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]}
          required
        />
        </label>
      </div>
      <div className="form-field form-field--radio">
        <span className="form-label">Gender</span>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleGenderChange}
            />
            <span>Male</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleGenderChange}
            />
            <span>Female</span>
          </label>
        </div>
      </div>
      <div className="form-field">
        <span className="form-label">Skills</span>
        <div className="checkbox-group">
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="skills"
              value="Java"
              checked={formData.skills.includes('Java')}
              onChange={handleSkillChange}
            />
            <span>Java</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="skills"
              value="C++"
              checked={formData.skills.includes('C++')}
              onChange={handleSkillChange}
            />
            <span>C++</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="skills"
              value="HTML"
              checked={formData.skills.includes('HTML')}
              onChange={handleSkillChange}
            />
            <span>HTML</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="skills"
              value="Golang"
              checked={formData.skills.includes('Golang')}
              onChange={handleSkillChange}
            />
            <span>Golang</span>
          </label>
          <label className="checkbox-option">
            <input
              type="checkbox"
              name="skills"
              value="Rust"
              checked={formData.skills.includes('Rust')}
              onChange={handleSkillChange}
            />
            <span>Rust</span>
          </label>
        </div>
      </div>
      <div className="form-field">
        <label>
          Address
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        </label>
      </div>
      <div className="form-field">
        <label>
          State
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
         
  <option value="">Select a state</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Delhi">Delhi</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>

        </select>
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn--primary">Submit</button>
        <button type="button" className="btn btn--secondary" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;