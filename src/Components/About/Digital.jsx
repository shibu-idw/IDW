import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          y: 620,
          opacity: 1,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1.4,
          },
        }
      );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] bg-black text-white overflow-hidden font-sans"
    >
      <div className="pointer-events-none absolute inset-0 select-none hidden lg:block">
        <h2 className="absolute top-0 right-4 text-[240px] font-bold text-white/[0.03] tracking-tighter">
          IDW
        </h2>
        <h2 className="absolute top-[35%] left-[-10px] text-[120px] font-bold text-white/[0.03] tracking-tighter">
          Introducing
        </h2>
        <h2 className="absolute top-[48%] left-[-20px] text-[350px] font-bold text-white/[0.05] tracking-tighter">
          Digital
        </h2>
        <h2 className="absolute bottom-[5%] left-[-20px] text-[450px] font-bold text-white/[0.05] tracking-tighter">
          World
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20 min-h-[160vh] flex flex-col">
        <div className="relative pt-24 lg:pt-40">
          <div className="relative z-[5]">
            <h1 className="text-[56px] md:text-[90px] lg:text-[130px] font-extralight leading-[0.88] tracking-[-0.07em]">
              Digital moves,
              <br />
              practical
            </h1>

            <p className="mt-10 w-[420px] max-w-full text-gray-400 text-[17px] lg:text-[19px] leading-[1.3]">
              Structure, clarity, and action — built to
              <br />
              help businesses adopt digital tools
              <br />
              with confidence.
            </p>
          </div>

          <div
            ref={cardRef}
            className="mt-12 lg:mt-0 lg:absolute lg:left-[42%] lg:top-[120px] z-[50] w-full max-w-[310px] bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
          >
            <div className="aspect-[4/5.2] overflow-hidden">
              <img
                src={personImg}
                alt="Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="px-5 pt-4 pb-6">
              <div className="text-[19px] font-medium leading-[1.15]">
                Er.Venkat
                <br />
                Chennakrishnan
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 text-[13px] leading-[1.2] font-semibold">
                <p className="self-end">Founder & CEO</p>
                <p className="text-right uppercase">
                  Quality Group of
                  <br />
                  Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-24 lg:pb-40 flex flex-col items-end">
          <div className="max-w-[420px] mb-12">
            <ul className="list-disc pl-6 w-[520px] text-[17px] lg:text-[18px] leading-[1.45] text-gray-300">
              <li>Small businesses. Clear direction.</li>
              <li>A practical path into digital adoption.</li>
              <li className="whitespace-nowrap">
                Helping businesses move from offline to online.
              </li>
              <li>See how ideas become digital progress.</li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-[58px] md:text-[85px] lg:text-[110px] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
              Business needs
              <br />
              into digital solutions
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}