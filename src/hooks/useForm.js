import { useState } from "react";

export default function useForm(receiver, names = []) {
  const pairs = {};
  names.map((x, index) => (pairs[x] = ""));
  const [formData, setFormData] = useState(pairs);
  const [blurred, setBlurred] = useState(false);

  /*--------------------------states-------------------*/
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    receiver(formData);
    setFormData({ category: "", difficulty: "" });
    setBlurred(true);
  }

  return {
    handleSubmit,
    handleChange,
    formData,
    blurred,
    setBlurred,
  };
}
