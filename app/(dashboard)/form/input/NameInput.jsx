export default function NameInput({ value, onChange, disabled }) {
  return (
    <>
      <input
        name="name"
        type="input"
        className="w-full input validator"
        placeholder="Full Name"
        pattern="[A-Za-z][A-Za-z0-9\-]*"
        minLength="3"
        maxLength="20"
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
      <p className="validator-hint hidden">Must be 3 to 20 characters</p>
    </>
  );
}
