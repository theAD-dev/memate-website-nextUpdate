export default function IndustryStep({ form, update }) {
  if (!form) return null; 

  return (
    <div className="grid">
      <div>
        <label>Industry</label>
        <select
          value={form.industry}
          onChange={(e) => update("industry", e.target.value)}
        >
          <option value="">Select</option>
          <option value="tech">Tech</option>
          <option value="retail">Retail</option>
          <option value="health">Healthcare</option>
          <option value="finance">Finance</option>
        </select>
      </div>
      <div>
        <label>Market type</label>
        <select
          value={form.marketType}
          onChange={(e) => update("marketType", e.target.value)}
        >
          <option value="">Select</option>
          <option value="local">Local</option>
          <option value="national">National</option>
          <option value="global">Global</option>
        </select>
      </div>
    </div>
  );
}
