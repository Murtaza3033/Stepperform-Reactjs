// src/components/BudgetStep.js
import React, { useState, useEffect } from "react";

const BudgetStep = ({ nextStep, setFormData, formData }) => {
  const [budget, setBudget] = useState(formData.budget || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setBudget(formData.budget || "");
  }, [formData.budget]);

  const handleSelect = (value) => {
    setBudget(value);
    setError("");
  };

  const handleSubmit = () => {
    if (!budget) {
      setError("Please select a budget.");
      return;
    }
    setFormData((prev) => ({ ...prev, budget }));
    nextStep();
  };

  return (
    <div className="budget-step">
      <h2>Step #1</h2>
      <h3>What is your monthly digital marketing budget?</h3>
      <div className="options">
        {[
          "< $1,000/mo",
          "$1,000 - $2,000",
          "$2,000 - $5,000",
          "$5,000 - $10,000",
          "$10,000 - $25,000",
          "$25,000 +",
        ].map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={budget === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit} className="next-button">
        Next
      </button>
    </div>
  );
};

export default BudgetStep;
