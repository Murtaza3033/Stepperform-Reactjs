import React, { useState } from "react";
import BudgetStep from "./BudgetStep";
import DetailsStep from "./DetailsStep";
import ConfirmationStep from "./ConfirmationStep";
import "./StepperForm.css";

const steps = [
  {
    component: BudgetStep,
    label: "What is your monthly digital marketing budget?",
  },
  { component: DetailsStep, label: "Details" },
  { component: ConfirmationStep, label: "Confirmation" },
];

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0); // Track the highest step reached
  const [formData, setFormData] = useState({
    budget: "",
    details: { name: "", email: "", phone: "", message: "" },
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep + 1 > maxStepReached) {
      setMaxStepReached(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetStepData = () => {
    if (currentStep === 1 && currentStep > maxStepReached) {
      setFormData((prev) => ({ ...prev, budget: "" }));
    } else if (currentStep === 2 && currentStep > maxStepReached) {
      setFormData((prev) => ({
        ...prev,
        details: { name: "", email: "", phone: "", message: "" },
      }));
    }
  };

  const StepComponent = steps[currentStep].component;

  return (
    <div className="stepper-form">
      <div className="step-header">
        <button
          onClick={() => {
            prevStep();
            resetStepData();
          }}
          disabled={currentStep === 0}
        >
          Go Back
        </button>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="step-content">
        <StepComponent
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default StepperForm;
