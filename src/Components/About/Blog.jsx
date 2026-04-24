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
    <div>
      <div className="overflow-hidden bg-transparent">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[240px] sm:h-[300px] md:h-[360px] lg:h-[290px] xl:h-[320px] w-full object-cover"
        />
      </div>

      <div
        className="pt-4"
        onMouseEnter={onContentEnter}
        onMouseLeave={onContentLeave}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[90%] font-[Poppins] text-[19px] sm:text-[22px] md:text-[25px] lg:text-[23px] font-medium leading-[1.15] tracking-[-0.03em] text-black">
            {blog.title}
          </h3>

          <button
            onClick={onToggle}
            className="shrink-0 mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#cfcfcf] text-[#8b8b8b] transition hover:border-black hover:text-black"
            aria-label="Expand blog content"
            type="button"
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "max-h-[520px] opacity-100 mt-4" : "max-h-[92px] opacity-100 mt-4"
          }`}
        >
          <p className="font-[Poppins] text-[#8d8d8d] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[17px] leading-[1.35]">
            {isOpen ? blog.fullText : blog.preview}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <img
            src={authorImg}
            alt={blog.author}
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className="font-[Poppins] text-[#666666] text-[15px] sm:text-[16px] leading-none">
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
    <section className="w-full bg-[#f3f3f3]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 pt-12 sm:pt-16 md:pt-20 lg:pt-20 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 md:gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="font-[Poppins] text-black font-semibold tracking-[-0.04em] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[32px] leading-none">
              /IDW Blogs/
            </h3>
          </div>

          <div className="max-w-[980px]">
            {/* Mobile + Tablet heading */}
            <h2 className="lg:hidden font-[Poppins] font-normal text-[34px] sm:text-[46px] md:text-[58px] leading-[1.22] tracking-[0em] text-black">
              Discover practical ideas that simplify digital growth for modern
              businesses. Insights built to inform, guide, and move businesses
              forward.
            </h2>

            {/* Desktop heading */}
            <h2 className="hidden lg:block font-[Poppins] font-normal text-[42px] leading-[1.3] tracking-[0em] text-black max-w-[900px]">
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
              className="mt-8 sm:mt-10 inline-flex items-center gap-4 border-b border-[#9e9e9e] pb-2 font-[Poppins] text-[#7a7a7a] hover:text-black transition text-[18px] sm:text-[20px] md:text-[22px]"
            >
              <span>View all blogs</span>
              <span className="text-[24px] leading-none">→</span>
            </button>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-8 lg:gap-7 xl:gap-8 items-start">
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