export default function EmployeesStep({ form, update }) {
  if (!form) return null; 

  return (
    <div className="grid">
      <div>
        <label>Number of full-time employees</label>
        <input
          type="number"
          value={form.employees}
          onChange={(e) => update("employees", e.target.value)}
        />
      </div>
      <div>
        <label>Number of contractors (optional)</label>
        <input
          type="number"
          value={form.contractors}
          onChange={(e) => update("contractors", e.target.value)}
        />
      </div>
      <div>
        <label>Owner involvement</label>
        <select
          value={form.ownerInvolvement}
          onChange={(e) =>
            update("ownerInvolvement", e.target.value)
          }
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
