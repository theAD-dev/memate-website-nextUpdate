import React from "react";

export default function RevenueStep({ form, update }) {
  if (!form) return null;

  return (
    <>
      <div className="grid">
        <div>
          <label>Revenue this year</label>
          <input
            type="number"
            placeholder={form.revenue1}
            onChange={(e) => update("revenue1", Number(e.target.value))}
          />
        </div>

        <div>
          <label>Revenue last year</label>
          <input
            type="number"
            placeholder={form.revenue2}
            onChange={(e) => update("revenue2", Number(e.target.value))}
          />
        </div>

        <div>
          <label>Revenue two years ago (Optional)</label>
          <input
            type="number"
            placeholder={form.revenue3}
            onChange={(e) => update("revenue3", Number(e.target.value))}
          />
        </div>
        <div>
          <label>Trading years total</label>
          <select
            placeholder={form.tradingYears}
            onChange={(e) =>
              update("tradingYears", Number(e.target.value))
            }
          >
            <option value={0}>Select</option>
            <option value={1}>&lt; 1 year</option>
            <option value={2}>1–2 years</option>
            <option value={5}>3–5 years</option>
            <option value={10}>6–10 years</option>
            <option value={15}>10+ years</option>
          </select>
        </div>
      </div>
      <div className="slider">
        <label>Operational Profitability %</label>
        <div style={{ width: "100%", padding: "0px" }}> 
          <input type="range" min="0" max="100" value={form.profitability} 
          onChange={(e) => update("profitability", Number(e.target.value))}
          className="custom-range" 
        style={{ 
          background: `linear-gradient(to right, #2f3a46 0%, #2f3a46 ${form.profitability}%, #e6e6e6 ${form.profitability}%, #e6e6e6 100%)` }} /> 
          </div>
          <p className="profitabilityCount">{form.profitability}%</p>
      </div>
    </>
  );
}
