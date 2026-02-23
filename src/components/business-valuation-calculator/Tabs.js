"use client";

export default function Tabs({ steps, activeStep, setActiveStep }) {
  const tooltips = [
    "Used to understand trends, not exact accounting figures.",
    "Helps assess how transferable the business is to a new owner.",
    "Different industries carry different risk and growth profiles.",
    "These inputs influence buyer confidence and perceived risk.",
  ];

  return (
    <div className="memate-tabs-wrapper">
      <div className="memate-progress">
        <div className="progress-line"></div>

        {steps.map((_, index) => (
          <div
            key={index}
            className={`progress-circle 
              ${index < activeStep ? "done" : ""} 
              ${index === activeStep ? "active" : ""}
            `}
          >
            
          {index < activeStep && (
  <svg
    width="13"
    height="9"
    viewBox="0 0 13 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5002 0.833344L4.16683 8.16668L0.833496 4.83334"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)}
          </div>
          
        ))}
      </div>
      <div className="memate-tabs">
        {steps.map((label, index) => (
          <div key={label} className="tab-hover-wrapper">
            <button
              onClick={() => setActiveStep(index)}
              className={`memate-tab-btn ${
                activeStep === index ? "active-tab1" : ""
              }`}
            >
              <span className="tab-title">{label}</span>

              <span className="tab-subtitle">
                {index === 0 && "Foundational, feels safe"}
                {index === 1 && "Operational reality"}
                {index === 2 && "Risk & multiple"}
                {index === 3 && "This is where the magic"}
              </span>
            </button>
            <div className="tab-tooltip-popup">
              {tooltips[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
