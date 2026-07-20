import { BlogPost, Category } from "../types/blog";

// ---------------------------------------------------------------------------
// Categories — derived from the real blog data
// When backend is integrated, fetch these from /api/categories
// ---------------------------------------------------------------------------
export const mockCategories: Category[] = [
  { id: "c1", name: "Funding News",          slug: "funding-news" },
  { id: "c2", name: "Success Story",         slug: "success-story" },
  { id: "c3", name: "Startup Profitability", slug: "startup-profitability" },
  { id: "c4", name: "News Update",           slug: "news-update" },
  { id: "c5", name: "Business",              slug: "business" },
  { id: "c6", name: "Technology",            slug: "technology" },
  { id: "c7", name: "Health",                slug: "health" },
];

// ---------------------------------------------------------------------------
// Helper — resolve category object by name
// ---------------------------------------------------------------------------
const cat = (name: string): Category =>
  mockCategories.find((c) => c.name === name) ??
  { id: "c0", name, slug: name.toLowerCase().replace(/\s+/g, "-") };

// ---------------------------------------------------------------------------
// Blog Posts — 36 real posts migrated from Blog_Data/blogs-data.json
// When backend is integrated, replace this array with a fetch from /api/posts
// ---------------------------------------------------------------------------
export const mockBlogs: BlogPost[] = [
  // ── 1 ──────────────────────────────────────────────────────────────────
  {
    id: "9",
    slug: "indias-ai-powered-pendant-thats-shaping-the-future-of-wearable-tech-9",
    title: "India's AI-Powered Pendant That's Shaping the Future of Wearable Tech",
    excerpt:
      "In an era where artificial intelligence is transforming how we work, communicate, and live, NeoSapien emerges as a game-changer in wearable tech. Their flagship product, the Neo 1 pendant, caught national attention...",
    thumbnailUrl: "/images/blogs/ai-powered-pendant-cover.jpg",
    author: "Angeltors.com",
    category: cat("Business"),
    publishedAt: "2025-09-24T00:00:00Z",
    readTimeMinutes: 12,
    featured: false,
    tags: ["SEO", "Coding"],
    content: [
      { type: "heading", text: "India's AI-Powered Pendant That's Shaping the Future of Wearable Tech" },
      { type: "paragraph", text: "In an era where artificial intelligence is transforming how we work, communicate, and live, NeoSapien emerges as a game-changer in wearable tech. Their flagship product, the Neo 1 pendant, caught national attention after a memorable pitch on Shark Tank India Season 4. Dubbed the \"Second Brain\", this AI-powered wearable is designed to enhance memory, boost productivity, and improve emotional connections — all from a pendant around your neck." },
      { type: "paragraph", text: "With a blend of personal vision, cutting-edge technology, and emotional storytelling, NeoSapien is creating waves as the first AI-native wearable focused on mental productivity in India." },
      { type: "heading", text: "The Founders Vision Behind NeoSapien" },
      { type: "paragraph", text: "The minds behind NeoSapien are Dhananjay Yadav, an MBA graduate from Christ University (Gwalior), and Aryan Yadav, an IIT Madras alumnus (Indore). Cousins by relation, co-founders by mission — their journey into wearable tech was not born in a lab, but from a deep emotional experience." },
      { type: "paragraph", text: "Dhananjay lost a loved one due to memory-related issues. The trauma sparked a critical question: What if people had a companion that could help them remember what truly matters — thoughts, tasks, and conversations?" },
      { type: "heading", text: "What Is Neo 1? A Wearable That Thinks With You" },
      { type: "paragraph", text: "Unlike conventional wearables that track physical health metrics, Neo 1 is built to enhance cognitive productivity and emotional awareness. The pendant works in real time, listening to your conversations (with consent), detecting important cues, and storing information that can later be surfaced as reminders, summaries, or actionable tasks via its companion mobile app." },
      { type: "heading", text: "Key Features" },
      { type: "list", items: ["Real-Time Conversation Tracking & Transcription", "AI-Powered Summary Generation", "Emotion Insight Detection (EI)", "Task Creation from Voice Cues", "End-to-End Encryption & Privacy Controls", "Minimalist Design Optimized for Daily Wear"] },
      { type: "paragraph", text: "At its core lies the Second Brain OS — NeoSapien's proprietary AI engine that powers voice interpretation, emotion detection, and context mapping." },
      { type: "heading", text: "Shark Tank India: A Game-Changing Moment" },
      { type: "paragraph", text: "NeoSapien's pitch on Shark Tank India Season 4 stood out not just for its innovation, but for its vision. The founders asked for ₹80 lakh in exchange for 2.5% equity, valuing the company at ₹32 crore." },
      { type: "heading", text: "Final Deal" },
      { type: "list", items: ["₹80 lakh for 4% equity", "Lead Investor: Namita Thapar", "Condition: Prioritize mental wellness as the primary use case within one year", "Advisory Support: Anupam Mittal (informally)"] },
      { type: "paragraph", text: "With the AI wearables market projected to hit USD 138.5 billion by 2029, NeoSapien aims to carve its niche by being India's first AI-native personal companion device." },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────
  {
    id: "10",
    slug: "neosapien-indias-ai-powered-pendant-10",
    title: "NeoSapien: India's AI-Powered Pendant That's Shaping the Future of Wearable Tech",
    excerpt:
      "With a blend of personal vision, cutting-edge technology, and emotional storytelling, NeoSapien is creating waves as the first AI-native wearable focused on mental productivity in India...",
    thumbnailUrl: "/images/blogs/startup-investment-advisory-cover.jpg",
    author: "Angeltors.com",
    category: cat("Health"),
    publishedAt: "2025-09-24T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["Angel & Venture Investing", "Angel Investment", "Startup Insights"],
    content: [
      { type: "heading", text: "NeoSapien: India's AI-Powered Pendant" },
      { type: "paragraph", text: "With a blend of personal vision, cutting-edge technology, and emotional storytelling, NeoSapien is creating waves as the first AI-native wearable focused on mental productivity in India." },
      { type: "heading", text: "The Founders Vision Behind NeoSapien" },
      { type: "paragraph", text: "The minds behind NeoSapien are Dhananjay Yadav, an MBA graduate from Christ University (Gwalior), and Aryan Yadav, an IIT Madras alumnus (Indore). Cousins by relation, co-founders by mission." },
      { type: "heading", text: "What Is Neo 1?" },
      { type: "paragraph", text: "Unlike conventional wearables that track physical health metrics, Neo 1 is built to enhance cognitive productivity and emotional awareness." },
      { type: "heading", text: "Key Features" },
      { type: "list", items: ["Real-Time Conversation Tracking & Transcription", "AI-Powered Summary Generation", "Emotion Insight Detection (EI)", "Task Creation from Voice Cues", "End-to-End Encryption & Privacy Controls", "Minimalist Design Optimized for Daily Wear"] },
      { type: "heading", text: "Shark Tank India: A Game-Changing Moment" },
      { type: "paragraph", text: "NeoSapien's pitch on Shark Tank India Season 4 stood out not just for its innovation, but for its vision. The founders asked for ₹80 lakh in exchange for 2.5% equity, valuing the company at ₹32 crore." },
      { type: "heading", text: "Target Audience & Applications" },
      { type: "list", items: ["Knowledge Workers & Creators: Note-taking, task tracking, brainstorming capture", "Students: Lecture summarization, time management", "Mental Health Advocates: Emotion awareness, mood regulation", "Professionals: Meeting insights, productivity tracking"] },
      { type: "paragraph", text: "With the AI wearables market projected to hit USD 138.5 billion by 2029, NeoSapien aims to carve its niche by being India's first AI-native personal companion device." },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────
  {
    id: "11",
    slug: "indias-first-mental-wellness-wearable-11",
    title: "India's First Mental Wellness Wearable Redefining Stress Management",
    excerpt:
      "In an era where artificial intelligence is transforming how we work, communicate, and live, NeoSapien emerges as a game-changer in wearable tech...",
    thumbnailUrl: "/images/blogs/startup-consulting-cover.jpg",
    author: "Angeltors.com",
    category: cat("Business"),
    publishedAt: "2025-09-24T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["Angel Investment", "Startup News"],
    content: [
      { type: "heading", text: "India's First Mental Wellness Wearable Redefining Stress Management" },
      { type: "paragraph", text: "In an era where artificial intelligence is transforming how we work, communicate, and live, NeoSapien emerges as a game-changer in wearable tech. Their flagship product, the Neo 1 pendant, caught national attention after a memorable pitch on Shark Tank India Season 4." },
      { type: "paragraph", text: "Dubbed the \"Second Brain\", this AI-powered wearable is designed to enhance memory, boost productivity, and improve emotional connections — all from a pendant around your neck." },
      { type: "heading", text: "The Founders Vision Behind NeoSapien" },
      { type: "paragraph", text: "The minds behind NeoSapien are Dhananjay Yadav, an MBA graduate from Christ University (Gwalior), and Aryan Yadav, an IIT Madras alumnus (Indore)." },
      { type: "heading", text: "Final Deal" },
      { type: "list", items: ["₹80 lakh for 4% equity", "Lead Investor: Namita Thapar", "Condition: Prioritize mental wellness as the primary use case within one year"] },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────
  {
    id: "24",
    slug: "the-future-animations-the-startup-story-24",
    title: "The Future Animations: The Startup Story of Animation Industry!",
    excerpt:
      "The Future Animation, based in New Delhi, has rapidly emerged as a prominent name in the digital storytelling and animation industry...",
    thumbnailUrl: "/images/blogs/future-animations-cover.jpg",
    author: "Angeltors.com",
    category: cat("Technology"),
    publishedAt: "2025-09-25T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["Angel Investment", "Startup News"],
    content: [
      { type: "heading", text: "Introduction to 'The Future Animation'" },
      { type: "paragraph", text: "The Future Animation, based in New Delhi, has rapidly emerged as a prominent name in the digital storytelling and animation industry. On Shark Tank India Season 4, the company showcased its creative expertise establishing itself as a versatile animation and video production platform." },
      { type: "paragraph", text: "Specializing in high-quality Pixar-style animation, the startup offers a broad array of creative services designed to cater to the diverse needs of businesses." },
      { type: "heading", text: "Key Highlights" },
      { type: "table", headers: ["Detail", "Value"], rows: [["Company Name", "The Future Animation"], ["Founders", "Rohit Thakur and Anmol Pandey"], ["Founded", "2020"], ["Location", "New Delhi, Delhi"], ["Industry", "Animation and Post-production"], ["Asked Investment", "₹50 Lakhs for 2.5% equity"], ["Asked Valuation", "₹20 Crores"], ["Final Deal", "₹50 Lakhs for 10% equity"], ["Final Valuation", "₹5 Crores"], ["Investing Shark", "Peyush Bansal"]] },
      { type: "heading", text: "The Shark Tank India Pitch" },
      { type: "paragraph", text: "The founders presented their vision to the panel of sharks: Vineeta Singh, Peyush Bansal, Anupam Mittal, Aman Gupta, and Varun Dua." },
      { type: "heading", text: "Service Offerings and Expertise" },
      { type: "list", items: ["Animation Services: High-quality Pixar-style animated videos, offering both 2D and 3D animation", "Video Production: Corporate videos, promotional materials, sales presentations, demo videos", "Pre and Post-Production: Scriptwriting, storyboarding, motion graphics, video editing, and sound design"] },
      { type: "paragraph", text: "In conclusion, The Future Animation is poised to make a lasting impact on India's digital storytelling landscape." },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────
  {
    id: "26",
    slug: "etherealx-raises-20-5-26",
    title: "EtherealX Raises $20.5 Mn Series A to Build India's First Fully Reusable Medium-Lift Launch Vehicle",
    excerpt:
      "Bengaluru-based Ethereal Exploration Guild (EtherealX) has raised $20.5 million (₹170+ crore) in an oversubscribed Series A funding round...",
    thumbnailUrl: "/images/blogs/etherealx-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-01-19T00:00:00Z",
    readTimeMinutes: 12,
    featured: true,
    tags: ["Spacetech Funding", "Indian Space Startups", "Reusable Launch Vehicles", "Series A Investment"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based Ethereal Exploration Guild (EtherealX) has raised $20.5 million (₹170+ crore) in an oversubscribed Series A funding round, co-led by TDK Ventures and BIG Capital, with participation from Accel, Prosus, YourNest Venture Capital, BlueHill Capital, Campus Fund, and Riceberg Ventures." },
      { type: "paragraph", text: "This milestone underscores the growing maturity of India's spacetech ecosystem and sets the stage for EtherealX to achieve a bold technological vision: developing Razor Crest Mk-1, the country's first fully reusable medium-lift launch vehicle." },
      { type: "heading", text: "Funding Round Details" },
      { type: "paragraph", text: "The Series A round comes after EtherealX's successful $5 million seed round in August 2024, led by YourNest Venture Capital. With this Series A infusion, EtherealX's valuation has increased 5.5x to $80.5 million." },
      { type: "heading", text: "Founders and Vision" },
      { type: "paragraph", text: "Founded in 2022 by Manu J. Nair (CEO), Shubhayu Sardar, and Prashanth Sharma, EtherealX brings together expertise in aerospace engineering, propulsion systems, and mission design." },
      { type: "heading", text: "Razor Crest Mk-1: India's First Fully Reusable Medium-Lift Rocket" },
      { type: "list", items: ["Up to 24.8 tonnes to Low Earth Orbit (LEO) in expendable mode", "Around 8 tonnes to LEO in fully reusable configuration", "Capability to deliver payloads to Geosynchronous Transfer Orbit (GTO) and Trans-Lunar Injection (TLI)"] },
      { type: "heading", text: "Proprietary Engines and Technological Edge" },
      { type: "paragraph", text: "EtherealX has developed two proprietary rocket engines: Pegasus (Upper-Stage Reusable Engine) with 80 kN thrust and Stallion (Booster Engine) with 1.2 MN thrust." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "EtherealX's ambitious roadmap, proprietary engines, and strategic partnerships position it as a potential game-changer for India's space ecosystem. With plans for demonstration flights in 2027 and commercial launches by 2028, the company is poised to redefine orbital access economics." },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────
  {
    id: "29",
    slug: "success-story-flipkart-29",
    title: "Success Story \"Flipkart\" : From a Small Apartment Startup to India's E-Commerce Powerhouse",
    excerpt:
      "Every transformative startup begins with a simple belief and Flipkart's journey is a testament to how a bold idea, customer focus, and persistence can reshape an entire industry...",
    thumbnailUrl: "/images/blogs/flipkart-success-story-cover.png",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-01-21T00:00:00Z",
    readTimeMinutes: 14,
    featured: true,
    tags: ["StartupSuccess", "IndianStartups", "FounderJourney", "EcommerceIndia"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative startup begins with a simple belief and Flipkart's journey is a testament to how a bold idea, customer focus, and persistence can reshape an entire industry. Flipkart is an Indian e-commerce pioneer that transformed how millions of people shop online." },
      { type: "paragraph", text: "Founded in 2007, the company grew from a small online bookstore operated from a Bengaluru apartment into a multi-category digital marketplace, setting benchmarks in trust, logistics, and customer experience." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Flipkart was founded by Sachin Bansal and Binny Bansal, two former Amazon engineers who shared a vision of building a technology-driven retail platform in India." },
      { type: "heading", text: "The Existing Problem" },
      { type: "list", items: ["Low consumer trust: Most people were wary of paying online due to fear of fraud or delayed delivery", "Poor logistics: Delivery networks were unreliable, especially in smaller towns", "Limited digital adoption: Online shopping was unfamiliar to most consumers"] },
      { type: "heading", text: "The Solution" },
      { type: "list", items: ["Cash on Delivery (COD): Eliminated the fear of online payments", "Easy returns and customer-friendly policies", "Proprietary logistics network (Ekart): Ensured faster and more reliable deliveries", "Marketplace model: Enabled sellers across India to reach a national audience"] },
      { type: "heading", text: "Growth & Key Milestones" },
      { type: "list", items: ["Expansion from books to electronics, fashion, home essentials, and lifestyle products", "Millions of active customers across India, including Tier 2 and Tier 3 cities", "Launch of The Big Billion Days", "Walmart's majority stake acquisition in 2018"] },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "Flipkart's journey demonstrates that understanding local challenges, solving them with innovative solutions, and maintaining a customer-first approach can create lasting impact." },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────
  {
    id: "30",
    slug: "insidefpv-raises-6-crore-30",
    title: "Shark Tank India–Featured Defence Dronetech Startup insideFPV Raises ₹6 Crore in Pre-Series A Funding",
    excerpt:
      "Gujarat-based defence drone technology startup insideFPV, which rose to national prominence after featuring on Shark Tank India, has raised ₹6 crore in a pre-Series A funding round...",
    thumbnailUrl: "/images/blogs/insidefpv-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-01-21T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["Startup Funding", "Defence Tech", "Drone Technology", "Shark Tank India"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Gujarat-based defence drone technology startup insideFPV, which rose to national prominence after featuring on Shark Tank India, has raised ₹6 crore in a pre-Series A funding round led by venture capital firm GVFL." },
      { type: "heading", text: "Funding Details and Use of Capital" },
      { type: "paragraph", text: "The GVFL-led pre-Series A round will be deployed across product development, engineering capability building, and manufacturing readiness." },
      { type: "heading", text: "Company Background and Founders" },
      { type: "paragraph", text: "Founded in 2020 by Arth Chowdhary, Deyvant Bhardwaj, and Oshi Kumari, insideFPV was established to address the growing demand for high-performance FPV drones manufactured entirely in India." },
      { type: "heading", text: "Product Portfolio and Technology Differentiation" },
      { type: "paragraph", text: "insideFPV's product lineup includes FPV drones, kamikaze drones, surveillance platforms, and interceptor drones, purpose-built for defence and security applications." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "With strong investor backing, proven traction, and a clear defence-first roadmap, insideFPV is emerging as a serious contender in India's rapidly evolving drone and defence technology landscape." },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────
  {
    id: "31",
    slug: "rapido-crosses-inr1-000-31",
    title: "Rapido Crosses ₹1,000 Crore Total Income in FY25 as Delivery Business Outpaces Ride-Hailing",
    excerpt:
      "Bengaluru-based mobility platform Rapido has crossed the ₹1,000 crore total income milestone in FY25, marking a significant inflection point in its journey toward sustainable scale...",
    thumbnailUrl: "/images/blogs/rapido-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-01-22T00:00:00Z",
    readTimeMinutes: 12,
    featured: false,
    tags: ["Mobility Startup", "Startup Financials", "Delivery Economy", "India Tech News"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based mobility platform Rapido has crossed the ₹1,000 crore total income milestone in FY25, marking a significant inflection point in its journey toward sustainable scale." },
      { type: "heading", text: "Financial Performance in FY25" },
      { type: "paragraph", text: "According to consolidated financial statements filed with the Registrar of Companies (RoC), Rapido's revenue from operations rose to ₹934 crore in FY25, up from ₹648 crore in FY24." },
      { type: "heading", text: "Delivery Business Emerges as the Largest Revenue Stream" },
      { type: "paragraph", text: "A key highlight of FY25 was the delivery business overtaking passenger ride-hailing as Rapido's largest revenue contributor." },
      { type: "heading", text: "About the Founders" },
      { type: "paragraph", text: "Founded in 2015, Rapido was started by Aravind Sanka, SR Rishikesh, and Pavan Guntupalli." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Rapido's FY25 performance signals a decisive shift—from growth fueled by heavy discounts to disciplined expansion driven by sustainable unit economics." },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────
  {
    id: "32",
    slug: "truva-raises-9-32",
    title: "Truva Raises $9 Million in Fresh Capital Led by Stellaris and Orios Ventures",
    excerpt:
      "Indian resale homes platform Truva has raised $9 million (₹78 crore) in fresh funding, highlighting growing investor confidence in technology-led solutions...",
    thumbnailUrl: "/images/blogs/truva-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-01-27T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["PropTech", "Real Estate", "Startup Funding", "Venture Capital"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Indian resale homes platform Truva has raised $9 million (₹78 crore) in fresh funding, highlighting growing investor confidence in technology-led solutions that address inefficiencies in India's fragmented secondary real estate market." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Of the total $9 million raised, $7.3 million (₹61 crore) was secured as equity, while $1.7 million (₹17 crore) came as venture debt from Stride Ventures." },
      { type: "heading", text: "About the Startup" },
      { type: "paragraph", text: "Founded in 2023, Truva is a full-stack resale homes platform that aims to make the home buying and selling experience seamless, transparent, and predictable." },
      { type: "heading", text: "About the Founders" },
      { type: "paragraph", text: "Truva was founded by Puneet Arora, Monil Singhal, and Ankit Gupta." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "With strong institutional backing, a differentiated full-stack model, and a clear focus on execution, trust, and technology, Truva is well-positioned to address long-standing inefficiencies in India's resale housing market." },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────
  {
    id: "34",
    slug: "reliance-jio-jio-34",
    title: "Reliance Jio (Jio Platforms): How a Bold Vision Transformed India's Telecom and Digital Ecosystem",
    excerpt:
      "Every industry-defining company begins with a clear vision, and Reliance Jio's journey is a powerful example of how long-term thinking, massive investment, and customer-centric innovation can reshape an entire nation's digital future...",
    thumbnailUrl: "/images/blogs/reliance-jio-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-01-28T00:00:00Z",
    readTimeMinutes: 14,
    featured: true,
    tags: ["StartupSuccessStory", "IndianStartups", "TelecomRevolution", "DigitalIndia"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every industry-defining company begins with a clear vision, and Reliance Jio's journey is a powerful example of how long-term thinking, massive investment, and customer-centric innovation can reshape an entire nation's digital future." },
      { type: "paragraph", text: "Launched commercially in 2016 under Reliance Industries, Jio transformed India from a data-scarce market into one of the world's largest consumers of mobile data." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Reliance Jio was conceptualized and launched under the leadership of Mukesh Ambani, Chairman and Managing Director of Reliance Industries Limited." },
      { type: "heading", text: "The Solution" },
      { type: "list", items: ["Free voice calling and ultra-low-cost data plans", "Nationwide 4G coverage, including Tier 2, Tier 3, and rural regions", "Digital-first onboarding", "Integrated digital apps ecosystem including JioCinema, JioTV, JioSaavn, and JioCloud"] },
      { type: "heading", text: "Growth & Key Milestones" },
      { type: "list", items: ["Acquiring over 100 million subscribers within six months of launch", "Becoming India's largest mobile network operator by subscriber base", "Driving India to become the world's largest mobile data consumer", "Strategic investments from global leaders like Meta, Google, Silver Lake, KKR, and Intel in 2020"] },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "Reliance Jio's success story proves that visionary leadership, patient capital, and infrastructure-led innovation can reshape entire industries." },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────
  {
    id: "35",
    slug: "dot-key-35",
    title: "Dot & Key Clocks ₹423 Cr Operating Revenue in FY25 as Profitability and Scale Accelerate",
    excerpt:
      "Kolkata-based skincare brand Dot & Key delivered a standout performance in FY25, reporting ₹423 crore in operating revenue and ₹56 crore in net profit...",
    thumbnailUrl: "/images/blogs/dot-and-key-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-01-29T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["IndianStartups", "D2C", "BeautyTech", "StartupGrowth", "ProfitableStartups"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Kolkata-based skincare brand Dot & Key delivered a standout performance in FY25, reporting ₹423 crore in operating revenue and ₹56 crore in net profit, marking a defining phase in its evolution from a niche D2C startup to one of India's fastest-growing beauty brands." },
      { type: "heading", text: "Financial Performance in FY25" },
      { type: "paragraph", text: "According to filings with the Ministry of Corporate Affairs (MCA), Dot & Key reported operating revenue of ₹423.37 crore in FY25, up 113% from approximately ₹199 crore in FY24." },
      { type: "heading", text: "Founders and Leadership" },
      { type: "paragraph", text: "Anisha Agarwal Saraf brings deep domain exposure to the business. Suyash Saraf complemented this with financial and operational expertise." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Dot & Key's FY25 performance reflects a rare combination in India's D2C beauty space—rapid scale, sustained profitability, and disciplined execution." },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────
  {
    id: "36",
    slug: "nivaan-care-raises-7-million-36",
    title: "Nivaan Care Raises $7 Million in Series A Funding Led by Sorin Investments",
    excerpt:
      "India's healthcare landscape is witnessing a growing demand for specialized, patient-centric care, especially in areas that have long remained fragmented...",
    thumbnailUrl: "/images/blogs/nivaan-care-funding-cover.jpeg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-01-30T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["StartupFunding", "HealthTech", "IndianStartups", "SeriesAFunding"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's healthcare landscape is witnessing a growing demand for specialized, patient-centric care, especially in areas that have long remained fragmented." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "The Series A round was led by Sorin Investments, with continued participation from existing investors W Health Ventures, Endiya Partners, and Rebright Partners." },
      { type: "heading", text: "About the Startup" },
      { type: "paragraph", text: "Founded in 2023, Nivaan Care operates single-specialty clinics dedicated to treating chronic pain conditions such as back pain, knee pain, neck pain, and joint-related disorders." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Nivaan Care's Series A funding marks an important step toward addressing one of India's most widespread yet under-served healthcare challenges." },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────
  {
    id: "37",
    slug: "success-story-pharmeasy-37",
    title: "Success Story \"PharmEasy\" : From a Small Health-Tech Idea to India's Leading Online Healthcare Platform",
    excerpt:
      "Every transformative startup begins with a simple idea, and PharmEasy's journey is a remarkable example of how solving real-world problems with technology, persistence, and customer focus can disrupt an entire industry...",
    thumbnailUrl: "/images/blogs/pharmeasy-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-01-31T00:00:00Z",
    readTimeMinutes: 14,
    featured: true,
    tags: ["HealthTech", "StartupSuccessStory", "IndianStartups", "DigitalHealthcare"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative startup begins with a simple idea, and PharmEasy's journey is a remarkable example of how solving real-world problems with technology, persistence, and customer focus can disrupt an entire industry." },
      { type: "paragraph", text: "Founded in 2015, PharmEasy is India's leading online pharmacy and healthcare platform, providing millions of users with access to medicines, diagnostic services, and healthcare support." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "PharmEasy was founded by Dharmil Sheth and Dhaval Shah, two entrepreneurs who identified a critical gap in India's healthcare system." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "PharmEasy's solution was to build a comprehensive digital healthcare platform that combined pharmacies, diagnostic labs, and health services into a single, convenient ecosystem." },
      { type: "heading", text: "Growth & Key Milestones" },
      { type: "paragraph", text: "Once credibility was established, PharmEasy experienced rapid growth. The platform expanded across India, reaching tier 2 and tier 3 cities." },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "PharmEasy's journey demonstrates that identifying real-world problems, solving them with innovative technology, and maintaining a customer-first mindset can create lasting impact." },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────
  {
    id: "38",
    slug: "gully-labs-kicks-off-series-a-round-38",
    title: "Gully Labs Kicks Off Series A Round",
    excerpt:
      "India's direct-to-consumer (D2C) fashion ecosystem continues to attract strong investor interest, particularly brands that combine design, culture, and community...",
    thumbnailUrl: "/images/blogs/gully-labs-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-02T00:00:00Z",
    readTimeMinutes: 9,
    featured: false,
    tags: ["Startup Funding", "Sneaker brand", "Consumer Startups", "D2C brands"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's direct-to-consumer (D2C) fashion ecosystem continues to attract strong investor interest, particularly brands that combine design, culture, and community." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Sneaker brand Gully Labs has raised ₹26.5 crore (approximately $3 million) in a Series A funding round, led by Saama Capital." },
      { type: "heading", text: "How It Started and the Founders" },
      { type: "paragraph", text: "Gully Labs was co-founded by Arjun Singh and Animesh Mishra, who set out to build a sneaker brand that celebrates authentic Indian stories." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Gully Labs' Series A funding marks a key milestone in its journey to build a culture-driven, premium sneaker brand rooted in Indian identity." },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────
  {
    id: "39",
    slug: "union-budget-2026-27-39",
    title: "Union Budget 2026–27: What It Means for Indian Startups, Tech Founders, and Investors",
    excerpt:
      "Union Budget 2026–27 signals a clear shift in how the Indian government intends to support the technology and startup ecosystem...",
    thumbnailUrl: "/images/blogs/union-budget-2026-cover.jpg",
    author: "Angeltors.com",
    category: cat("News Update"),
    publishedAt: "2026-02-03T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["UnionBudget2026", "IndianStartups", "TechPolicyIndia", "AIEconomy"],
    content: [
      { type: "heading", text: "Introduction to Union Budget 2026–27" },
      { type: "paragraph", text: "Union Budget 2026–27 signals a clear shift in how the Indian government intends to support the technology and startup ecosystem." },
      { type: "heading", text: "Clearer Tax Rules for IT and SaaS Companies" },
      { type: "paragraph", text: "One of the most consequential announcements for tech companies is the simplification of transfer pricing rules." },
      { type: "heading", text: "A Long Runway for Data Centres and Cloud Infrastructure" },
      { type: "paragraph", text: "Budget 2026 makes a decisive push to position India as a global compute hub." },
      { type: "heading", text: "A Long-Game Budget for Serious Builders" },
      { type: "paragraph", text: "From Angeltors' perspective, Union Budget 2026–27 confirms a decisive shift from incentive-led growth to structure-led scaling." },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────────────────
  {
    id: "40",
    slug: "delhivery-reports-inr2-805-crore-40",
    title: "Delhivery Reports ₹2,805 Crore Revenue in Q3 FY'26 as Profit Jumps 59%",
    excerpt:
      "India's leading logistics and supply chain company Delhivery delivered a strong operational and financial performance in the third quarter of FY26...",
    thumbnailUrl: "/images/blogs/delhivery-q3-fy26-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-04T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["LogisticsTech", "StartupFunding", "IndianStartups", "BusinessNews"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's leading logistics and supply chain company Delhivery delivered a strong operational and financial performance in the third quarter of FY26." },
      { type: "heading", text: "Financial Performance in Q3 FY26" },
      { type: "paragraph", text: "According to filings with the National Stock Exchange (NSE), Delhivery's revenue from operations increased to ₹2,805 crore in Q3 FY26." },
      { type: "heading", text: "Founders and Company Background" },
      { type: "paragraph", text: "Founded in 2011 by Sahil Barua, Mohit Tandon, Kapil Bharati, and Suraj Saharan." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Delhivery's Q3 FY26 results signal growing maturity—where scale, efficiency, and profitability are beginning to move in sync." },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────────────────
  {
    id: "41",
    slug: "success-story-boat-41",
    title: "Success Story \"boAt\" : From a Bootstrapped Accessories Startup to India's Audio & Wearables Leader",
    excerpt:
      "Every iconic consumer brand begins by solving a simple, everyday problem—and boAt's journey is a powerful example of how deep customer insight can create a category-defining company...",
    thumbnailUrl: "/images/blogs/boat-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-05T00:00:00Z",
    readTimeMinutes: 13,
    featured: true,
    tags: ["StartupSuccessStory", "IndianStartups", "D2CBrand", "ConsumerTech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every iconic consumer brand begins by solving a simple, everyday problem—and boAt's journey is a powerful example of how deep customer insight can create a category-defining company." },
      { type: "paragraph", text: "Founded in 2016, boAt is today India's leading audio and wearables brand, known for blending style, performance, and affordability." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "boAt was founded by Aman Gupta and Sameer Mehta, entrepreneurs with hands-on experience in consumer electronics and distribution." },
      { type: "heading", text: "Growth, Scale & Market Leadership" },
      { type: "paragraph", text: "By 2023, boAt became the No. 1 brand in India's hearables category and ranked as the world's fifth-largest wearable brand by volume." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "boAt's journey shows that solving everyday problems with clarity, consistency, and customer obsession can build industry-leading companies." },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────────────────
  {
    id: "42",
    slug: "the-whole-truth-raises-51-mn-42",
    title: "The Whole Truth Raises $51 Mn in Series D, Marks Start of IPO Journey",
    excerpt:
      "Mumbai-based clean-label nutrition startup The Whole Truth (TWT) has raised approximately $51 million in a Series D funding round...",
    thumbnailUrl: "/images/blogs/the-whole-truth-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-06T00:00:00Z",
    readTimeMinutes: 12,
    featured: false,
    tags: ["StartupFunding", "SeriesDFunding", "D2CStartups", "ConsumerBrands"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Mumbai-based clean-label nutrition startup The Whole Truth (TWT) has raised approximately $51 million in a Series D funding round." },
      { type: "heading", text: "Capital Deployment and IPO Readiness" },
      { type: "paragraph", text: "The freshly raised capital will be deployed towards scaling in-house manufacturing capacity and building internal systems." },
      { type: "heading", text: "Founders and Product Philosophy" },
      { type: "paragraph", text: "Founded in 2019 by Shashank Mehta, a former Unilever executive." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "The Whole Truth's journey highlights how strong founder-market fit, clean branding, and operational discipline can build scalable consumer brands in emerging categories." },
    ],
  },

  // ── 19 ─────────────────────────────────────────────────────────────────
  {
    id: "43",
    slug: "blackbuck-posts-inr32-cr-profit-43",
    title: "BlackBuck Posts ₹32 Cr Profit in Q3 FY'26 as Scale and Operating Leverage Drive Turnaround",
    excerpt:
      "Bengaluru-based online trucking platform BlackBuck Limited has reported a strong financial turnaround in Q3 FY26, posting a profit of ₹32 crore on ₹172 crore in operating revenue...",
    thumbnailUrl: "/images/blogs/blackbuck-q3-fy26-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-07T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["LogisticsTech", "IndianStartups", "StartupProfitability", "SupplyChainTech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based online trucking platform BlackBuck Limited has reported a strong financial turnaround in Q3 FY26, posting a profit of ₹32 crore on ₹172 crore in operating revenue." },
      { type: "heading", text: "Financial Performance" },
      { type: "paragraph", text: "BlackBuck's revenue from operations grew 51% year-on-year to ₹172 crore in Q3 FY'26." },
      { type: "heading", text: "From the Beginning to Now" },
      { type: "paragraph", text: "BlackBuck was founded with the objective of digitising India's highly fragmented trucking and freight market." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "BlackBuck's Q3 FY'26 performance marks a clear inflection point—from a loss-making logistics startup to a profitable, scaled digital trucking platform." },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────────────────
  {
    id: "44",
    slug: "eyerov-raises-13-crore-44",
    title: "EyeROV Raises ₹13 Crore in Pre-Series A Funding to Scale Marine Robotics Innovation",
    excerpt:
      "India's deep-tech startup ecosystem is steadily gaining momentum as investors increasingly back companies solving complex, real-world infrastructure and defence challenges...",
    thumbnailUrl: "/images/blogs/eyerov-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-09T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["StartupFunding", "DeepTech", "MarineRobotics", "DefenceTech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's deep-tech startup ecosystem is steadily gaining momentum as investors increasingly back companies solving complex, real-world infrastructure and defence challenges." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Marine robotics startup EyeROV (IROV Technologies Pvt. Ltd.) has raised ₹13 crore ($1.44 million) in a pre-Series A funding round." },
      { type: "heading", text: "How It Started and the Founders" },
      { type: "paragraph", text: "EyeROV was co-founded by Johns T. Mathai and Kannappa Palaniappan P." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "EyeROV's pre-Series A funding marks a significant milestone in its journey to build world-class marine robotics technology from India." },
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────────────────
  {
    id: "47",
    slug: "how-juspay-built-47",
    title: "How Juspay Built the Backbone of India's Payment Ecosystem",
    excerpt:
      "Every transformative startup begins by solving a problem that others overlook. Juspay's journey is a powerful example of how focusing on core infrastructure rather than consumer visibility can create outsized impact...",
    thumbnailUrl: "/images/blogs/juspay-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-10T00:00:00Z",
    readTimeMinutes: 12,
    featured: true,
    tags: ["FintechStartup", "DigitalPaymentsIndia", "IndianStartups", "StartupSuccessStory"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative startup begins by solving a problem that others overlook. Juspay's journey is a powerful example of how focusing on core infrastructure rather than consumer visibility can create outsized impact." },
      { type: "paragraph", text: "Founded in 2012, Juspay has grown into one of India's most critical fintech companies, quietly powering the country's digital payments ecosystem." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Juspay was founded by Vimal Kumar, Srinivas Ananth, and Naveen Kumar, engineers with deep expertise in large-scale systems and enterprise technology." },
      { type: "heading", text: "Scale, Profitability, and Unicorn Status" },
      { type: "paragraph", text: "By 2025–26, Juspay had reached massive operational scale. The company now processes over 300 million transactions daily." },
      { type: "heading", text: "Conclusion and Takeaway" },
      { type: "paragraph", text: "Juspay's journey demonstrates that lasting success is built by solving foundational problems with patience and precision." },
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────────────────
  {
    id: "49",
    slug: "varaha-raises-20-million-49",
    title: "Varaha Raises $20 Million in Series B Tranche to Scale High-Integrity Carbon Removal Projects",
    excerpt:
      "India's climate-tech ecosystem is rapidly emerging as a global force, with startups addressing some of the world's most pressing environmental challenges...",
    thumbnailUrl: "/images/blogs/varaha-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-12T00:00:00Z",
    readTimeMinutes: 12,
    featured: false,
    tags: ["StartupFunding", "ClimateTech", "CarbonRemoval", "SeriesBFunding"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's climate-tech ecosystem is rapidly emerging as a global force, with startups addressing some of the world's most pressing environmental challenges through science-led innovation." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Varaha has raised $20 million in the first tranche of its ongoing Series B funding round, led by WestBridge Capital." },
      { type: "heading", text: "How It Started and the Founders" },
      { type: "paragraph", text: "Varaha was co-founded by Madhur Jain (CEO), Ankita Garg (COO), and Vishal Kuchanur (CTO)." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Varaha's $20 million Series B tranche marks a defining moment in its journey to build one of the world's most credible carbon removal platforms." },
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────────────────
  {
    id: "50",
    slug: "hul-backed-minimalist-crosses-500-50",
    title: "HUL-Backed Minimalist Crosses ₹500 Cr Revenue in FY25, Posts Loss Amid ₹46 Cr Exceptional Charge",
    excerpt:
      "Hindustan Unilever Limited (HUL)-owned direct-to-consumer skincare brand Minimalist has crossed a major milestone in FY25, with revenue surging 48% year-on-year to ₹514.8 crore...",
    thumbnailUrl: "/images/blogs/minimalist-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-13T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["D2CBrand", "IndianStartups", "StartupNews", "BeautyBusiness"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Hindustan Unilever Limited (HUL)-owned direct-to-consumer skincare brand Minimalist has crossed a major milestone in FY25, with revenue surging 48% year-on-year to ₹514.8 crore." },
      { type: "heading", text: "Financial Performance" },
      { type: "paragraph", text: "Minimalist's revenue from operations rose sharply to ₹514.8 crore in FY25, up from ₹347.4 crore in FY24." },
      { type: "heading", text: "From Beginning Till Now" },
      { type: "paragraph", text: "Founded in 2020 in Jaipur by Mohit Yadav and Rahul Yadav." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Minimalist's FY25 performance highlights the dual reality of high-growth D2C brands—rapid scale with significant cost intensity." },
    ],
  },

  // ── 24 ─────────────────────────────────────────────────────────────────
  {
    id: "51",
    slug: "success-story-mamaearth-51",
    title: "Success Story \"Mamaearth\" : Building India's First Toxic-Free Beauty Unicorn",
    excerpt:
      "Every iconic consumer brand begins by solving a deeply personal problem. For Mamaearth, that problem was safety. Founded in 2016, Mamaearth emerged from a simple but powerful realization...",
    thumbnailUrl: "/images/blogs/mamaearth-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-14T00:00:00Z",
    readTimeMinutes: 13,
    featured: true,
    tags: ["IndianStartups", "D2CBrand", "StartupSuccessStory", "BeautyUnicorn"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every iconic consumer brand begins by solving a deeply personal problem. For Mamaearth, that problem was safety. Founded in 2016, Mamaearth emerged from a simple but powerful realization." },
      { type: "paragraph", text: "In 2022, Mamaearth became India's first beauty and personal care unicorn, redefining how modern Indian consumers view skincare, trust, and brand transparency." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Mamaearth was founded by Varun Alagh and Ghazal Alagh, a husband-and-wife duo based in Gurugram." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Mamaearth's journey proves that deeply personal problems can spark billion-dollar businesses." },
    ],
  },

  // ── 25 ─────────────────────────────────────────────────────────────────
  {
    id: "52",
    slug: "indigrid-technology-raises-40-crore-52",
    title: "Indigrid Technology Raises ₹40 Crore to Close Extended Series A Round",
    excerpt:
      "India's electronics manufacturing and embedded systems landscape is gaining traction as capital flows into companies that combine deep engineering with scalable production...",
    thumbnailUrl: "/images/blogs/indigrid-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-16T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["StartupFunding", "ElectronicsManufacturing", "MakeInIndia", "EVIndustry"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's electronics manufacturing and embedded systems landscape is gaining traction as capital flows into companies that combine deep engineering with scalable production." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "The recently concluded tranche of funding was led by WestBridge Capital." },
      { type: "heading", text: "About the Startup" },
      { type: "paragraph", text: "Founded in 2015 by Sameer Narang and Rishab Puri." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Indigrid Technology's successful closing of its extended Series A round at ₹75 crore marks a defining moment in its growth journey." },
    ],
  },

  // ── 26 ─────────────────────────────────────────────────────────────────
  {
    id: "53",
    slug: "giva-crosses-500-cr-53",
    title: "GIVA Crosses ₹500 Cr Revenue Mark in FY'25 Amid Aggressive Expansion",
    excerpt:
      "Bengaluru-based jewellery startup GIVA delivered another year of strong growth in FY25, reinforcing its position as one of India's fastest-growing new-age jewellery brands...",
    thumbnailUrl: "/images/blogs/giva-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-18T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["StartupGrowth", "IndianStartups", "D2CBrand", "RetailExpansion"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based jewellery startup GIVA delivered another year of strong growth in FY25, reinforcing its position as one of India's fastest-growing new-age jewellery brands." },
      { type: "heading", text: "Financial Performance" },
      { type: "paragraph", text: "According to filings with the Registrar of Companies (RoC), GIVA's total income stood at ₹523 crore in FY25." },
      { type: "heading", text: "From Silver Startup to Multi-Category Brand" },
      { type: "paragraph", text: "Founded as a digital-first silver jewellery brand, GIVA initially focused on affordable, everyday designs." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "GIVA's journey highlights a classic startup trade-off: aggressive growth versus short-term profitability." },
    ],
  },

  // ── 27 ─────────────────────────────────────────────────────────────────
  {
    id: "54",
    slug: "success-story-ather-energy-54",
    title: "Success Story \"Ather Energy\" : Powering India's Electric Mobility Revolution",
    excerpt:
      "Every transformative startup begins with a bold vision, and Ather Energy's journey shows how deep technology, sustainability, and long-term thinking can reshape an entire industry...",
    thumbnailUrl: "/images/blogs/ather-energy-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-19T00:00:00Z",
    readTimeMinutes: 14,
    featured: true,
    tags: ["ElectricVehicles", "EVIndia", "StartupSuccess", "CleanMobility"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative startup begins with a bold vision, and Ather Energy's journey shows how deep technology, sustainability, and long-term thinking can reshape an entire industry." },
      { type: "paragraph", text: "Founded in 2013 by Tarun Mehta and Swapnil Jain, Ather Energy set out to build electric scooters that were not just eco-friendly alternatives but superior machines." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Tarun Mehta and Swapnil Jain were passionate about engineering and sustainability." },
      { type: "heading", text: "The Solution: A Premium Smart EV Ecosystem" },
      { type: "paragraph", text: "Ather launched its first product, the Ather 450, in 2018, followed by upgraded versions like the 450X." },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "Ather Energy's journey proves that solving real problems with deep technology and long-term commitment can redefine entire industries." },
    ],
  },

  // ── 28 ─────────────────────────────────────────────────────────────────
  {
    id: "55",
    slug: "peptris-raises-70-crore-55",
    title: "Peptris Raises ₹70 Crore in Series A to Accelerate AI-Driven Drug Discovery",
    excerpt:
      "India's deep-tech and healthcare innovation ecosystem is witnessing a surge in investor confidence, especially in startups using artificial intelligence to solve complex scientific problems...",
    thumbnailUrl: "/images/blogs/peptris-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-20T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["StartupFunding", "HealthTech", "AIinHealthcare", "Biotech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's deep-tech and healthcare innovation ecosystem is witnessing a surge in investor confidence, especially in startups using artificial intelligence to solve complex scientific problems." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Peptris has raised ₹70 crore (approximately $7.7 million) in a Series A funding round co-led by IAN Alpha Fund and Speciale Invest." },
      { type: "heading", text: "How It Started and the Founders" },
      { type: "paragraph", text: "Peptris was co-founded by Narayanan Venkatasubramanian, Shridhar Narayanan, Anand Budni, and Amit Mahajan." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Peptris' ₹70 crore Series A funding marks a significant milestone in its journey to transform drug discovery through artificial intelligence." },
    ],
  },

  // ── 29 ─────────────────────────────────────────────────────────────────
  {
    id: "56",
    slug: "dailyrounds-marrow-363-cr-profit-56",
    title: "DailyRounds & Marrow : Building India's Medical Education Ecosystem with ₹363 Cr Profit in FY'25",
    excerpt:
      "Bengaluru-based healthcare edtech platform DailyRounds delivered an outstanding performance in FY25, reporting ₹363 crore in profit on ₹641 crore operating revenue...",
    thumbnailUrl: "/images/blogs/dailyrounds-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-21T00:00:00Z",
    readTimeMinutes: 11,
    featured: false,
    tags: ["EdTechIndia", "HealthTech", "StartupIndia", "MedicalEducation"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based healthcare edtech platform DailyRounds delivered an outstanding performance in FY25, reporting ₹363 crore in profit on ₹641 crore operating revenue." },
      { type: "heading", text: "Financial Performance" },
      { type: "paragraph", text: "DailyRounds' operating revenue grew 13% from ₹568 crore in FY24 to ₹641 crore in FY25." },
      { type: "heading", text: "From Beginning Till Now" },
      { type: "paragraph", text: "Founded in 2014, DailyRounds initially started as an online platform where doctors could discuss real clinical cases." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "DailyRounds' journey demonstrates how deep domain expertise, a focused target market, and disciplined execution can build a highly profitable startup." },
    ],
  },

  // ── 30 ─────────────────────────────────────────────────────────────────
  {
    id: "57",
    slug: "success-story-zoho-57",
    title: "Success Story \"Zoho\" - A Bootstrapped Global Tech Giant Built on Independence and Innovation",
    excerpt:
      "Every transformative company begins with a belief that challenges conventional wisdom. Zoho is a remarkable example of how long-term thinking, deep engineering, and financial discipline can create a world-class technology enterprise without external funding...",
    thumbnailUrl: "/images/blogs/zoho-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-23T00:00:00Z",
    readTimeMinutes: 15,
    featured: true,
    tags: ["BootstrappedStartup", "SaaS", "IndianStartups", "BusinessGrowth"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative company begins with a belief that challenges conventional wisdom. Zoho is a remarkable example of how long-term thinking, deep engineering, and financial discipline can create a world-class technology enterprise without external funding." },
      { type: "paragraph", text: "Founded in 1996 (originally as AdventNet) by Sridhar Vembu and his co-founders, Zoho has grown into one of the world's most comprehensive SaaS providers." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Sridhar Vembu, an IIT Madras graduate with a PhD from Princeton University." },
      { type: "heading", text: "Bootstrapped Growth & Financial Discipline" },
      { type: "paragraph", text: "Unlike most technology startups, Zoho has never raised venture capital. As of early 2025, Zoho generated over $1.3 billion in annual revenue." },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "Zoho's journey proves that patient growth, strong engineering culture, and financial discipline can build enduring global enterprises." },
    ],
  },

  // ── 31 ─────────────────────────────────────────────────────────────────
  {
    id: "58",
    slug: "coulomb-litech-raises-20-crore-58",
    title: "Coulomb Litech Raises ₹20 Crore in Seed Funding to Accelerate Heavy-Duty EV Battery Innovation",
    excerpt:
      "India's electric mobility revolution is expanding beyond passenger vehicles into commercial and industrial segments...",
    thumbnailUrl: "/images/blogs/coulomb-litech-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-24T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["Startup Funding", "Indian Startups", "ElectricMobility", "EVBatteries"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "India's electric mobility revolution is expanding beyond passenger vehicles into commercial and industrial segments." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Coulomb Litech has raised ₹20 crore in a seed funding round from high-net-worth individuals (HNIs)." },
      { type: "heading", text: "How It Started and the Founders" },
      { type: "paragraph", text: "Coulomb Litech was founded by Ameya Sathe and Darshil Dharod, both alumni of IIT Kanpur." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Coulomb Litech's ₹20 crore seed funding marks an important milestone in its journey to power the next phase of India's electric mobility transformation." },
    ],
  },

  // ── 32 ─────────────────────────────────────────────────────────────────
  {
    id: "59",
    slug: "building-capital-efficient-lifestyle-tech-59",
    title: "Building a Capital-Efficient Lifestyle Tech Brand with ₹320 Cr ARR",
    excerpt:
      "Homegrown D2C lifestyle tech brand DailyObjects is steadily emerging as one of India's most capital-efficient consumer startup success stories...",
    thumbnailUrl: "/images/blogs/dailyobjects-arr-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-02-25T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["D2CBrands", "StartupGrowth", "LifestyleTech", "ConsumerTech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Homegrown D2C lifestyle tech brand DailyObjects is steadily emerging as one of India's most capital-efficient consumer startup success stories." },
      { type: "heading", text: "Financial Performance and Growth" },
      { type: "paragraph", text: "DailyObjects reported revenue of approximately ₹110 crore in FY25, up from ₹84 crore in FY24." },
      { type: "heading", text: "From Beginning Till Now" },
      { type: "paragraph", text: "Founded in 2012 by Pankaj Garg and Saurav Adlakha." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "DailyObjects' journey demonstrates that sustainable growth in India's D2C sector is possible without excessive capital burn." },
    ],
  },

  // ── 33 ─────────────────────────────────────────────────────────────────
  {
    id: "60",
    slug: "hirebound-raises-2-60",
    title: "HireBound Raises $2 Million to Transform Hiring with Agentic AI",
    excerpt:
      "The global recruitment landscape is undergoing a structural shift as artificial intelligence moves from experimentation to real-world execution...",
    thumbnailUrl: "/images/blogs/hirebound-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-26T00:00:00Z",
    readTimeMinutes: 9,
    featured: false,
    tags: ["StartupFunding", "AIStartups", "TechInnovation", "SaaS"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "The global recruitment landscape is undergoing a structural shift as artificial intelligence moves from experimentation to real-world execution." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "HireBound has raised $2 million in a seed funding round led by Kalaari Capital." },
      { type: "heading", text: "About the Startup" },
      { type: "paragraph", text: "Founded by Sharad Vij and Kumar Vikramaditya." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "HireBound's $2 million seed funding marks an important milestone in the evolution of AI-driven recruitment technology." },
    ],
  },

  // ── 34 ─────────────────────────────────────────────────────────────────
  {
    id: "61",
    slug: "success-story-cultfit-61",
    title: "Success Story \"Cultfit\" : Building India's Integrated Health & Fitness Ecosystem",
    excerpt:
      "Every transformative company begins with a vision to change everyday behavior at scale. Cultfit's journey is a powerful example of how technology, community, and consumer insight can redefine an entire industry...",
    thumbnailUrl: "/images/blogs/cultfit-success-story-cover.jpg",
    author: "Angeltors.com",
    category: cat("Success Story"),
    publishedAt: "2026-02-27T00:00:00Z",
    readTimeMinutes: 13,
    featured: true,
    tags: ["StartupSuccessStory", "IndianStartups", "HealthTech", "BusinessGrowth"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Every transformative company begins with a vision to change everyday behavior at scale. Cultfit's journey is a powerful example of how technology, community, and consumer insight can redefine an entire industry." },
      { type: "paragraph", text: "Founded in 2016 by Mukesh Bansal and Ankit Nagori under the parent brand Cure.fit." },
      { type: "heading", text: "Founder Background & Idea Origin" },
      { type: "paragraph", text: "Mukesh Bansal, founder of Myntra and former head of commerce at Flipkart, teamed up with Ankit Nagori." },
      { type: "heading", text: "Conclusion & Takeaway" },
      { type: "paragraph", text: "Cultfit's journey demonstrates that solving lifestyle problems requires more than a single product—it demands an ecosystem." },
    ],
  },

  // ── 35 ─────────────────────────────────────────────────────────────────
  {
    id: "62",
    slug: "spintly-raises-8-million-62",
    title: "Spintly Raises $8 Million in Series A to Power the Future of Smart Building Security",
    excerpt:
      "As enterprises modernize infrastructure, physical security and access control systems are undergoing a major digital transformation...",
    thumbnailUrl: "/images/blogs/spintly-funding-cover.jpg",
    author: "Angeltors.com",
    category: cat("Funding News"),
    publishedAt: "2026-02-28T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["StartupFunding", "PropTech", "SmartBuildings", "TechInnovation"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "As enterprises modernize infrastructure, physical security and access control systems are undergoing a major digital transformation." },
      { type: "heading", text: "About the Funding" },
      { type: "paragraph", text: "Spintly has raised $8 million in a Series A funding round led by Accel." },
      { type: "heading", text: "Founders and Vision" },
      { type: "paragraph", text: "Founded in 2020 by Rohin Parkar and Malcolm D'Souza." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Spintly's $8 million Series A round marks a significant milestone in its growth journey." },
    ],
  },

  // ── 36 ─────────────────────────────────────────────────────────────────
  {
    id: "63",
    slug: "wint-wealth-revenue-jumps-63",
    title: "Wint Wealth : Revenue Jumps 2.6X in FY25, Losses Narrow by 60%",
    excerpt:
      "Bengaluru-based wealthtech platform Wint Wealth delivered a strong financial performance in FY25, marking a significant step toward sustainable scale...",
    thumbnailUrl: "/images/blogs/wint-wealth-fy25-cover.jpg",
    author: "Angeltors.com",
    category: cat("Startup Profitability"),
    publishedAt: "2026-03-06T00:00:00Z",
    readTimeMinutes: 10,
    featured: false,
    tags: ["Startup Funding", "Fintech", "Indian Startups", "Wealthtech"],
    content: [
      { type: "heading", text: "Introduction" },
      { type: "paragraph", text: "Bengaluru-based wealthtech platform Wint Wealth delivered a strong financial performance in FY25, marking a significant step toward sustainable scale." },
      { type: "heading", text: "Financial Performance" },
      { type: "paragraph", text: "According to filings with the Registrar of Companies (RoC), Wint Wealth's operating revenue surged to ₹44.5 crore in FY25 from ₹17.2 crore in FY24." },
      { type: "heading", text: "Founders and Leadership" },
      { type: "paragraph", text: "Wint Wealth was founded by Ajinkya Kulkarni (Co-founder & CEO), Shashank Chimaladari (Co-founder & CTO), Abhik Patel (Co-founder & CPO), Anshul Gupta (Co-founder), and Vinay Dubey (Co-founder & CMO)." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Wint Wealth's FY25 performance highlights how focused execution, diversified revenue streams, and disciplined cost management can drive meaningful progress toward profitability." },
    ],
  },
];
