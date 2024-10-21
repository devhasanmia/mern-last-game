import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

const ReusableForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        name="name"
        placeholder="Enter your name"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Input;
