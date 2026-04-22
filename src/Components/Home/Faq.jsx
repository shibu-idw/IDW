import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How long does digital marketing take?",
      answer: "Typically 4–12 weeks depending on strategy.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with startups and small businesses of all sizes.",
    },
    {
      question: "What platforms do you handle?",
      answer: "We handle Google, Meta, LinkedIn, SEO, and more.",
    },
    {
      question: "Do you provide reports?",
      answer: "Yes, we provide detailed performance reports regularly.",
    },
  ];

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f3f3f3] py-38 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_2.5fr] gap-6 md:gap-15">

        {/* LEFT SMALL TITLE */}
        <div>
          <p className="text-black font-semibold mb-6 tracking-wide text-2xl">
            /Frequently asked questions/
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-25 max-w-6xl text-black">
            Everything you need to know, explained simply and clearly. Helping
            you understand and take the next step with ease.
          </h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-8">

                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-base md:text-2xl font-medium">
                    {index + 1}. {faq.question}
                  </h3>

                  <div className="border-2 border-black rounded-full p-1">
                    {active === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                {active === index && (
                  <p className="text-gray-500 text-sm mt-3 max-w-xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}

            <div className="border-t border-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}