import React from "react";
import ProcessImg from "./../../assets/Home/Process.png"; // rename your image

export default function ClientProcess() {
  const steps = [
    {
      id: "001",
      title: "Understand",
      desc: "We learn the business, goals, and current digital challenges.",
    },
    {
      id: "002",
      title: "Assess",
      desc: "We identify digital readiness, gaps, and growth opportunities.",
    },
    {
      id: "003",
      title: "Plan",
      desc: "We create a clear and practical digital action path.",
    },
    {
      id: "004",
      title: "Enable",
      desc: "We guide the adoption of the right tools, platforms, and services.",
    },
    {
      id: "005",
      title: "Grow",
      desc: "We support progress, optimization, and long-term digital success.",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] pt-16 pb-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-black font-semibold mb-6 tracking-wide text-2xl">
          /CLIENT PROCESS/
        </h2>

        <div className="grid md:grid-cols-2 gap-32 items-start">

          {/* LEFT IMAGE */}
          <div className="w-[540px] h-[536px] overflow-hidden">
            <img
              src={ProcessImg}
              alt="process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                
                {/* Top Line */}
                <div className="border-t-2 border-gray-400 mb-4"></div>

                <div className="flex justify-between items-start">
                  
                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7A7A] text-sm mt-1 max-w-xl">
                      {step.desc}
                    </p>
                  </div>

                  {/* Number */}
                  <span className="text-gray-400 text-sm">
                    {step.id}
                  </span>
                </div>
              </div>
            ))}

            {/* Bottom Line */}
            <div className="border-t-2 border-gray-400"></div>

            {/* Button */}
            <button className="mt-6 bg-[#1E3A8A] text-white px-6 py-3 flex items-center gap-2 hover:bg-[#1e40af] transition">
              Connect with
              <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}