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
    middleTitleStyle: "text-[18px] font-semibold",
    middleDescStyle: "text-md text-[12px] opacity-70",
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
        desc: "-Business websites, portfolio websites, e-commerce stores, landing pages, and fully responsive web experiences.-Android, iOS, and cross-platform app design and development with intuitive user experiences",
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
        desc: "-Fast, responsive, and interactive interfaces built for web and mobile platforms.-Secure, scalable, and efficient systems, APIs, databases, and platform architecture",
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
  const containerRef = useRef();

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    gsap.set(cards, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    });

    gsap.set(cards, {
      zIndex: (i, target, arr) => arr.length - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
        i,
      );
      tl.to(
        cards[i - 1],
        { y: -100, opacity: 0, scale: 0.9, duration: 1, ease: "power3.out" },
        i,
      );
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gray-200 h-screen overflow-hidden"
    >
      {services.map((item) => (
        <div
          key={item.id}
          className="card h-screen flex justify-center items-center"
        >
          <div className={`relative w-full h-full shadow-2xl ${item.bg}`}>
            {/* ===================== MOBILE LAYOUT (below 768px) ===================== */}
            <div className="flex flex-col md:hidden h-full px-5 pt-7 overflow-hidden relative">
              {/* Ghost number */}
              <div className="absolute top-0 right-3 text-[100px] font-bold opacity-[0.07] leading-none pointer-events-none">
                {item.id}
              </div>

              {/* Title */}
              <h1
                className={`${item.titleStyle} text-[44px] leading-[1.05] mb-4 relative z-10`}
              >
                {item.title.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Approach label */}
              <p className="text-[10px] uppercase tracking-[1.5px] opacity-40 font-medium mb-3 relative z-10">
                {item.leftTitle}
              </p>

              {/* 6-column content grid */}
              <div className="grid grid-cols-6 gap-x-3 gap-y-3 flex-1 overflow-hidden relative z-10">
                {[...item.middle, ...item.right].map((s, i) => (
                  <div key={i} className="col-span-3 flex flex-col gap-[2px]">
                    <h4 className="text-[11px] font-semibold leading-tight">
                      {s.title}
                    </h4>
                    <p className="text-[9px] opacity-50 leading-snug">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button row */}
              <div className="flex items-center justify-center py-2 relative z-10">
                <button className="bg-blue-700 text-white px-4 py-2 text-[11px] font-medium">
                  Get started →
                </button>
              </div>

              {/* Bottom image */}
              <div className="h-[150px] flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
            </div>

            {/* ===================== TABLET + DESKTOP LAYOUT (768px+) ===================== */}
            <div className="hidden md:grid grid-cols-12 gap-6 h-full px-8 lg:px-10 py-8 lg:py-10">
              {/* Title */}
              <div className="md:col-span-12">
                <h1
                  className={`${item.titleStyle} leading-[1.1] text-[36px] lg:text-[50px]`}
                >
                  {(() => {
                    const words = item.title.split(" ");
                    if (words.includes("&")) {
                      const firstLine = words
                        .slice(0, words.indexOf("&") + 1)
                        .join(" ");
                      const secondLine = words
                        .slice(words.indexOf("&") + 1)
                        .join(" ");
                      return (
                        <>
                          <span className="block">{firstLine}</span>
                          <span className="block">{secondLine}</span>
                        </>
                      );
                    }
                    return words.map((word, index) => (
                      <span key={index} className="block">
                        {word}
                      </span>
                    ));
                  })()}
                </h1>
              </div>

              {/* Approach */}
              <div className="md:col-span-2">
                <h2 className={`${item.leftTitleStyle} text-sm lg:text-lg`}>
                  {item.leftTitle}
                </h2>
              </div>

              {/* Middle + Right content */}
              <div className="md:col-span-6 grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-2 lg:space-y-3">
                  {item.middle.map((m, index) => (
                    <div key={index}>
                      <h3
                        className={`${item.middleTitleStyle} text-[13px] lg:text-[18px]`}
                      >
                        {m.title}
                      </h3>
                      <p
                        className={`${item.middleDescStyle} text-[10px] lg:text-[12px]`}
                      >
                        {m.desc}
                      </p>
                    </div>
                  ))}
                  <button className="mt-2 lg:mt-4 px-3 lg:px-4 py-1.5 lg:py-2 bg-blue-600 text-white rounded-md text-xs lg:text-sm">
                    Get started →
                  </button>
                </div>
                <div className="space-y-2 lg:space-y-3">
                  {item.right.map((r, index) => (
                    <div key={index}>
                      <h3
                        className={`${item.rightTitleStyle} text-[13px] lg:text-[18px]`}
                      >
                        {r.title}
                      </h3>
                      <p
                        className={`${item.rightDescStyle} text-[10px] lg:text-[12px]`}
                      >
                        {r.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-4 flex items-end justify-end">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto max-w-[200px] lg:max-w-sm rounded-lg object-cover"
                />
              </div>

              {/* Number - tablet + desktop */}
              <div
                className={`absolute top-4 right-6 lg:top-6 lg:right-10 ${item.idStyle} text-[50px] lg:text-[70px]`}
              >
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
