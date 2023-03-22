import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#d4d3c3] flex justify-center items-center p-4 text-2xl"
    >
      <form
        method="POST"
        action="https://getform.io/f/e03e648b-0c38-4679-bf1c-09ad7d955a7d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-800 rounded-md">
            Contact
          </p>
          <p className="text-gray-800 rounded-md py-4">
            Feel free to contact me here below
          </p>
        </div>
        <input
          className="bg-stone-300 p-2 border border-slate-800 rounded-md text-slate-600"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-stone-300 my-4 p-2 border border-slate-800 rounded-md "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-stone-300 p-2 border border-slate-800 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-slate-800  border border-slate-800 rounded-md hover:bg-slate-600 hover:text-white hover:border-slate-600 px-4 py-3 my-8 mx-auto flex items-center text-xl">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
