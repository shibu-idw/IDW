import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import personImg from "./../../assets/About/p8.png";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalIntro() {
  const sectionRef = useRef(null);
  const desktopCardRef = useRef(null);
  const tabletCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isDesktop = window.innerWidth >= 1024;

      if (isTablet && tabletCardRef.current) {
        gsap.fromTo(
          tabletCardRef.current,
          { y: 360 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom bottom",
              scrub: 1.4,
            },
          }
        );
      }

      if (isDesktop && desktopCardRef.current) {
        gsap.fromTo(
          desktopCardRef.current,
          { y: 620 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "bottom bottom",
              scrub: 1.4,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white overflow-hidden font-sans"
    >
      {/* BACKGROUND TEXT - DESKTOP ONLY */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <h2 className="absolute top-0 right-4 text-[240px] font-bold text-white/[0.03]">
          IDW
        </h2>
        <h2 className="absolute top-[35%] left-[-10px] text-[120px] font-bold text-white/[0.03]">
          Introducing
        </h2>
        <h2 className="absolute top-[48%] left-[-20px] text-[350px] font-bold text-white/[0.05]">
          Digital
        </h2>
        <h2 className="absolute bottom-[5%] left-[-20px] text-[450px] font-bold text-white/[0.05]">
          World
        </h2>
      </div>

      {/* MOBILE + TABLET */}
      <div className="lg:hidden px-5 sm:px-8 py-14 sm:py-16">
        <h1 className="text-[52px] sm:text-[80px] md:text-[110px] font-extralight leading-[0.9]">
          Digital moves,
          <br />
          practical
        </h1>

        <p className="mt-6 text-gray-400 text-[16px] sm:text-[20px] leading-[1.35] max-w-[420px]">
          Structure, clarity, and action — built to
          <br />
          help businesses adopt digital tools
          <br />
          with confidence.
        </p>

        {/* TABLET CARD ANIMATION WORKS HERE */}
        <div className="mt-10 flex justify-center">
          <div
            ref={tabletCardRef}
            className="w-[280px] sm:w-[330px] bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[380px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="text-[18px] font-medium">
                Er.Venkat <br /> Chennakrishnan
              </h3>

              <div className="mt-8 flex justify-between text-[12px] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-10 text-gray-300 text-[16px] sm:text-[18px] leading-[1.5] space-y-2">
          <li>Small businesses. Clear direction.</li>
          <li>A practical path into digital adoption.</li>
          <li>Helping businesses move from offline to online.</li>
          <li>See how ideas become digital progress.</li>
        </ul>

        <h2 className="mt-12 text-[50px] sm:text-[80px] md:text-[100px] font-extralight leading-[0.9] text-right">
          Business needs <br /> into digital solutions
        </h2>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20 min-h-[130vh] flex-col">
        <div className="relative pt-24 lg:pt-40">
          <div className="relative z-[5]">
            <h1 className="text-[130px] font-extralight leading-[0.88] tracking-[-0.07em]">
              Digital moves,
              <br />
              practical
            </h1>

            <p className="mt-10 w-[420px] text-gray-400 text-[19px] leading-[1.3]">
              Structure, clarity, and action — built to
              <br />
              help businesses adopt digital tools
              <br />
              with confidence.
            </p>
          </div>

          <div
            ref={desktopCardRef}
            className="absolute left-[42%] top-[120px] z-[50] w-[310px] bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[500px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="text-[19px] font-medium">
                Er.Venkat <br /> Chennakrishnan
              </h3>

              <div className="mt-12 flex justify-between text-[13px] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right uppercase">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-24 flex flex-col items-end">
          <ul className="text-gray-300 text-[18px] leading-[1.45] w-[520px] list-disc pl-6 space-y-2">
            <li>Small businesses. Clear direction.</li>
            <li>A practical path into digital adoption.</li>
            <li className="whitespace-nowrap">
              Helping businesses move from offline to online.
            </li>
            <li>See how ideas become digital progress.</li>
          </ul>

          <h2 className="mt-12 text-[110px] font-extralight leading-[0.9] text-right">
            Business needs <br /> into digital solutions
          </h2>
        </div>
      </div>
    </section>
  );
}