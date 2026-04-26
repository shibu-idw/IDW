import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceImg1 from "../../assets/Service/serviceImg1.png";
import serviceImg2 from "../../assets/Service/serviceImg2.png";
import serviceImg3 from "../../assets/Service/serviceImg3.png";
import serviceImg4 from "../../assets/Service/serviceImg4.png";
import serviceImg5 from "../../assets/Service/serviceImg5.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    bg: "bg-black text-white",
    img: serviceImg1,
    idStyle: "text-[70px] font-bold opacity-20",
    titleStyle: "text-md text-[50px] font-semibold",
    middleTitleStyle: "text-[18px] font-semibold",
    middleDescStyle: "text-md text-[12px] opacity-70",
    rightTitleStyle: "text-[18px] font-semibold",
    rightDescStyle: "text-md text-[12px] opacity-70",
    leftTitle: "Approach",
    leftTitleStyle: "text-[15px] font-semibold",
    middle: [
      {
        title: "Content Marketing",
        desc: "Blogs, articles, SEO content, newsletters, landing page copy, video scripts, case studies, and content calendars that attract, educate, and convert customers.",
      },
      {
        title: "Performance Marketing",
        desc: "High-converting paid campaigns focused on leads, traffic, and sales through Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, and remarketing.",
      },
      {
        title: "Digital Advertising",
        desc: "Search ads, display ads, social ads, video ads, retargeting, app promotion campaigns, and multi-platform ad management.",
      },
    ],
    right: [
      {
        title: "Social Media Marketing",
        desc: "Content strategy, posts, reels, stories, captions, community management, and audience growth across Instagram, LinkedIn, Facebook, X, and YouTube.",
      },
      {
        title: "Search Optimization",
        desc: "High-converting paid campaigns focused on leads, traffic, and sales through Google Ads, Meta Ads, LinkedIn Ads, YouTube Ads, and remarketing.",
      },
      {
        title: "Campaign Management",
        desc: "Product launches, seasonal campaigns, awareness campaigns, lead generation, funnel planning, and end-to-end campaign execution.",
      },
    ],
  },
  {
    id: "02",
    title: "Design & Development",
    bg: "bg-[#D0CECE] text-black",
    img: serviceImg2,
    idStyle: "text-[70px] font-bold opacity-20",
    titleStyle: "text-md text-[40px] font-semibold",
    middleTitleStyle: "text-[14px] font-semibold",
    middleDescStyle: "text-xs text-[12px] opacity-70",
    rightTitleStyle: "text-[18px] font-semibold",
    rightDescStyle: "text-md text-[12px] opacity-70",
    leftTitle: "Approach",
    leftTitleStyle: "text-[15px] font-semibold",
    middle: [
      {
        title: "UI/UX Design ",
        desc: "User research, wireframes, prototypes, user journeys, interface design, and usability testing for seamless digital experiences",
      },
      {
        title: "Website Mobile App Design & Development ",
        desc: "Business websites, portfolio websites, e-commerce stores, landing pages, and fully responsive web experiences.-Android, iOS, and cross-platform app design and development with intuitive user experiences",
      },
      {
        title: "Website Optimization",
        desc: "Speed optimization, mobile responsiveness, SEO-friendly structure, accessibility, and conversion-focused improvements.",
      },
    ],
    right: [
      {
        title: "Product Design",
        desc: "End-to-end digital product design including concept development, feature planning, interaction design, and user flows.",
      },
      {
        title: "Front-End & Back-End Development",
        desc: "Fast, responsive, and interactive interfaces built for web and mobile platforms.-Secure, scalable, and efficient systems, APIs, databases, and platform architecture",
      },
      {
        title: "Maintenance & Support",
        desc: "Ongoing updates, troubleshooting, security, feature improvements, and technical support.",
      },
    ],
  },
  {
    id: "03",
    title: "Branding & Strategy",
    bg: "bg-black text-white",
    img: serviceImg3,
    idStyle: "text-[70px] font-bold opacity-20",
    titleStyle: "text-md text-[50px] font-semibold",
    middleTitleStyle: "text-[18px] font-semibold",
    middleDescStyle: "text-md text-[12px] opacity-70",
    rightTitleStyle: "text-[18px] font-semibold",
    rightDescStyle: "text-md text-[12px] opacity-70",
    leftTitle: "Approach",
    leftTitleStyle: "text-[15px] font-semibold",
    middle: [
      {
        title: "Brand Identity",
        desc: "Logo & Logo design, typography, color palette, visual systems, brand guidelines, and brand assets.",
      },
      {
        title: "Content Strategy",
        desc: "Planning what content to create, which channels to use, and how to maintain a consistent brand message.",
      },
      {
        title: "Buyer Persona Development",
        desc: "Creating detailed customer profiles to better understand and target ideal audiences.",
      },
    ],
    right: [
      {
        title: "Brand Strategy",
        desc: "Positioning, audience definition, market analysis, competitor research, tone of voice, and long-term brand direction.",
      },
      {
        title: "Audience Segmentation",
        desc: "Defining customer groups based on behavior, interests, demographics, and buying patterns.",
      },
      {
        title: "Campaign Strategy ",
        desc: "Launch planning, communication strategy, marketing funnels, and platform-specific campaign ideas.",
      },
    ],
  },
  {
    id: "04",
    title: "Analytics & Reporting",
    bg: "bg-black text-white",
    img: serviceImg4,
    idStyle: "text-[70px] font-bold opacity-20",
    titleStyle: "text-md text-[50px] font-semibold",
    middleTitleStyle: "text-[18px] font-semibold",
    middleDescStyle: "text-md text-[12px] opacity-70",
    rightTitleStyle: "text-[18px] font-semibold",
    rightDescStyle: "text-md text-[12px] opacity-70",
    leftTitle: "Approach",
    leftTitleStyle: "text-[15px] font-semibold",
    middle: [
      {
        title: "Website Analytics ",
        desc: "Tracking traffic, visitor behavior, bounce rate, page performance, and conversions through tools like Google Analytics.",
      },
      {
        title: "Social Media Analytics",
        desc: "Follower growth, engagement rate, content performance, audience insights, and platform reporting.",
      },
      {
        title: " A/B Testing",
        desc: "Testing different content, ads, landing pages, and user experiences to improve results.",
      },
    ],
    right: [
      {
        title: "Campaign Reporting",
        desc: "Measuring reach, impressions, clicks, engagement, conversions, and ROI across all campaigns.",
      },
      {
        title: "Conversion Tracking",
        desc: "Funnel setup, lead tracking, event tracking, purchase tracking, and customer journey analysis.",
      },
      {
        title: "Data Insights",
        desc: "Identifying trends, customer behavior, growth opportunities, and actionable recommendations.",
      },
    ],
  },
  {
    id: "05",
    title: "Digital Consulting",
    bg: "bg-[#D0CECE] text-black",
    img: serviceImg5,
    idStyle: "text-[70px] font-bold opacity-20",
    titleStyle: "text-md text-[50px] font-semibold",
    middleTitleStyle: "text-[18px] font-semibold",
    middleDescStyle: "text-md text-[12px] opacity-70",
    rightTitleStyle: "text-[18px] font-semibold",
    rightDescStyle: "text-md text-[12px] opacity-70",
    leftTitle: "Approach",
    leftTitleStyle: "text-[15px] font-semibold",
    middle: [
      {
        title: "Business Consulting",
        desc: "Digital transformation, business growth planning, market positioning, and process improvement.",
      },
      {
        title: "Digital Audit",
        desc: "Reviewing your existing website, brand, content, campaigns, and platforms to identify gaps and opportunities.",
      },
      {
        title: "Technology & Automation Consulting",
        desc: "Recommendations for AI tools, automation, integrations, workflows, and digital systems.",
      },
    ],
    right: [
      {
        title: "Market Research",
        desc: "Industry research, competitor analysis, trend forecasting, customer insights, and demand analysis.",
      },
      {
        title: "Go-to-Market Strategy",
        desc: "Launch planning, audience targeting, pricing strategy, channel selection, and campaign preparation.",
      },
      {
        title: "Platform Consulting",
        desc: "Guidance on selecting the right CRM, CMS, analytics tools, ad platforms, and automation systems",
      },
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      gsap.set(containerRef.current, {
        perspective: 2200,
        transformStyle: "preserve-3d",
      });

      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          inset: 0,
          zIndex: i + 1,
          yPercent: i === 0 ? 0 : 120,
          scale: 1,
          rotateX: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 130}%`,
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        const next = cards[i + 1];

        if (i !== cards.length - 1) {
          tl.to(card, {
            scale: 0.8,
            x: 40,
            y: -20,
            rotate: 1,
            duration: 0.4,
            ease: "none",
          });
          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            opacity: 0,
            duration: 0.4,
            ease: "none",
          });
          if (next) {
            tl.to(next, {
              yPercent: 0,
              duration: 0.8,
              ease: "power2.out",
            }, "-=0.3");
          }
        }

        if (i === cards.length - 1) {
          tl.to(card, {
            scale: 0.5,
            x: 80,
            y: -70,
            rotate: 4,
            rotateX: 60,
            transformOrigin: "center center",
            opacity: 0,
            duration: 0.7,
            ease: "power2.in",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gray-200 h-screen overflow-hidden">
      {services.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="card h-screen"
        >
          <div className={`relative w-full h-full shadow-2xl ${item.bg}`}>

            {/* ===================== MOBILE LAYOUT (below 768px) ===================== */}
            <div className="flex flex-col md:hidden h-full px-5 pt-5 overflow-hidden relative">
              <div className="absolute top-0 right-3 text-[100px] font-bold opacity-[0.07] leading-none pointer-events-none">
                {item.id}
              </div>
              <h1 className={`${item.titleStyle} text-[32px] leading-[1.05] mb-2 relative z-10 flex-shrink-0`}>
                {item.title.split(" ").map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-[9px] uppercase tracking-[1.5px] opacity-40 font-medium mb-2 relative z-10 flex-shrink-0">
                {item.leftTitle}
              </p>
              <div className="grid grid-cols-6 gap-x-3 gap-y-2 flex-1 min-h-0 overflow-hidden relative z-10">
                {[...item.middle, ...item.right].map((s, i) => (
                  <div key={i} className="col-span-3 flex flex-col gap-[1px]">
                    <h4 className="text-[10px] font-semibold leading-tight">{s.title}</h4>
                    <p className="text-[8px] opacity-50 leading-snug">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end py-1.5 relative z-10 flex-shrink-0">
                <button className="bg-blue-700 text-white px-4 py-1.5 rounded-lg text-[11px] font-medium">
                  Get started →
                </button>
              </div>
              <div className="h-[120px] flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-t-xl" />
              </div>
            </div>

            {/* ===================== TABLET LAYOUT (768px - 1023px) ===================== */}
            {/* ===================== TABLET LAYOUT (768px - 1023px) ===================== */}
<div className="hidden md:flex lg:hidden flex-col h-full px-6 py-4 overflow-hidden relative">

  {/* Number */}
  <div className={`absolute top-3 right-5 ${item.idStyle} text-[40px]`}>
    {item.id}
  </div>

  {/* Title */}
  <h1 className={`${item.titleStyle} text-[30px] leading-[1.05] mb-1 flex-shrink-0`}>
    {item.title.split(" ").map((word, i) => (
      <span key={i} className="block">{word}</span>
    ))}
  </h1>

  {/* Left title */}
  <p className="text-[10px] uppercase tracking-[1.5px] opacity-50 font-medium mb-2 flex-shrink-0">
    {item.leftTitle}
  </p>

  {/* Middle + Right - 6 col grid - tight spacing */}
  <div className="grid grid-cols-6 gap-x-3 gap-y-1.5 flex-shrink-0">
    {item.middle.map((m, i) => (
      <div key={`m-${i}`} className="col-span-3 flex flex-col gap-[1px]">
        <h4 className="text-[10px] font-semibold leading-tight">{m.title}</h4>
        <p className="text-[8px] opacity-60 leading-snug">{m.desc}</p>
      </div>
    ))}
    {item.right.map((r, i) => (
      <div key={`r-${i}`} className="col-span-3 flex flex-col gap-[1px]">
        <h4 className="text-[10px] font-semibold leading-tight">{r.title}</h4>
        <p className="text-[8px] opacity-60 leading-snug">{r.desc}</p>
      </div>
    ))}
  </div>

  {/* Button center */}
  <div className="flex justify-center py-2 flex-shrink-0">
    <button className="bg-blue-600 text-white px-6 py-1.5 rounded-md text-[11px] font-medium">
      Get started →
    </button>
  </div>

  {/* Image - flex-1 takes all remaining space */}
  <div className="flex-1 min-h-0">
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover rounded-t-xl"
    />
  </div>

</div>

            {/* ===================== DESKTOP LAYOUT (1024px+) ===================== */}
            <div className="hidden lg:grid grid-cols-12 gap-6 h-full px-10 py-10">

              {/* Title */}
              <div className="col-span-12">
                <h1 className={`${item.titleStyle} leading-[1.1] text-[50px]`}>
                  {(() => {
                    const words = item.title.split(" ");
                    if (words.includes("&")) {
                      const firstLine = words.slice(0, words.indexOf("&") + 1).join(" ");
                      const secondLine = words.slice(words.indexOf("&") + 1).join(" ");
                      return (
                        <>
                          <span className="block">{firstLine}</span>
                          <span className="block">{secondLine}</span>
                        </>
                      );
                    }
                    return words.map((word, index) => (
                      <span key={index} className="block">{word}</span>
                    ));
                  })()}
                </h1>
              </div>

              {/* Approach */}
              <div className="col-span-2">
                <h2 className={`${item.leftTitleStyle} text-[15px]`}>{item.leftTitle}</h2>
              </div>

              {/* Middle + Right */}
              <div className="col-span-6 grid grid-cols-2 gap-6 overflow-hidden">
                <div className="space-y-3 overflow-hidden">
                  {item.middle.map((m, index) => (
                    <div key={index}>
                      <h3 className={`${item.middleTitleStyle} text-[18px]`}>{m.title}</h3>
                      <p className={`${item.middleDescStyle} text-[12px]`}>{m.desc}</p>
                    </div>
                  ))}
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
                    Get started →
                  </button>
                </div>
                <div className="space-y-3 overflow-hidden">
                  {item.right.map((r, index) => (
                    <div key={index}>
                      <h3 className={`${item.rightTitleStyle} text-[18px]`}>{r.title}</h3>
                      <p className={`${item.rightDescStyle} text-[12px]`}>{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="col-span-4 flex items-end justify-end">
                <img src={item.img} alt={item.title} className="w-full h-auto max-w-sm rounded-lg object-cover" />
              </div>

              {/* Number */}
              <div className={`absolute top-6 right-10 ${item.idStyle} text-[70px]`}>
                {item.id}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;