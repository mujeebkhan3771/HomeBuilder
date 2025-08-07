import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f82cfd3-f227-4e31-8a0c-3e9c9488347a");
    //access key => Make it in .env file before deployment

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully!"); //alert
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Something went wrong"); //alert
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2x1 sm:text-4x1 font-bold mb-2 text-center">
        Contact{" "}
        <span
          className="underline underline-offset-4 decoration-1 under
               font-light"
        >
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move ? Let's Build Your Future Together{" "}
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2x1 mx-auto text-gray-600 pt-8"
      >
        <ToastContainer position="top-center" />{" "}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 
              bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
               focus:border-blue-500 bg-gray-50 border-gray-600 placeholder-gray-400
                text-black focus:ring-blue-300 focus:border-blue-500"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 
              bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
              focus:border-blue-500 bg-gray-50 border-gray-600 placeholder-gray-400 
              text-black focus:ring-blue-300 focus:border-blue-500"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Your Message
          <textarea
            name="Message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 
            rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
            bg-gray-50 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-300 
            focus:border-blue-500"
            placeholder="message here..."
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-12
        mb-10 rounded cursor-pointer"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
