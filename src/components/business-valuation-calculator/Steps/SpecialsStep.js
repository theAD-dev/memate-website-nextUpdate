"use client";

import { useState, useEffect } from "react";

export default function SpecialsStep({ form, update }) {
  if (!form) return null;

  // ✅ Smooth Range Slider Component
  const RangeSlider = ({ title, field, leftText, rightText }) => {
    const [localValue, setLocalValue] = useState(form[field] ?? 0);

    // ✅ Sync slider if parent updates externally
    useEffect(() => {
      setLocalValue(form[field] ?? 0);
    }, [form[field]]);

    // ✅ Commit value after drag ends
    const commitValue = () => {
      update(field, Number(localValue));
    };

    return (
      <div className="slider-box">
        <h4>{title}</h4>

        <input
          type="range"
          min="0"
          max="100"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)} // smooth drag
          onMouseUp={commitValue} // commit when released (desktop)
          onTouchEnd={commitValue} // commit when released (mobile)
          className="exact-range"
        />

        {/* ✅ Optional live percentage display */}
        {/* <p className="slider-value">{localValue}%</p> */}

        <div className="slider-labels">
          <span>{leftText}</span>
          <span>{rightText}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="specials-grid">
      <RangeSlider
        title="Revenue type"
        field="revenueType"
        leftText="Mostly repeat"
        rightText="Mostly one-off"
      />

      <RangeSlider
        title="Customer concentration"
        field="customerConcentration"
        leftText="Many small customers"
        rightText="Few large customers"
      />

      <RangeSlider
        title="Who drives the sales?"
        field="salesDriver"
        leftText="Team / systems driven"
        rightText="Mostly owner driven"
      />

      <RangeSlider
        title="Business records & history"
        field="recordsHistory"
        leftText="Fully documented"
        rightText="Mostly in my head"
      />
    </div>
  );
}
