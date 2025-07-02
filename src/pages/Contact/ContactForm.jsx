import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // You can send data to backend here
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-colors duration-300"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Name
        </label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="mt-1 input input-bordered w-full dark:bg-gray-800 dark:text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="mt-1 input input-bordered w-full dark:bg-gray-800 dark:text-white"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          rows="4"
          {...register("message", { required: true })}
          className="mt-1 textarea textarea-bordered w-full dark:bg-gray-800 dark:text-white"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
