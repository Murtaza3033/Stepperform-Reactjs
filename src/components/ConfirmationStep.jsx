// src/components/ConfirmationStep.js
import React from "react";

const ConfirmationStep = ({ formData }) => {
  const handleReturnHome = () => {
    console.log(formData);
  };

  return (
    <div className="confirmation-step">
      <h2>Step #3</h2>
      <h3>Your Request for a Proposal Has Been Submitted!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida
        parturient urna tristique congue. Curabitur volutpat nulla convallis
        eget pellentesque. luctus tellus eu ultrices egestas.
      </p>
      <button onClick={handleReturnHome} className="home-button">
        Return Home
      </button>
    </div>
  );
};

export default ConfirmationStep;
