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
      {/* BACKGROUND TEXT - RESPONSIVE */}
      <div className="pointer-events-none absolute inset-0 select-none z-0 overflow-hidden">
        <h2 className="hidden lg:block absolute top-[-25px] right-4 text-[240px] font-bold text-white/[0.06] tracking-[-0.08em] leading-none">
          IDW
        </h2>

        <h2 className="absolute top-[35%] sm:top-[34%] md:top-[35%] lg:top-[36%] left-[-6px] lg:left-[-8px] text-[62px] sm:text-[90px] md:text-[115px] lg:text-[120px] font-bold text-white/[0.055] tracking-[-0.08em] leading-none">
          Introducing
        </h2>

        <h2 className="absolute top-[47%] sm:top-[47%] md:top-[48%] lg:top-[48%] left-[-10px] lg:left-[-18px] text-[150px] sm:text-[220px] md:text-[300px] lg:text-[350px] font-bold text-white/[0.06] tracking-[-0.1em] leading-[0.8]">
          Digital
        </h2>

        <h2 className="absolute bottom-[-7%] sm:bottom-[-8%] md:bottom-[-8%] lg:bottom-[-8%] left-[-12px] lg:left-[-18px] text-[190px] sm:text-[280px] md:text-[380px] lg:text-[450px] font-bold text-white/[0.06] tracking-[-0.12em] leading-[0.75]">
          World
        </h2>
      </div>

      {/* MOBILE */}
      <div className="relative z-10 md:hidden px-5 py-14">
        <h1 className="text-[52px] font-extralight leading-[0.9] tracking-[-0.07em]">
          Digital moves,
          <br />
          practical
        </h1>

        <p className="mt-6 text-gray-300 text-[16px] leading-[1.35] max-w-[340px]">
          Structure, clarity, and action — built to
          <br />
          help businesses adopt digital tools
          <br />
          with confidence.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-[280px] bg-[#f1f1f1] text-black shadow-2xl">
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[320px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="text-[18px] font-medium leading-[1.15]">
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

        <ul className="mt-10 list-disc pl-5 text-gray-300 text-[16px] leading-[1.5] space-y-2">
          <li>Small businesses. Clear direction.</li>
          <li>A practical path into digital adoption.</li>
          <li>Helping businesses move from offline to online.</li>
          <li>See how ideas become digital progress.</li>
        </ul>

        <h2 className="mt-12 text-[50px] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
          Business needs <br /> into digital solutions
        </h2>
      </div>

      {/* TABLET */}
      <div className="relative z-10 hidden md:block lg:hidden px-8 py-16 min-h-[120vh]">
        <h1 className="text-[100px] font-extralight leading-[0.88] tracking-[-0.07em]">
          Digital moves,
          <br />
          practical
        </h1>

        <p className="mt-8 text-gray-300 text-[22px] leading-[1.35] max-w-[460px]">
          Structure, clarity, and action — built to
          <br />
          help businesses adopt digital tools
          <br />
          with confidence.
        </p>

        <div className="mt-10 flex justify-center">
          <div
            ref={tabletCardRef}
            className="w-[350px] bg-[#f1f1f1] text-black shadow-2xl will-change-transform"
          >
            <img
              src={personImg}
              alt="Founder"
              className="w-full h-[360px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="text-[20px] font-medium leading-[1.15]">
                Er.Venkat <br /> Chennakrishnan
              </h3>

              <div className="mt-8 flex justify-between text-[13px] font-semibold">
                <p>Founder & CEO</p>
                <p className="text-right">
                  Quality Group of <br /> Companies
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-12 ml-auto list-disc pl-6 max-w-[560px] text-gray-300 text-[20px] leading-[1.5] space-y-2">
          <li>Small businesses. Clear direction.</li>
          <li>A practical path into digital adoption.</li>
          <li>Helping businesses move from offline to online.</li>
          <li>See how ideas become digital progress.</li>
        </ul>

        <h2 className="mt-14 text-[96px] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
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

            <p className="mt-10 w-[420px] text-gray-300 text-[19px] leading-[1.3]">
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
              className="w-full h-[430px] object-cover object-top"
            />

            <div className="p-5">
              <h3 className="text-[19px] font-medium leading-[1.15]">
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

          <h2 className="mt-12 text-[110px] font-extralight leading-[0.9] tracking-[-0.08em] text-right">
            Business needs <br /> into digital solutions
          </h2>
        </div>
      </div>
    </section>
  );
}