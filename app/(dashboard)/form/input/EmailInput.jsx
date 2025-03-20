export default function EmailInput({ value, onChange, disabled }) {
  return (
    <>
      <input
        name="email"
        className="w-full input validator"
        type="email"
        required
        placeholder="mail@site.com"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="validator-hint hidden">Enter valid email address</div>
    </>
  );
}
