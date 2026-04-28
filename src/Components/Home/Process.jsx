import React from "react";
import { useNavigate } from "react-router-dom";
import ProcessImg from "./../../assets/Home/Process.png";

export default function ClientProcess() {
  const navigate = useNavigate();

  const steps = [
    { id: "001", title: "Understand", desc: "We learn the business, goals, and current digital challenges." },
    { id: "002", title: "Assess", desc: "We identify digital readiness, gaps, and growth opportunities." },
    { id: "003", title: "Plan", desc: "We create a clear and practical digital action path." },
    { id: "004", title: "Enable", desc: "We guide the adoption of the right tools, platforms, and services." },
    { id: "005", title: "Grow", desc: "We support progress, optimization, and long-term digital success." },
  ];

  return (
    <section className="bg-[#f5f5f5] pt-12 md:pt-16 pb-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-black font-semibold mb-6 tracking-wide text-xl md:text-2xl">
          /CLIENT PROCESS/
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

          {/* IMAGE */}
          <div className="w-full lg:w-[540px] h-[260px] sm:h-[320px] md:h-[420px] lg:h-[524px] overflow-hidden">
            <img src={ProcessImg} alt="process" className="w-full h-full object-cover" />
          </div>

          {/* STEPS */}
          <div className="space-y-5 md:space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="border-0 md:border-t-2 lg:border-t border-gray-400 mb-3 md:mb-4"></div>

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-[#7A7A7A] text-xs md:text-sm leading-tight mt-1">
                      {step.desc}
                    </p>
                  </div>

                  <span className="text-gray-400 text-xs md:text-sm shrink-0">
                    {step.id}
                  </span>
                </div>
              </div>
            ))}

            <div className="border-0 md:border-t-2 lg:border-t border-gray-400"></div>

            {/* ✅ CLEAN BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-[#2f4b8f] hover:bg-[#1f3a7a] text-white px-5 md:px-6 py-2.5 md:py-3 flex items-center gap-2 transition text-sm md:text-base"
            >
              Connect with
              <span>→</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}