import { cloneElement, useState } from 'react';

const useStepper = (...steps) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) setStep((prev) => ++prev);
  };
  const previousStep = () => {
    if (step >= 1) setStep((prev) => --prev);
  };

  const currentStep =
    typeof steps[step] === 'object'
      ? cloneElement(steps[step], { nextStep, previousStep })
      : steps[step];

  return {
    currentStep,
  };
};

export default useStepper;
