"use client";
import { useState } from "react";
import EmailInput from "./input/EmailInput";
import NameInput from "./input/NameInput";
import RoleSelect from "./input/RoleSelect";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function FormPage() {
  const router = useRouter();
  const initForm = { name: "", email: "", role: "" };
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("Add New User:", data);
      toast.success("Add New User Success!");
      router.push("/users");
    } catch (error) {
      console.error("Error Add New User:", error);
    }
    setForm(initForm);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        type="submit"
        className="w-full max-w-screen-sm fieldset bg-base-200 border border-base-content/20 p-4 rounded-box"
      >
        <h3 className="text-2xl font-semibold mb-4">Login</h3>
        <label className="fieldset-label">Yourname</label>
        <NameInput
          value={form.name}
          onChange={handleChange}
          disabled={disabled}
        />

        <label className="fieldset-label">Email</label>
        <EmailInput
          value={form.email}
          onChange={handleChange}
          disabled={disabled}
        />

        <label className="fieldset-label">Role</label>
        <RoleSelect
          value={form.role}
          onChange={handleChange}
          disabled={disabled}
        />

        <button type="submit" className="btn btn-accent mt-4">
          {loading ? <p>Plase wait...</p> : <p> Add New User</p>}
        </button>
      </form>
    </>
  );
}
