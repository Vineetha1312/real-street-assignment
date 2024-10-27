
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StepIndicator = ({ step }) => {
  const steps = [
    'Add Requirement',
    'Property Location',
    'Property Details',
    'Areas',
    'Price Details',
    'Add images'
  ];

  return (
    <div className="flex flex-wrap justify-between items-center mb-6 space-x-2">
      {steps.map((label, index) => {
        const isCompleted = index < step - 1;
        const isCurrent = index === step - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center w-1/6 md:w-20">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`text-lg md:text-3xl ${
                  isCompleted
                    ? 'text-blue-500' 
                    : isCurrent
                    ? 'text-blue-600' 
                    : 'text-gray-300' 
                }`}
              />
              <span
                className={`text-xs md:text-sm mt-2 leading-tight ${
                  isCompleted || isCurrent ? 'text-blue-600 font-semibold' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`flex-1 ${
                  isCompleted ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                style={{
                  height: '2px',
                  margin: '0 4px'
                }}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
