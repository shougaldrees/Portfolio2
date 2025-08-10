export const caseStudies = [
  {
    slug: "inf-app",               // ← URL segment
    title: "InfluenceME",
    company: "Stealth Startup",                   // use “—” if you want a dash
    role: "UX Designer",
    expertise: "UI/UX Design",
    year: "2025",

    // image imports
    hero: require("../Assets/UIUX/inf-hero.png"),
    gallery: [
      require("../Assets/UIUX/inf-1.png"),
      require("../Assets/UIUX/inf-2.png"),
      require("../Assets/UIUX/inf-3.png"),
    ],

    timeline:
      "Designed and delivered over the course of 1 month during the summer, with rapid iteration through user interviews, interface testing, and stakeholder feedback sessions.",
    background: "This influencer marketing platform was designed to streamline collaboration between brands and content creators in the Middle East. As the creator economy grows rapidly in the region, many small and mid-sized businesses face challenges finding and managing influencer campaigns efficiently. Our goal was to build a centralized platform where businesses can track earnings, monitor performance, and view campaign analytics, while creators can manage their profiles and showcase their work. The platform emphasizes mobile-first design, quick campaign visibility, and an intuitive dashboard that speaks to both professional marketers and solo creators.",
    process: {
      research: "I interviewed both sides of the ecosystem—brands and influencers—to identify major pain points: lack of transparency in performance data, difficulty keeping track of campaign statuses, and the absence of a streamlined communication channel. These insights helped shape key features: a performance-driven dashboard, creator profile previews, upcoming campaign tracking, and segmented reports by month and category.",
      design: "The interface was built around clarity, professionalism, and regional personalization. I adopted a bold color palette to reflect the platform’s energy and growth mindset, while keeping UI components modular and consistent across screens. Visual hierarchy was prioritized—highlighting earnings, analytics, and engagement metrics at a glance. UX flows were designed to reduce friction for non-technical users. Multiple usability tests were conducted in both Arabic and English contexts to ensure accessibility and inclusivity for Middle Eastern audiences."
    },
  },

  {
    slug: "d6-app",               // ← URL segment
    title: "District Six",
    company: "BU SPARK!",                   // use “—” if you want a dash
    role: "UI/UX Designer",
    expertise: "UI/UX Design",
    year: "2025",

    // image imports
    hero: require("../Assets/UIUX/d6-hero.png"),
    gallery: [
      require("../Assets/UIUX/d6-1.png"),
      require("../Assets/UIUX/d6-2.png"),
      require("../Assets/UIUX/d6-3.png"),
      require("../Assets/UIUX/d6-4.png"),
      require("../Assets/UIUX/d6-5.png"),
      require("../Assets/UIUX/d6-6.png"),
    ],
timeline: 
  "Designed and delivered over the course of 1 month during the summer, with rapid iteration through community events, neighborhood visits, user testing, and stakeholder feedback sessions.",

background: 
  "The District 6 web app is a mobile-first resource platform created in collaboration with District Six Councilor Ben Weber’s office to connect residents of Jamaica Plain and West Roxbury with local services, events, and organizations. Many residents face barriers to accessing information, such as language limitations, outdated listings, or scattered resources across multiple channels. The platform addresses these challenges by centralizing community information and making it accessible in both English and Spanish. Key features include an interactive resource map, semantic search for easy discovery, daily pulse polls to surface community priorities, and a community-powered event calendar. The platform also strengthens two-way communication between the councilor’s office and constituents, fostering civic engagement and trust.",

process: {
  research: 
    "We began with deep community engagement: participating in local events, walking neighborhoods, and holding open conversations with residents and city staff. These sessions revealed common challenges: fragmented and outdated resource information, lack of bilingual access, and no central hub for events or services. Insights from these interactions shaped the core features: bilingual support, a map-based resource browser, semantic search, daily polls for feedback, and an easy way for residents to submit events and updates.",
    
  design: 
    "The interface was designed with accessibility, clarity, and civic identity in mind. We created a clean, modular layout with a clear visual hierarchy, color-coded tags, and responsive design optimized for mobile devices. A bilingual toggle enables seamless switching between English and Spanish, while icons and map markers make navigation intuitive. Usability testing with diverse community members informed adjustments to copy, button placement, and visual emphasis to ensure cultural relevance and inclusivity. The final design offers a welcoming, trustworthy platform that empowers residents to connect with resources and engage with their local government."
}

  },




    {
    slug: "bank-app",               // ← URL segment
    title: "Bank Application",
    company: "Personal Project",                   // use “—” if you want a dash
    role: "UX Designer",
    expertise: "UI/UX Design",
    year: "2025",

    // image imports
    hero: require("../Assets/UIUX/bank-hero.png"),
    gallery: [
      require("../Assets/UIUX/bank-1.png"),
      require("../Assets/UIUX/bank-2.png"),
      require("../Assets/UIUX/bank-3.png"),
    ],

    timeline:
      "From explorations to final designs in 5 weeks while working on multiple projects and balancing rapid iteration with stakeholder feedback.",
    background: "The digital banking application was designed to be feature-rich yet highly accessible. A key goal was inclusivity, particularly for Saudi users who often struggle with language options in financial apps. By integrating multilingual support and a clear, intuitive interface, we aimed to reduce friction in everyday banking tasks like transfers, bill payments, and account management. The app supports both Arabic and English natively, with the flexibility to expand further, making digital banking more approachable for a diverse audience.",
    process: {
      research: "We conducted user interviews and surveys with Saudi residents to understand common pain points with existing mobile banking apps—language confusion, cluttered UI, and lack of trust in navigation flow. Based on insights, we defined the key features: a simplified dashboard, multilingual switching, and high visibility of core actions like Pay Bills and Send Money",
      design: "We designed a clean, minimal UI focused on clarity and accessibility. Key actions were iconified and grouped for easier recognition. Special attention was given to localization of languages and cultural UX patterns. Interactive prototypes were tested with users across different demographics to ensure the app remained intuitive and inclusive. Iterations focused on simplifying financial jargon and ensuring responsiveness across devices."
    },
  },

   {
    slug: "realestate-app",               // ← URL segment
    title: "Real Estate Application Application",
    company: "Personal Project",                   // use “—” if you want a dash
    role: "UX Designer",
    expertise: "UI/UX Design",
    year: "2024",

    // image imports
    hero: require("../Assets/UIUX/realestate.png"),
    gallery: [
      require("../Assets/UIUX/realestate.png"),
      require("../Assets/UIUX/realestate-1.png"),
      require("../Assets/UIUX/realestate-2.png"),
    ],
timeline:
  "4 months of UX Research. From interviewing real estate agents to actual Saudi residents.",
background: "The Saudi real estate application was designed to make property discovery and purchasing effortless for local users. A key goal was improving access to accurate, up-to-date property listings, particularly for buyers and renters in Saudi Arabia who often struggle with fragmented real estate platforms. By integrating a clean search flow, high-quality visuals, and Arabic-first design, we aimed to make browsing, filtering, and contacting sellers as simple as possible. The app supports both Arabic and English natively, ensuring usability for a diverse audience while maintaining a strong cultural fit.",
process: {
  research: "We conducted user interviews and surveys with Saudi residents to understand common pain points with existing real estate apps—outdated listings, limited search filters, poor-quality images, and confusing navigation. Based on these insights, we defined the key features: category-based browsing (villas, apartments, offices, etc.), location-based search with interactive maps, and detailed property pages with owner contact options.",
  design: "We designed a modern, minimal UI that prioritizes large, high-resolution property images and clear navigation. Filters and categories are prominently displayed for quick access, while property cards show essential details at a glance. Special attention was given to right-to-left (RTL) layout for Arabic, ensuring text alignment, icon placement, and flow felt natural for local users. Interactive prototypes were tested with users across different age groups and tech comfort levels, leading to iterations that improved search speed, enhanced map usability, and streamlined the contact process."
}
  },

  {
    slug: "realestate-app",               // ← URL segment
    title: "Real Estate Application Application",
    company: "Personal Project",                   // use “—” if you want a dash
    role: "UX Designer",
    expertise: "UI/UX Design",
    year: "2024",

    // image imports
    hero: require("../Assets/UIUX/realestate.png"),
    gallery: [
      require("../Assets/UIUX/realestate.png"),
      require("../Assets/UIUX/realestate-1.png"),
      require("../Assets/UIUX/realestate-2.png"),
    ],
timeline:
  "4 months of UX Research. From interviewing real estate agents to actual Saudi residents.",
background: "The Saudi real estate application was designed to make property discovery and purchasing effortless for local users. A key goal was improving access to accurate, up-to-date property listings, particularly for buyers and renters in Saudi Arabia who often struggle with fragmented real estate platforms. By integrating a clean search flow, high-quality visuals, and Arabic-first design, we aimed to make browsing, filtering, and contacting sellers as simple as possible. The app supports both Arabic and English natively, ensuring usability for a diverse audience while maintaining a strong cultural fit.",
process: {
  research: "We conducted user interviews and surveys with Saudi residents to understand common pain points with existing real estate apps—outdated listings, limited search filters, poor-quality images, and confusing navigation. Based on these insights, we defined the key features: category-based browsing (villas, apartments, offices, etc.), location-based search with interactive maps, and detailed property pages with owner contact options.",
  design: "We designed a modern, minimal UI that prioritizes large, high-resolution property images and clear navigation. Filters and categories are prominently displayed for quick access, while property cards show essential details at a glance. Special attention was given to right-to-left (RTL) layout for Arabic, ensuring text alignment, icon placement, and flow felt natural for local users. Interactive prototypes were tested with users across different age groups and tech comfort levels, leading to iterations that improved search speed, enhanced map usability, and streamlined the contact process."
}
  },


  {
    slug: "moraba-app",               // ← URL segment
    title: "Real Estate Application Application",
    company: "Personal Project",                   // use “—” if you want a dash
    role: "UX Designer",
    expertise: "UI/UX Design",
    year: "2024",

    // image imports
    hero: require("../Assets/UIUX/moraba.png"),
    gallery: [
      require("../Assets/UIUX/moraba.png"),
      require("../Assets/UIUX/moraba-1.png"),
      require("../Assets/UIUX/moraba-2.png"),
    ],
timeline:
  "From concept to final design in 3 months, balancing multiple feature rollouts with continuous user feedback and testing.",
background: "The Saudi e-commerce application was designed to make online shopping fast, reliable, and tailored for local users. A key goal was creating a seamless buying experience for a wide range of products—from electronics to accessories—while addressing common frustrations like unclear pricing, complicated checkout, and lack of Arabic-first design. The app supports both Arabic and English, offers a clean product browsing experience, and ensures smooth cart and checkout flows for a diverse audience.",
process: {
  research: "We conducted user interviews and surveys with Saudi shoppers to understand their challenges with existing e-commerce apps—slow load times, overwhelming layouts, limited payment options, and confusing product categorization. Based on these insights, we defined the key features: clear product categories, prominent offers and discounts, quick-add to cart, and transparent pricing with shipping incentives.",
  design: "We created a modern, minimal interface that highlights products with high-quality imagery and clear labeling. Categories and offers are prominently displayed to guide shoppers quickly to their desired products. The cart and checkout flow were simplified with visible totals, shipping promotions, and easy quantity adjustments. Special care was taken to optimize for right-to-left (RTL) Arabic layout, ensuring text, buttons, and icons feel natural for local users. Prototypes were tested with various age groups, resulting in iterations that improved browsing speed, reduced cart abandonment, and made promotions more visible."
}

  },


  /* add more case-study objects here */
];
