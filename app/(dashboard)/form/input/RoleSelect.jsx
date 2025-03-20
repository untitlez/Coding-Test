export default function RoleSelect({ value, onChange, disabled }) {
  return (
    <>
      <select
        name="role"
        className="w-full select validator"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      >
        <option value="" defaultValue={value} disabled>
          Plase select role
        </option>
        <option value="Viewer">Viewer</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
      </select>
      <p className="validator-hint">Required</p>
    </>
  );
}
