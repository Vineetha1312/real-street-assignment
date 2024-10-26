import React, { useState } from 'react';
import StepIndicator from '../components/StepIndicator';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import StepFour from '../components/StepFour';
import StepFive from '../components/StepFive'; 
import FinalStep from '../components/FinalStep'; 

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customer: '',
    propertyType: '',
    requirement: '',
    detailedRequirement: '',
    priceMin: '',
    priceMax: '',
    timeline: '',
    city: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    parking: '',
    builtYear: '',
    plotArea: '',
    areaUnits: 'Square Feet',
    images: []
  });
  const [showModal, setShowModal] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (values) => {
    setFormData(values);
    setShowModal(true); 
  };

  const renderStep = () => {
    console.log("Current step:", step); 
    switch (step) {
      case 1:
        return <StepOne nextStep={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 3:
        return <StepThree nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 4:
        return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 5:
        return <StepFive nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
      case 6:
        return <FinalStep prevStep={prevStep} handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />;
      default:
        return <StepOne nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    }
  };
  
  

  return (
    <div className="max-w-4xl mx-auto">
      <StepIndicator step={step} />

      <div className="bg-white px-8 py-2 rounded-lg shadow-lg mx-auto">
        <div className="mt-6">{renderStep()}</div>
      </div>

      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden">
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-3 bg-blue-500 text-white py-1 px-2 rounded-md"
      >
        Close
      </button>
      <h2 className="text-xl font-semibold mb-4">Submission Summary</h2>
      
     
      <div className="overflow-y-auto" style={{ maxHeight: '65vh', paddingRight: '1rem' }}>
        <ul className="space-y-2">
          {Object.entries(formData).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span>{Array.isArray(value) ? `${value.length} images uploaded` : value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MultiStepForm;
