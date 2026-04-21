import { motion } from "framer-motion";

// import all logos & images
import ig1 from "../../assets/division/ig1.png";
import ig2 from "../../assets/division/ig2.png";
import ig3 from "../../assets/division/ig3.png";
import ig4 from "../../assets/division/ig4.png";
import ig5 from "../../assets/division/ig5.png";
import ig6 from "../../assets/division/ig6.png";
import ig7 from "../../assets/division/ig7.png";

import logo1 from "../../assets/division/logo1.png";
import logo2 from "../../assets/division/logo2.png";
import logo3 from "../../assets/division/logo3.png";
import logo4 from "../../assets/division/logo4.png";
import logo5 from "../../assets/division/logo5.png";
import logo6 from "../../assets/division/logo6.png";
import logo7 from "../../assets/division/logo7.png";

const data = [
  {
    logo: logo1,
    title: "Quality Groups Of Companies",
    img: img1,
    desc: "Quality Groups specializes in Market Surveys, Market Demand Analysis, Digital Marketing, Digital Advertising and Business Consulting."
  },
  {
    logo: logo2,
    title: "Quality Building Construction (QBC)",
    img: img2,
    desc: "Quality Building Construction is a premier construction company delivering innovation and craftsmanship."
  },
  {
    logo: logo3,
    title: "Quality Global Machines (QGM)",
    img: img3,
    desc: "Quality Building Material company is your one-stop destination for building solutions and innovation."
  },
  {
    logo: logo4,
    title: "Q Store (Online Marketplace)",
    img: img4,
    desc: "Q Store is an innovative online marketplace offering diverse products."
  },
  {
    logo: logo5,
    title: "Quick Financial Service (QFS)",
    img: img5,
    desc: "Quick Financial Service provides loans and financial solutions tailored to your needs."
  },
  {
    logo: logo6,
    title: "Quality Building Materials (QBM)",
    img: img6,
    desc: "QBM delivers high-quality construction materials across industries."
  },
  {
    logo: logo7,
    title: "Q Incense (Manufacturing)",
    img: img7,
    desc: "Q Incense manufactures premium aromatic products like Agarbathi and Sambrani."
  }
];

export default function OurDivisions() {
  return (
    <div className="w-full bg-[#eeeeee] px-[60px] py-[80px]">

      {/* Title */}
      <p
        className="mb-[40px]"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "16px"
        }}
      >
        /OUR DIVISIONS/
      </p>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-[40px]">
        
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <img src={item.logo} className="h-[40px] mb-[20px]" />

            {/* Title */}
            <h3
              className="mb-[16px]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "130%"
              }}
            >
              {item.title}
            </h3>

            {/* Image */}
            <img
              src={item.img}
              className="w-full h-[180px] object-cover mb-[16px]"
            />

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                lineHeight: "150%",
                color: "#7A7A7A"
              }}
            >
              {item.desc}
            </p>

            {/* Arrow */}
            <div className="mt-[16px] text-[18px]">↗</div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}