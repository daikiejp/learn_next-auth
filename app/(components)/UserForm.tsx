"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const UseForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      //   "content-type": "application/json",
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required={true}
          type="text"
          className="m-2 bg-slate-400 h-10 rounded"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
          type="text"
          className="m-2 bg-slate-400 h-10 rounded"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          required={true}
          type="password"
          className="m-2 bg-slate-400 h-10 rounded"
        />
        <input
          type="submit"
          value="Create User"
          className="bg-blue-300 hover:bg-blue-100 h-10 rounded"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </>
  );
};

export default UseForm;
