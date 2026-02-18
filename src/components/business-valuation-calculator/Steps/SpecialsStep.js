export default function SpecialsStep({ form, update }) {
  if (!form) return null;

  const RangeSlider = ({ title, field, leftText, rightText }) => (
    <div className="slider-box">
      <h4>{title}</h4>
      <input
        type="range"
        min="0"
        max="100"
        value={form[field]}
        onChange={(e) => update(field, e.target.value)}
        className="exact-range"
      />

      <div className="slider-labels">
        <span>{leftText}</span>
        <span>{rightText}</span>
      </div>
    </div>
  );

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
