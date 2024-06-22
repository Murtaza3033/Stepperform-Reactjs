// src/components/DetailsStep.js
import React, { useState, useEffect } from "react";

const DetailsStep = ({ nextStep, prevStep, setFormData, formData }) => {
  const [details, setDetails] = useState({
    name: formData.details?.name || "",
    email: formData.details?.email || "",
    phone: formData.details?.phone || "",
    message: formData.details?.message || "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setDetails({
      name: formData.details?.name || "",
      email: formData.details?.email || "",
      phone: formData.details?.phone || "",
      message: formData.details?.message || "",
    });
  }, [formData.details]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = details;
    if (!name || !email || !phone) {
      setError("Please fill out all required fields.");
      return;
    }
    setFormData((prev) => ({ ...prev, details }));
    nextStep();
  };

  return (
    <div className="details-step">
      <h2>Step #2</h2>
      <h3>Details</h3>
      <p>
        We’re thrilled at the opportunity to help you grow your business online.
        Please let us know the best way to reach you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={details.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Anything else you’d like to share?</label>
          <textarea
            name="message"
            value={details.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          {/* <button type="button" onClick={prevStep} className="prev-button">
            Go Back
          </button> */}
          <button type="submit" className="submit-button">
            Send Request
          </button>
        </div>
      </form>
      <p className="privacy-note">
        <span role="img" aria-label="lock">
          🔒
        </span>{" "}
        We promise never to share your information or spam your inbox
      </p>
    </div>
  );
};

export default DetailsStep;
