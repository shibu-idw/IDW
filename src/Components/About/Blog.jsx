import { useState } from "react";
import { ChevronDown } from "lucide-react";
import blog1 from "./../../assets/About/p9.png";
import blog2 from "./../../assets/About/p10.png";
import blog3 from "./../../assets/About/p11.png";
import authorImg from "./../../assets/About/p12.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Why SEO Alone Is Not Enough in 2026",
    preview:
      "SEO is no longer only about ranking on Google. Today, customers search through AI tools, voice assistants and answer engines.",
    fullText:
      "SEO is no longer only about ranking on Google. Today, customers search through AI tools, voice assistants and answer engines. That is why businesses now need GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) along with SEO. Businesses that optimize their content for AI-driven search are seeing more traffic and better conversions. In fact, AI-optimized websites are getting 320% more human traffic than those that are not. To stay visible in 2026, businesses should create content that answers real questions, use FAQs and structured headings, optimize for voice search and AI tools, and focus on user experience, not just keywords.",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
  {
    id: 2,
    image: blog2,
    title: "Short Videos Are Becoming the Most Powerful Marketing Tool",
    preview:
      "Short-form videos on Instagram Reels, YouTube Shorts and LinkedIn are now getting more attention than long text posts.",
    fullText:
      "Short-form videos on Instagram Reels, YouTube Shorts and LinkedIn are now getting more attention than long text posts. Customers want quick, visual and useful content. Brands that explain clearly in short formats are building trust faster and getting better engagement. Businesses should focus on simple storytelling, consistency, strong hooks in the first few seconds and a clear call to action.",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
  {
    id: 3,
    image: blog3,
    title: "Why Businesses Need a Website, Not Just Instagram",
    preview:
      "Many businesses depend only on Instagram or Facebook. But social media alone is not enough.",
    fullText:
      "Many businesses depend only on Instagram or Facebook. But social media alone is not enough. Algorithms change, reach drops and your business does not fully own that audience. A website gives credibility, full control, search visibility and a place where leads can convert properly. Social media should support a business, not become the full business foundation.",
    author: "Somanaath",
    date: "21 Apr 2025",
  },
];

function BlogCard({ blog, isOpen, onContentEnter, onContentLeave, onToggle }) {
  return (
    <div className="flex flex-col">
      {/* IMAGE */}
      <div className="overflow-hidden w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full object-cover h-[240px] sm:h-[280px] md:h-[320px] lg:h-[260px] xl:h-[300px]"
        />
      </div>

      {/* CONTENT */}
      <div
        className="pt-4 flex flex-col flex-1"
        onMouseEnter={onContentEnter}
        onMouseLeave={onContentLeave}
      >
        {/* TITLE ROW */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-[Poppins] text-[17px] sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[22px] font-medium leading-[1.2] tracking-[-0.03em] text-black">
            {blog.title}
          </h3>

          <button
            onClick={onToggle}
            className="shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#cfcfcf] text-[#8b8b8b] transition-all hover:border-black hover:text-black"
            aria-label="Expand blog content"
            type="button"
          >
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* TEXT EXPAND */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] mt-3 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-[80px] opacity-100"
          }`}
        >
          <p className="font-[Poppins] text-[#8d8d8d] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[16px] leading-[1.45]">
            {isOpen ? blog.fullText : blog.preview}
          </p>
        </div>

        {/* AUTHOR */}
        <div className="mt-5 flex items-center gap-3">
          <img
            src={authorImg}
            alt={blog.author}
            className="h-8 w-8 rounded-full object-cover shrink-0"
          />
          <p className="font-[Poppins] text-[#666666] text-[13px] sm:text-[14px] leading-none">
            {blog.author} · {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 xl:px-20 pt-12 sm:pt-16 md:pt-20 pb-14 sm:pb-16 md:pb-20 lg:pb-24">

        {/* ── HEADER ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,28%)_1fr] gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT LABEL */}
          <div className="pt-1">
            <h3 className="font-[Poppins] text-black font-semibold tracking-[-0.04em] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[28px] xl:text-[32px] leading-none">
              /IDW Blogs/
            </h3>
          </div>

          {/* RIGHT HEADING + BUTTON */}
          <div>
            {/* Mobile */}
            <h2 className="lg:hidden font-[Poppins] font-normal text-[28px] sm:text-[38px] md:text-[50px] leading-[1.2] tracking-[0em] text-black">
              Discover practical ideas that simplify digital growth for modern
              businesses. Insights built to inform, guide, and move businesses
              forward.
            </h2>

            {/* Desktop */}
            <h2 className="hidden lg:block font-[Poppins] font-normal text-[clamp(30px,2.8vw,42px)] leading-[1.3] tracking-[0em] text-black">
              Discover practical ideas that simplify
              <br />
              digital growth for modern businesses.
              <br />
              Insights built to inform, guide, and
              <br />
              move businesses forward.
            </h2>

            <button
              type="button"
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 border-b border-[#9e9e9e] pb-1.5 font-[Poppins] text-[#7a7a7a] hover:text-black transition text-[16px] sm:text-[18px] md:text-[20px]"
            >
              <span>View all blogs</span>
              <span className="text-[22px] leading-none">→</span>
            </button>
          </div>
        </div>

        {/* ── BLOG CARDS ── */}
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-7 xl:gap-8 items-start">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isOpen={openId === blog.id}
              onContentEnter={() => {
                if (window.innerWidth >= 1024) setOpenId(blog.id);
              }}
              onContentLeave={() => {
                if (window.innerWidth >= 1024) setOpenId(null);
              }}
              onToggle={() =>
                setOpenId((prev) => (prev === blog.id ? null : blog.id))
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}