import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3rccbam", "template_k3z5dn6", form.current, {
        publicKey: "RLrh96RcJfyKBGIHo",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="border">
        <iframe
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=richland%20Academy%20dawaki%20abuja%20nigeria%20+(Duruchukwu)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>

      <div className="md:mt-5 mt-3">
        <h1 className="text-2xl font-bold">Contact Form</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row mb-10 mt-5 ">
            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              className="bg-black border w-full my-4 md:my-0 md:mr-8 p-4 rounded-xl"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              className="bg-black border w-full p-4 rounded-xl"
            />
          </div>
          <div className="my-4">
            <textarea
              name="message"
              className="bg-black border w-full p-4 rounded-xl"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="flex items-center bg-gradient-to-br from-[#534d5c] to-[rgba(75,30,133,0.01)] py-4 rounded-xl px-8"
            >
              <span className="mr-2">
                <BsFillSendFill />
              </span>
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
};

export default Contact;
