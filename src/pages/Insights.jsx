import React, { useState , useEffect} from "react";
import { Helmet } from "react-helmet";
import NewsCover1 from "../images/article_1.png";
import NewsCover2 from "../images/article_2.png";
import NewsCover3 from "../images/article_3.png";
import NewsCover4 from "../images/article_4.jpeg";
import NewsCover5 from "../images/article_5.jpeg";


const FeaturedPosts = () => {
  const posts = [
    {
      title: "Quanfia's Sustainability Agent now completes SFDR Good Governance Assessments and Reporting with AI",
      date: "Mar 5, 2025",
      tags: ["Industry News"],
      link: "../auquans-sustainability-agent-completes-sfdr-good-governance-assessments-and-reporting-using-ai.html",
    },
    {
      title: "Quanfia Recognized by Gartner in the Emerging Market Quadrant for Generative AI - Knowledge Management Apps",
      date: "Feb 18, 2025",
      tags: ["Tech Leadership", "Company", "In The News"],
      link: "../auquan-recognized-in-the-emerging-market-quadra/general-productivity-in-the-2025-gartner-innovation-guide-for-generative-ai-technologies.html",
    },
    {
      title: "Quanfia named Strategic Intelligence Provider of the Year at the Private Equity Wire European Awards 2025",
      date: "Feb 14, 2025",
      tags: ["Company", "In The News"],
      link: "../auquan-named-strategic-intelligence-provider-of-the-year-at-the-private-equity-wire-european-awards-2025.html",
    },
    {
      title: "Quanfia Launches Industry's First AI Agent for Financial Services Sustainability Teams",
      date: "Feb 6, 2025",
      tags: ["In The News"],
      link: "../auquan-launches-industrys-first-ai-agent-for-financial-services-sustainability-teams.html",
    },
  ];

  const featuredPost = {
    title: "Business Insider Features Quanfia's AI Agent Innovation in Financial Services",
    date: "Feb 10, 2025",
    tags: ["Company", "In The News"],
    link: "../business-insider-features-auquans-ai-agent-innovation-in-financial-services.html",
    imageSrc: ImageCard1,
  };

  // ...existing code...

  return (
    <div className="bg-gradient-to-b from-[#EDEFFF] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8">
          
          {/* Featured Post Section */}
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Text Content - Left Side */}
              <div className="w-full md:w-1/2 p-8 bl__bnr-left">
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">Featured</h3>
                  <div className="mb-4">
                    <ul className="flex flex-wrap gap-2 text-[#7C8AFF] text-sm">
                      {featuredPost.tags.map((tag, index) => (
                        <li key={index}>
                          <a href={`../tag/${tag.toLowerCase().replace(/\s/g, "-")}.html`} 
                             className="hover:text-blue-400 transition-colors">
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <a href={featuredPost.link} className="hover:text-[#7C8AFF] transition-colors">
                      {featuredPost.title}
                    </a>
                  </h1>
                  <p className="text-gray-300 text-sm">{featuredPost.date}</p>
                </div>
              </div>

            {/* Image - Right Side */}
            <div className="w-full md:w-10/12 bl__bnr-right">
                <div className="relative h-full min-h-[300px] md:min-h-[300px] bg-[#16151E] overflow-hidden">
                    <img 
                        src={featuredPost.imageSrc} 
                        alt="Featured Post" 
                        className="absolute inset-0 w-full h-full object-cover transform scale-70 transition-transform duration-500 ease-in-out opacity-60 "
                    />
                </div>
            </div>
            </div>
            </div>

            {/* Other Posts */}
          <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <ul className="flex flex-wrap gap-2 text-[#7C8AFF] text-sm">
                    {post.tags.map((tag, index) => (
                      <li key={index}>
                        <a href={`../tag/${tag.toLowerCase().replace(/\s/g, "-")}.html`} 
                           className="hover:text-blue-400 transition-colors">
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <h2 className="text-xl font-semibold text-[#0B0D1F] mb-4">
                  <a href={post.link} className="hover:text-[#7C8AFF] transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-300 text-sm">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
);
};


const FilterMenu = () => {
  const filters = [
    { name: "All", link: "../index.html" },
    { name: "Industry News", link: "../tag/industry-news.html" },
    { name: "Company", link: "../tag/company.html" },
    { name: "In The News", link: "../tag/in-the-news.html" },
    { name: "Knowledge", link: "../tag/knowledge.html" },
    { name: "Tech Leadership", link: "../tag/tech-leadership.html" },
    { name: "Insights", link: "../tag/insights.html" },
    { name: "Product", link: "../tag/product.html" },
    { name: "Everything", link: "../tag/everything.html" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#9FA4E2] py-14">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {filters.map((filter, index) => (
            <li key={index} className="text-white text-sm font-medium">
              <a
                href={filter.link}
                className={`px-4 py-2 rounded-lg transition duration-300 ${
                  index === 0
                    ? "bg-white text-[#9FA4E2] font-semibold"
                    : "hover:bg-white hover:text-[#9FA4E2]"
                }`}
              >
                {filter.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



// Replace the existing ArticleList component with this updated version
const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const articles = [
    {
      title: "The Rise Of Artificial Intelligence In Finance",
      image: NewsCover1,
      link: "https://medium.com/@ravi8383soni/council-post-the-rise-of-artificial-intelligence-in-finance-a0ff393f7014",
      date: "Mar 7, 2025",
      tags: [
        { name: "Insights", link: "../tag/insights.html" },
        { name: "Industry News", link: "../tag/industry-news.html" },
      ],
    },
    {
      title: "The Role of AI in the Finance Industry!",
      image: NewsCover2,
      link: "https://www.linkedin.com/pulse/role-ai-finance-industry-manthan-bhavsar-qsqaf/",
      date: "May 1, 2024",
      tags: [{ name: "Industry News", link: "../tag/industry-news.html" }],
    },
    {
      title: "How Artificial Intelligence is Reshaping the Financial Industry",
      image: NewsCover3,
      link: "https://www.linkedin.com/pulse/ai-finance-how-artificial-intelligence-reshaping-financial-industry-yetfc/",
      date: "Mar 26, 2025",
      tags: [{ name: "Industry News", link: "../tag/industry-news.html" }],
    },
    {
      title: "Embracing AI in Finance and Accounting",
      image: NewsCover4,
      link: "https://www.linkedin.com/pulse/embracing-ai-finance-accounting-duane-casey-stbec/",
      date: "July 26, 2024",
      tags: [{ name: "Industry News", link: "../tag/industry-news.html" }],
    },
    
    {
      title: "How AI and ML are Transforming the Future of Accounting and Finance",
      image: NewsCover5,
      link: "https://www.linkedin.com/pulse/how-ai-ml-transforming-future-accounting-finance-akhtar-6rrnf/",
      date: "November 12, 2024",
      tags: [{ name: "Industry News", link: "../tag/industry-news.html" }],
    },
    
    
    // Add more articles as needed

  
  ];
  
  useEffect(() => {
    console.log('Image paths:', {
      NewsCover1,
      NewsCover2,
      NewsCover3,
      NewsCover4,
      NewsCover5
    });
  }, []);

  return (
    <section className="relative bg-[#0B0D1F] text-white py-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f12] to-[#0B0D1F]"></div>
        
        {/* Background patterns/overlays */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hubfs/hero-bg-v1.svg')" }}
        ></div>
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/hubfs/about-bnr-bg.svg')" }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-400 mb-4">
            Showing <span className="from-blue-300 to-blue-100">All Articles</span>
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-[#0A0B1C] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-900/30">
             {/* Article Image */}
              <div className="relative w-full h-[260px] overflow-hidden">
                <a href={article.link} className="block w-full h-full"  target="_blank"
                rel="noopener noreferrer">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform-gpu hover:scale-105 transition-transform duration-500 ease-out"
                    style={{ 
                      objectPosition: 'center top',
                      aspectRatio: '1024/1024'
                    }}
                    onError={(e) => {
                      console.error(`Error loading image: ${article.image}`);
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                </a>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Tags */}
                <ul className="flex flex-wrap gap-2 text-[#7C8AFF] text-sm mb-3">
                  {article.tags.map((tag, i) => (
                    <li key={i}>
                      <a 
                        href={tag.link} 
                        className="hover:text-blue-400 transition-colors"
                      >
                        {tag.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  <a 
                    href={article.link} 
                    className="hover:text-[#7C8AFF] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Date */}
                <p className="text-gray-400 text-sm">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-12 space-x-2">
          <button
            className={`px-4 py-2 border border-blue-500 text-blue-300 rounded-md transition-colors
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-900/30'}`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-md transition-colors ${
                currentPage === i + 1 
                  ? 'bg-blue-600/50 text-white border border-blue-500' 
                  : 'bg-transparent text-blue-300 border border-blue-500 hover:bg-blue-900/30'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 border border-blue-500 text-blue-300 rounded-md transition-colors
              ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-900/30'}`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>
        </div> */}
      </div>
    </section>
  );
};


// Update the main Insights component
const Insights = () => {
  return (
    <>
       <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Explore the latest insights, research, and thought leadership from Quanfia on AI in finance, investment strategies, and industry trends." />
      </Helmet>
      {/* <FeaturedPosts />
      <FilterMenu /> */}
      <ArticleList />
    </>
  );
};

export default Insights;


