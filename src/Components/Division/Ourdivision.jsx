import { motion, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Images from public folder ✅
const ig1 = "/assets/division/ig1.png";
const ig2 = "/assets/division/ig2.png";
const ig3 = "/assets/division/ig3.png";
const ig4 = "/assets/division/ig4.png";
const ig5 = "/assets/division/ig5.png";
const ig6 = "/assets/division/ig6.png";
const ig7 = "/assets/division/ig7.png";

// Logos ✅
const logo1 = "/assets/division/Log1.png";
const logo2 = "/assets/division/Log2.png";
const logo3 = "/assets/division/Log3.png";
const logo4 = "/assets/division/Log4.png";
const logo5 = "/assets/division/Log5.png";
const logo6 = "/assets/division/Log6.png";
const logo7 = "/assets/division/Log7.png";
const data = [
  {
    logo: logo1,
    title: "Quality Groups Of Companies",
    img: ig1,
    link: "https://www.qgc.org.in/",
    desc: "Quality Groups specializes in Market Surveys, Market Demand Analysis, Digital Marketing, Digital Advertising and Business Consulting. Quality Groups is more than a service provider; we are your dedicated partner in achieving your business goals."
  },
  {
    logo: logo2,
    title: "Quality Building Construction (QBC)",
    img: ig2,
    link: "https://www.example.com/",
    desc: "Quality Building Construction is a premier construction company, where innovation meets craftsmanship in the dynamic realm of building construction. Quality Building Construction stands ready to bring your vision to life. Join us on a journey where innovation meets reliability."
  },
  {
    logo: logo3,
    title: "Quality Global Machines (QGM)",
    img: ig3,
    link: "https://www.example.com/",
    desc: "Quality Building Material company is your one-stop destination for comprehensive building solutions that redefine the very essence of construction. Our extensive range of building materials showcases the latest innovations in construction, ensuring structural integrity and longevity."
  },
  {
    logo: logo4,
    title: "Q Store (Online Marketplace)",
    img: ig4,
    link: "https://www.q-store.co.in/",
    desc: "Q Store is an innovative online marketplace that transcends traditional boundaries by offering a diverse range of products, from everyday groceries to exquisite diamonds. Experience the future of online shopping with Q Store, where convenience, diversity and excellence converge to redefine your shopping experience."
  },
  {
    logo: logo5,
    title: "Quick Financial Service (QFS)",
    img: ig5,
    link: "https://www.example.com/",
    desc: "Quick Financial Service proprietorship specializes in providing a range of financial services that cater to your unique needs, ensuring access to Home Loans, Business Loans, Personal Loans, Mortgage Loans, Secured Loans & Unsecured Loans. We strive to provide transparent and flexible solutions that align with your financial goals."
  },
  {
    logo: logo6,
    title: "Quality Building Materials (QBM)",
    img: ig6,
    link: "https://qbmindia.co.in/page-209e5",
    desc: "Quality Global Machinery company is your gateway to cutting-edge machinery solutions that span across industries and applications. Our portfolio of industrial machines encompasses a wide range of solutions designed to meet the demands of various sectors."
  },
  {
    logo: logo7,
    title: "Q Incense (Manufacturing)",
    img: ig7,
    link: "https://www.example.com/",
    desc: "Q Incense is a leading manufacturer of best quality of Agarbathi, Dhoopstick, Camphor and Sambrani. We understand the profound cultural significance and spiritual importance of aromatic products."
  }
];

const loopData = [...data, ...data, ...data];

export default function OurDivisions() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isDragging.current) return;

      const originalWidth = (300 + 42) * data.length;

      if (container.scrollLeft >= originalWidth) {
        container.scrollLeft = container.scrollLeft - originalWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  const handleMouseEnter = () => {
    if (isDesktop) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging.current && isDesktop) {
      controls.start({
        x: [containerRef.current?.scrollLeft || 0, -((300 + 42) * data.length * 2)],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity
        }
      });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    controls.stop();
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      if (isDesktop) {
        controls.start({
          x: [containerRef.current.scrollLeft, -((300 + 42) * data.length * 2)],
          transition: {
            duration: 60,
            ease: "linear",
            repeat: Infinity
          }
        });
      }
    }
  };

  const displayData = isDesktop ? loopData : data;

  return (
    <div className="w-full bg-[#f5f5f5] py-15 md:py-25 lg:py-24">

      {/* Title */}
      <div className="px-[20px] md:px-[40px] lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-black font-semibold mb-6 tracking-widest text-lg md:text-2xl font-[Inter]">
            /OUR DIVISIONS/
          </p>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="overflow-x-auto overflow-y-hidden"
        style={{
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          handleMouseUp();
          handleMouseLeave();
        }}
      >
        <div className="flex">
          <motion.div
            className="flex gap-[42px] px-[20px] md:px-[40px] lg:px-20"
            animate={isDesktop ? controls : {}}
            initial={{ x: 0 }}
            style={{
              display: "flex",
              flexDirection: "row"
            }}
            onViewportEnter={() => {
              if (isDesktop) {
                controls.start({
                  x: [0, -((300 + 42) * data.length * 2)],
                  transition: {
                    duration: 90,
                    ease: "linear",
                    repeat: Infinity
                  }
                });
              }
            }}
          >
            {displayData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col min-w-[85vw] md:min-w-[45vw] lg:min-w-[300px] min-h-[600px] pt-[10px] md:pt-[15px] pb-[60px] md:pb-[70px] lg:pb-[40px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col flex-1">

                  <img
                    src={item.logo}
                    alt=""
                    className="h-[55px] mb-[28px] object-contain object-left"
                  />

                  <h3
                    className="mb-[16px] h-[52px] overflow-hidden"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "130%",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {item.title}
                  </h3>

                  <div className="w-full h-[200px] mb-[16px] overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <p
                    className="min-h-[180px] mb-[20px]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      lineHeight: "150%",
                      color: "#7A7A7A",
                      textAlign: "justify"
                    }}
                  >
                    {item.desc}
                  </p>

                  <div className="flex items-center mt-auto pt-[20px] md:pt-[30px]">
                    <div
                      className="rounded-full flex items-center justify-center cursor-pointer"
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "1px solid #1E3A8A",
                      }}
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 13L13 3M13 3H5M13 3V11"
                          stroke="#1E3A8A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}