import React, { useState } from "react";
import BgImage from "./../../assets/Home/wood.png";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleBudget = (value) => {
    setFormData({ ...formData, budget: value });
  };

  const handleNext = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.email) return;
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    setStep(2);
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <section
      id="contact-form"
      className="min-h-[70vh] md:min-h-[60vh] lg:min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-12 md:py-16 lg:py-20"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-[#f5f5f5] w-full max-w-lg px-4 md:px-6 py-6 md:py-8 shadow-lg min-h-[420px] md:min-h-[550px] lg:h-[600px] flex flex-col justify-between">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div>
              <div className="bg-black text-white text-xs md:text-sm px-4 md:px-5 py-2 inline-block mb-6">
                1/2 Steps
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Let's start a conversation
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl font-semibold leading-[1.05]">

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent outline-none border-b ${
                    errors.name ? "border-red-500 placeholder-red-400" : "border-transparent"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-normal">Name is required</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent outline-none border-b ${
                    errors.email ? "border-red-500 placeholder-red-400" : "border-transparent"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-normal">Email is required</p>
                )}
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
              />
            </div>

            <br />
            <button
              onClick={handleNext}
              className="w-full text-left border-b-2 border-black pb-2 hover:opacity-70 text-base md:text-lg lg:text-2xl font-semibold"
            >
              Next step
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-400 px-3 md:px-5 py-2 text-sm md:text-md"
                >
                  Back
                </button>
                <div className="bg-black text-white text-xs md:text-sm px-4 md:px-5 py-2">
                  2/2 Steps
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                A few details to get started
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-center text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
              <p className="text-base md:text-lg lg:text-2xl text-gray-500 mb-3">
                Estimated budget
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["₹5–10k", "₹10–20k", "₹20–30k", "₹30k+"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleBudget(item)}
                    className={`px-3 py-1 text-sm md:text-lg lg:text-xl font-semibold ${
                      formData.budget === item ? "bg-black text-white" : "bg-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-sm md:text-2xl"
              />
            </div>

            {/* Success message */}
            {submitted && (
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-600 text-sm md:text-base font-semibold">
                  Form Submitted Successfully!
                </p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitted}
              className="w-full text-left border-b-2 border-black pb-2 hover:opacity-70 text-base md:text-lg lg:text-2xl font-semibold disabled:opacity-50"
            >
              Send request
            </button>
          </>
        )}

      </div>
    </section>
  );
}