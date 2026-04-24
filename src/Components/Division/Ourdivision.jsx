import { motion, useAnimation } from "framer-motion";

// Images
import ig1 from "../../assets/division/ig1.png";
import ig2 from "../../assets/division/ig2.png";
import ig3 from "../../assets/division/ig3.png";
import ig4 from "../../assets/division/ig4.png";
import ig5 from "../../assets/division/ig5.png";
import ig6 from "../../assets/division/ig6.png";
import ig7 from "../../assets/division/ig7.png";

// Logos
import logo1 from "../../assets/division/log1.png";
import logo2 from "../../assets/division/log2.png";
import logo3 from "../../assets/division/log3.png";
import logo4 from "../../assets/division/log4.png";
import logo5 from "../../assets/division/log5.png";
import logo6 from "../../assets/division/log6.png";
import logo7 from "../../assets/division/log7.png";

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

const loopData = [...data, ...data];

export default function OurDivisions() {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: [null, -2394],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  return (
    <div className="w-full bg-[#f5f5f5] px-6 md:px-10 lg:px-20 py-15 md:py-25 lg:py-24">

      {/* Title */}
      <div className="flex justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <p
            className="mb-[40px] lg:mb-[50px]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              letterSpacing: "0.08em"
            }}
          >
            /OUR DIVISIONS/
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex justify-center">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex gap-[42px]"
              animate={controls}
              initial={{ x: 0 }}
              onViewportEnter={() =>
                controls.start({
                  x: [0, -2394],
                  transition: {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity
                  }
                })
              }
            >
              {loopData.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col min-w-[260px] md:min-w-[280px] lg:min-w-[300px] min-h-[600px] pt-[40px] pb-[40px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col flex-1">

                    {/* ✅ ONLY CHANGE HERE */}
                    <img
                      src={item.logo}
                      alt=""
                      className="h-[60px] mb-[20px] object-contain object-left"
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
                      className="h-[180px]"
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

                    <div className="flex items-center mt-[60px]">
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

    </div>
  );
}