import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div className="py-12  px-4 max-w-6xl mx-auto">
      <div className="grid justify-center items-center lg:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Contact;
