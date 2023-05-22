import React from "react";
import imgBg from "../images/homem-preenchendo-checklist.jpg";
export default function Contact() {
  return (
    <div className="contact-container">
      <div className="container-fluid p-8">
        <section className="mb-32  text-gray-800">
          <div className="max-w-[1200px] mx-auto px-3 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
              <form className="border-solid border-2 border-violet-100 p-8 rounded-lg shadow-xl bg-white">
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="exampleCheck87"
                    checked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck87"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="
                    border-solid border-2 border-violet-300
                    rounded-md 
                    w-full
                    px-6
                    py-2.5
                    bg-violet-200
                    text-Blue
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    hover:bg-violet-200
                    focus:bg-violet-200
                    focus:outline-none
                    focus:ring-0
                    active:bg-violet-200
                    transition
                    duration-150
                    ease-in-out"
                >
                  Send
                </button>
              </form>
              <div className="flex justify-right items-center">
                <img
                  src={imgBg}
                  alt="Image"
                  className="max-w-full lg:max-w-[600px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
