import { useState } from "react";

export default function useForm(receiver, names = []) {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const pairs = {};
  names.map((x, index) => (pairs[x] = ""));
  const [formData, setFormData] = useState(pairs);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    receiver(formData);
    setFormData({ category: "", difficulty: "" });
    setShouldNavigate(true);
  }

  return {
    handleSubmit,
    shouldNavigate,
    handleChange,
    formData,
    setShouldNavigate,
  };
}
