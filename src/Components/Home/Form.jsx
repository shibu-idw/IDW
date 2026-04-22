import React, { useState } from "react";
import BgImage from "./../../assets/Home/wood.png";

export default function ContactForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudget = (value) => {
    setFormData({ ...formData, budget: value });
  };

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill required fields");
      return;
    }
    setStep(2);
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    alert("Form Submitted 🚀");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-20"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-[#f3f3f3] w-full max-w-lg px-4 md:px-6 py-6 md:py-8 shadow-lg h-[550px] flex flex-col justify-between">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div>
              <div className="bg-black text-white text-sm px-5 py-2 inline-block mb-6">
                1/2 Steps
              </div>

              <h2 className="text-6xl font-semibold leading-tight">
                Let’s start a conversation
              </h2>
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-2xl font-semibold leading-relaxed">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-0 m-0"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-0 m-0"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-0 m-0"
              />
            </div>

            {/* Bottom Button */}
            <button
              onClick={handleNext}
              className="w-full text-left border-b-2 border-black pb-2 hover:opacity-70 text-xl font-semibold"
            >
              Next step
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div>
              {/* 🔥 Back + Step */}
              <div className="flex items-center gap-3 mb-6">
                
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-400 px-5 py-2 text-md"
                >
                  Back
                </button>

                <div className="bg-black text-white text-sm px-5 py-2">
                  2/2 Steps
                </div>
              </div>

              <h2 className="text-6xl font-semibold leading-tight">
                A few details to get started
              </h2>
            </div>

            <br />

            {/* Center Content */}
            <div className="flex-1 flex flex-col justify-center text-2xl font-semibold leading-relaxed">
              
              <p className="text-2xl font-semibold leading-relaxed text-gray-500 mb-3">
                Estimated budget
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {["$5–10k", "$10–20k", "$20–30k", "$30+"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleBudget(item)}
                    className={`px-3 py-1 text-xl font-semibold leading-relaxed ${
                      formData.budget === item
                        ? "bg-black text-white"
                        : "bg-gray-200"
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
                className="w-full bg-transparent outline-none p-0 m-0"
              />
            </div>

            {/* Bottom Button */}
            <button
              onClick={handleSubmit}
              className="w-full text-left border-b-2 border-black pb-2 hover:opacity-70 text-xl font-semibold"
            >
              Send request
            </button>
          </>
        )}
      </div>
    </section>
  );
}