/**
 * AFAIK Knowledge Hub - Data Store
 * All application data in a centralized location
 */

const AppData = {
  // ===== PROJECTS DATA =====
  projects: [
    {
      id: 1,
      name: "1001 Parkway Residences",
      category: "FILIGREE",
      location: "Filinvest City, Alabang, Muntinlupa City, Metro Manila",
      type: "FILIGREE",
      status: "Pre-selling",
      description:
        "Modern twin-tower residential development with premium amenities",
      fullDescription:
        "1001 Parkway Residences is an upscale, two-tower residential development by Filigree, located in Filinvest City, Alabang. It is recognized as the 'Metro South's Iconic Garden Towers' and is set to become the tallest residential building in Filinvest City.",
      awards: [
        "High-Rise Architecture in the Philippines at the 2024–2025 Asia Pacific Property Awards",
      ],
      features: ["Swimming Pool", "Gym", "Function Hall", "Landscaped Gardens"],
      amenities: [
        "Driveway",
        "Drop-off",
        "Pavilion",
        "Adult Pool with 50-meter lap section",
        "Kiddie Pool",
        "Outdoor Kids Play Area",
        "Indoor Kids Play Area",
        "Lobby Lounge",
        "Main Lobby",
        "Gym & Yoga",
        "Dog Park",
        "Pool Lounge",
        "Sky Lounge (Tower 1 41st Floor)",
      ],
      image:
        "https://th.bing.com/th/id/OIP.-EQkoYVmKthMf-ZE1hy8fwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#2563eb",
      units: "764",
      completion: "2028",
      unitTypes: [
        {
          name: "1-BR Classic",
          size: "52-60 sqm",
          priceRange: "₱14.5M - ₱19.1M",
        },
        {
          name: "2-BR Classic",
          size: "84-104 sqm",
          priceRange: "₱27.5M - ₱33.5M",
        },
        {
          name: "3-BR Classic",
          size: "181 sqm",
          priceRange: "₱54.0M - ₱58.2M",
        },
        {
          name: "1-BR Garden",
          size: "70 sqm",
          priceRange: "₱21.7M - ₱22.0M",
        },
        {
          name: "2-BR Garden",
          size: "96-118 sqm",
          priceRange: "₱31.8M - ₱38.6M",
        },
        {
          name: "3-BR Garden Penthouse",
          size: "226-237 sqm",
          priceRange: "₱78.4M - ₱81.5M",
        },
      ],
      website: "https://1001parkwayresidences.com/",
      facebook: "https://www.facebook.com/1001Parkway",
      instagram: "https://www.instagram.com/1001parkwayresidences/",
    },
    {
      id: 2,
      name: "Studio City",
      category: "ASPIRE",
      location: "Alabang, Muntinlupa City, Metro Manila",
      type: "ASPIRE",
      status: "RFO",
      description:
        "Affordable studio living for young professionals and students",
      fullDescription:
        "Studio City offers contemporary studio living designed specifically for young professionals, students, and investors. Located in the heart of Alabang, it provides unmatched connectivity to business districts, shopping centers, and transport hubs.",
      features: [
        "Study Areas",
        "Co-working Spaces",
        "Retail Shops",
        "Transport Hub",
      ],
      amenities: [
        "Study Areas",
        "Co-working Spaces",
        "Retail Shops",
        "Transport Hub",
        "24/7 Security",
        "Fitness Center",
      ],
      image:
        "https://tse2.mm.bing.net/th/id/OIP.7HRXbHhiV5KthLtPp-5GsQHaFA?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#11998e",
      units: "2,162",
      completion: "2021",
    },
    {
      id: 3,
      name: "The Levels",
      category: "ASPIRE",
      location: "Alabang, Muntinlupa City, Metro Manila",
      type: "ASPIRE",
      status: "RFO",
      description: "Elevated living with panoramic city and nature views",
      fullDescription:
        "The Levels offers elevated residential living with stunning panoramic views of both the cityscape and surrounding nature. Designed for modern urban professionals seeking quality and convenience.",
      features: [
        "Sky Garden",
        "Infinity Pool",
        "Business Center",
        "Shuttle Service",
      ],
      amenities: [
        "Sky Garden",
        "Infinity Pool",
        "Business Center",
        "Shuttle Service",
        "Function Rooms",
        "Children's Playground",
      ],
      image:
        "https://images.myproperties.ph/uploads/gallery/the-levels-featured-image.jpg",
      color: "#7c3aed",
      units: "783",
      completion: "2024",
    },
    {
      id: 4,
      name: "The Signature",
      category: "PRESTIGE",
      location: "A. Bonifacio Avenue, Quezon City, Metro Manila",
      type: "PRESTIGE",
      status: "RFO",
      description: "Ultra-luxury living with signature amenities and services",
      fullDescription:
        "The Signature represents the pinnacle of luxury residential living, offering world-class amenities and personalized services that cater to the most discerning homeowners.",
      features: [
        "Concierge Service",
        "Private Dining",
        "Wine Cellar",
        "Valet Parking",
      ],
      amenities: [
        "Concierge Service",
        "Private Dining",
        "Wine Cellar",
        "Valet Parking",
        "Spa & Wellness Center",
        "Private Cinema",
      ],
      image:
        "https://tse4.mm.bing.net/th/id/OIP.hc4dY20PDiYm9Gwf3DToywHaGa?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#d97706",
      units: "125",
      completion: "2023",
    },
    {
      id: 5,
      name: "Fortune Hill",
      category: "PRESTIGE",
      location: "San Juan City, Metro Manila",
      type: "PRESTIGE",
      status: "RFO",
      description: "Premium hillside community with scenic mountain views",
      fullDescription:
        "Fortune Hills is an exclusive hillside residential community offering breathtaking mountain views, premium amenities, and a serene environment perfect for families seeking privacy and prestige.",
      features: [
        "Golf Course",
        "Country Club",
        "Hiking Trails",
        "Exclusive Village",
      ],
      amenities: [
        "Golf Course",
        "Country Club",
        "Hiking Trails",
        "Exclusive Village",
        "24/7 Security",
        "Clubhouse",
      ],
      image:
        "https://filinvest.com/storage/imageable/content/95c8f422f9c3308d391cbcefae21d5ad/Fortune-Hill-Facade-1-original.jpg",
      color: "#16a34a",
      units: "92",
      completion: "2024",
    },
    {
      id: 6,
      name: "Filinvest City",
      category: "TOWNSHIPS",
      location: "Alabang, Muntinlupa City, Metro Manila",
      type: "TOWNSHIPS",
      description: "Complete live-work-play township development",
      fullDescription:
        "Filinvest City is a master-planned township that seamlessly integrates residential, commercial, and lifestyle destinations. It's a complete community where you can live, work, learn, shop, and play.",
      features: [
        "Business District",
        "Shopping Centers",
        "Schools",
        "Hospitals",
      ],
      amenities: [
        "Business District",
        "Shopping Centers",
        "Top Schools",
        "World-Class Hospitals",
        "Parks & Recreation",
        "Transportation Hub",
      ],
      image:
        "https://media.philstar.com/images/articles/filinvest-city-alabang-1_2018-04-05_16-26-41.jpg",
      color: "#003d5c",
      units: "5,000+",
      completion: "Ongoing",
    },
    {
      id: 7,
      name: "Botanika Tower 1",
      category: "FILIGREE",
      location: "Alabang, Muntinlupa City, Metro Manila",
      type: "FILIGREE",
      status: "RFO",
      description: "Nature-inspired living with extensive green spaces",
      fullDescription:
        "Botanika Nature Residences brings nature into urban living with its extensive botanical gardens, eco-friendly design, and wellness-focused amenities.",
      features: [
        "Botanical Gardens",
        "Tree Houses",
        "Meditation Areas",
        "Eco-friendly Design",
      ],
      amenities: [
        "Botanical Gardens",
        "Tree Houses",
        "Meditation Areas",
        "Eco-friendly Design",
        "Yoga Deck",
        "Organic Garden",
      ],
      image:
        "https://moveinthecity.ph/wp-content/uploads/2021/04/act_33149.jpg",
      color: "#059669",
      units: "101",
      completion: "2024",
    },
    {
      id: 8,
      name: "Golf Ridge",
      category: "FILIGREE",
      location: "Filinvest Mimosa Plus, Pampanga",
      type: "FILIGREE",
      status: "Pre-selling",
      description: "Exclusive hillside village with panoramic views",
      fullDescription:
        "Golf Ridge offers exclusive hillside lots with panoramic views of the surrounding mountains and golf course. An ideal location for those seeking a premium vacation home or retirement haven.",
      features: ["Mountain Views", "Private Roads", "Security", "Club House"],
      amenities: [
        "Mountain Views",
        "Private Roads",
        "24/7 Security",
        "Club House",
        "Golf Course Access",
        "Nature Trails",
      ],
      image:
        "https://www.preselling.com.ph/wp-content/uploads/2020/06/Golf-Ridge-Clark-Condo-By-Filinvest.jpg",
      color: "#ca8a04",
      units: "212",
      completion: "2027",
    },
    {
      id: 9,
      name: "Studio N",
      category: "ASPIRE",
      location: "Alabang, Muntinlupa City, Metro Manila",
      type: "ASPIRE",
      status: "RFO",
      description:
        "Contemporary studio units located in the heart of Alabang, offering easy access to business districts, lifestyle hubs, and major transport routes—ideal for young professionals, students, or investors.",
      fullDescription:
        "Studio N presents contemporary studio units strategically located in Alabang's prime area. Perfect for young professionals, students, and investors looking for accessibility and modern urban living.",
      features: [
        "Business Districts",
        "Shopping Malls",
        "Cafés & Restaurants",
        "Fitness & Lifestyle Centers",
      ],
      amenities: [
        "Business District Access",
        "Shopping Malls",
        "Cafés & Restaurants",
        "Fitness Centers",
        "Transport Hub",
        "Co-working Spaces",
      ],
      image:
        "https://tse3.mm.bing.net/th/id/OIP.w6A1BQ3c3P4EkRfYCadjkAHaH1?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#8b5cf6",
      units: "918",
      completion: "2024",
    },
    {
      id: 10,
      name: "The Glades",
      category: "PRESTIGE",
      location: "Timberland Heights, San Mateo, Rizal",
      type: "PRESTIGE",
      status: "RFO",
      description:
        "The Glades is a peaceful residential community within Timberland Heights, offering a serene forest setting with elevated views. Designed for those who want a balance of nature, comfort, and accessibility—just minutes away from city conveniences.",
      fullDescription:
        "The Glades offers a unique blend of mountain resort living and urban convenience. Nestled within Timberland Heights' cool climate and lush forest setting, it provides the perfect escape while remaining accessible to Metro Manila.",
      features: [
        "Forest & Mountain Views",
        "Walking & Nature Trails",
        "Clubhouse & Leisure Areas",
        "24/7 Security",
      ],
      amenities: [
        "Forest & Mountain Views",
        "Walking & Nature Trails",
        "Clubhouse",
        "Leisure Areas",
        "24/7 Security",
        "Cool Climate",
      ],
      image:
        "https://tse4.mm.bing.net/th/id/OIP.qj3Oosgdlns4O35EY6qVegHaCH?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "#10b981",
      units: "287",
      completion: "2024",
    },
  ],

  // ===== ORGANIZATION DATA =====
  organization: [
    {
      id: 0,
      name: "Daphne Mae Odra-Sanchez",
      position: "Senior Vice President - Residentials and Estates",
      email: "daphne.odra-sanchez@filinvestcity.com",
      level: 0,
    },
    {
      id: 1,
      name: "Patricia Ann S. Porto",
      position: "Business Intelligence Head • PD — Business Intelligence",
      email: "patricia.porto@filinvestcity.com",
      level: 1,
    },
    {
      id: 2,
      name: "Hannah Priscilla A. Literal",
      position:
        "Data Analytics & Business Process Manager • Data Analytics & Business Process",
      email: "hannah.literal@filinvestcity.com",
      level: 2,
    },
    {
      id: 3,
      name: "John Louie D. Dichoso",
      position: "Tech Business Partner • IT Business Solutions & Tech Support",
      email: "john.dichoso@filinvestcity.com",
      level: 2,
    },
    {
      id: 4,
      name: "Stephanie Jes M. Ilmedo",
      position:
        "Project Development Manager • Project Development - Strategic Planning",
      email: "stephanie.ilmedo@filinvestcity.com",
      level: 2,
    },
    {
      id: 5,
      name: "Anna P. Danganan",
      position: "Project Development Manager • PD - Priming and Innovation",
      email: "anna.danganan@filinvestcity.com",
      level: 2,
    },
    {
      id: 6,
      name: "Kirk Niel D. Ranches",
      position: "Data Analytics Specialist • Data Analytics & Business Process",
      email: "kirk.ranches@filinvestcity.com",
      level: 3,
      reportsTo: [2],
    },
    {
      id: 7,
      name: "Jan Kenneth Declaro",
      position: "Project Development Specialist • PD - Filigree",
      email: "kenneth.declaro@filinvestcity.com",
      level: 3,
      reportsTo: [5],
    },
  ],

  // ===== DASHBOARD MISSIONS =====
  missions: [
    {
      id: 1,
      title: "Review Property Sales Analytics",
      xp: 45,
      description: "Analyze Q1 2026 sales performance data",
    },
    {
      id: 2,
      title: "Update Filinvest City Dashboard",
      xp: 40,
      description: "Refresh township development metrics",
    },
    {
      id: 3,
      title: "Validate Market Research Data",
      xp: 50,
      description: "Quality check latest market analysis reports",
    },
  ],

  // ===== QUICK LINKS =====
  links: [
    {
      id: "etc-plus",
      name: "ETC Plus",
      url: "https://easycompute.filinvest.com.ph",
      description: "Easy to Compute Plus portal",
      color: "#06b6d4 #0891b2",
    },
    {
      id: "sapphire-ims",
      name: "Sapphire IMS",
      url: "https://sms.filinvest.com.ph",
      description: "Sapphire IMS system",
      color: "#6366f1 #4f46e5",
    },
    {
      id: "darwinbox",
      name: "Darwinbox",
      url: "https://filinvest.darwinbox.com",
      description: "HR platform",
      color: "#3b82f6 #2563eb",
    },
    {
      id: "ramco",
      name: "Ramco",
      url: "https://ourlink.filinvest.com.ph/rvw/hub/index.html?_dc=1770271077598",
      description: "OurLink (Ramco)",
      color: "#10b981 #059669",
    },
    {
      id: "ourlink",
      name: "OurLink",
      url: "https://ourlinklitev2.filinvest.com.ph/Identity/Account/Login?ReturnUrl=%2F",
      description: "OurLink Lite login",
      color: "#64748b #475569",
    },
    {
      id: "smartsheet-form",
      name: "PR Form",
      url: "https://app.smartsheet.com/b/form/272739879d374912a9f50d116cb1c923",
      description: "Smartsheet request form",
      color: "#f97316 #ea580c",
    },
    {
      id: "rfp-form",
      name: "Request For Purchase (RFP)",
      url: "https://app.smartsheet.com/b/form/019a9a97c9e973a198864df401c03f25",
      description: "Purchase request form",
      color: "#8b5cf6 #7c3aed",
    },
  ],

  // ===== LOT PROJECTS COMPARISON DATA =====
  lotProjects: [
    {
      id: 101,
      title: "The Glades",
      color: "#22c55e #16a34a",
      details: {
        "Price/sqm (VAT ex)": "43,000",
        "Total Lots": "287",
        "Average Lot Size": "223 sqm",
        "Min Lot Size": "191 sqm",
        "Max Lot Size": "453 sqm",
      },
      paymentSchemes: {
        "Reservation Fee": "₱100,000",
        Cash: "100 - 10%",
        Deferred: "100(12)",
        "Bank Financing": "10(24).90",
      },
    },
    {
      id: 102,
      title: "Celestia",
      color: "#a855f7 #9333ea",
      details: {
        "Price/sqm (VAT ex)": "50,000",
        "Total Lots": "273",
        "Average Lot Size": "463 sqm",
        "Min Lot Size": "345 sqm",
        "Max Lot Size": "1,148 sqm",
      },
      paymentSchemes: {
        "Reservation Fee": "₱100,000",
        Cash: "95-5 - 9%",
        Deferred: "20(1).80(36) - 2%",
        "Bank Financing": "20(36).80",
      },
    },
    {
      id: 103,
      title: "Arborage (Combined)",
      color: "#f59e0b #d97706",
      details: {
        "Price/sqm (VAT ex)": "A: 55k / B: 64k / C: 57k",
        "Total Lots": "241",
        "Average Lot Size": "257 sqm",
        "Min Lot Size": "196 sqm",
        "Max Lot Size": "454 sqm",
      },
      paymentSchemes: {
        "Reservation Fee": "₱50,000",
        Cash: "95-5 - 5%",
        Deferred: "100(24)",
        "Bank Financing": "10 (1) - 20 (24) / 70",
      },
    },
    {
      id: 104,
      title: "Prom II - RFO",
      color: "#3b82f6 #2563eb",
      details: {
        "Price/sqm (VAT ex)": "118,114",
        "Total Lots": "47",
        "Average Lot Size": "264 sqm",
        "Min Lot Size": "125 sqm",
        "Max Lot Size": "652 sqm",
      },
      paymentSchemes: {
        "Reservation Fee": "₱50,000",
        Cash: "100 - 10%",
        Deferred: "30 (1) - 70 (24) - 3%\n10 (1) - 90 (24) - 1%",
        "Bank Financing": "20 (24) - 80",
      },
    },
    {
      id: 105,
      title: "Prom II - Terrace Homes",
      color: "#64748b #475569",
      details: {
        "Price/sqm (VAT ex)": "175,479",
        "Total Lots": "43",
        "Average Lot Size": "298 sqm",
        "Min Lot Size": "188 sqm",
        "Max Lot Size": "450 sqm",
      },
      paymentSchemes: {
        "Reservation Fee": "₱100,000",
        Cash: "100 - 10%",
        Deferred:
          "30 (1) - 70 (24) - 3%\n30 (6) - 70 (19) - 3%\n30 (6) - 70 (24)",
        "Bank Financing": "30 (12) - 70\n10 (12) - 90",
      },
    },
  ],

  // ===== RESOURCES DATA =====
  resources: {
    permits: [
      {
        id: 1,
        title: "Building Permit Process",
        color: "#3b82f6 #2563eb",
        sections: [
          {
            title: "WHAT IS THIS?",
            content:
              "A building permit is required before starting any construction, renovation, or structural modification. This ensures compliance with local building codes and safety standards.",
          },
          {
            title: "HOW TO APPLY",
            content: "Step-by-step application process:",
            steps: [
              "Prepare architectural plans and engineering drawings",
              "Submit application form with complete requirements",
              "Pay assessment fees at the cashier",
              "Wait for evaluation (5-7 business days)",
              "Receive permit or revision notes",
            ],
          },
          {
            title: "REQUIRED DOCUMENTS",
            content:
              "• Application form\n• Land title or proof of ownership\n• Tax declaration\n• Building plans (5 sets)\n• Structural plans\n• Environmental compliance certificate",
          },
        ],
      },
      {
        id: 2,
        title: "Development Permit",
        color: "#22c55e #16a34a",
        sections: [
          {
            title: "WHAT IS THIS?",
            content:
              "A development permit allows you to subdivide land, develop infrastructure, and prepare lots for construction projects.",
          },
          {
            title: "STEP-BY-STEP GUIDE",
            steps: [
              "Submit development plan and feasibility study",
              "Secure environmental clearance",
              "Obtain HLURB/DHSUD approval",
              "Pay development fees",
              "Receive permit to develop",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "License to Sell",
        color: "#a855f7 #9333ea",
        sections: [
          {
            title: "OVERVIEW",
            content:
              "Required before marketing any real estate project. This protects buyers and ensures all legal requirements are met.",
          },
          {
            title: "APPLICATION PROCESS",
            steps: [
              "Complete development permit requirements",
              "Prepare marketing materials for review",
              "Submit application to DHSUD",
              "Wait for evaluation (15-30 days)",
              "Receive license and commence sales",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Road User Permit",
        color: "#64748b #475569",
        sections: [
          {
            title: "PURPOSE",
            content:
              "Required when an activity involves temporary use of roads, such as closures, traffic rerouting, loading/unloading, or use of road space within Filinvest City.",
          },
          {
            title: "HOW TO GET",
            steps: [
              "Secure the application from Filinvest City Management Office or Engineering / Traffic Management Office",
              "Submit the completed form at least 7–14 days before the event or activity",
              "Subject to review and approval by traffic and safety teams",
            ],
          },
          {
            title: "COMMON REQUIREMENTS",
            steps: [
              "Accomplished Road User Permit application form",
              "Event or activity description (date, time, exact location)",
              "Site map / layout showing affected roads",
              "Traffic management plan (if applicable)",
              "Valid ID of requester / company representative",
              "Endorsement from property owner or tenant (if applicable)",
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Locator / Tenant Accountability Clearance & Release Form",
        color: "#f59e0b #d97706",
        sections: [
          {
            title: "PURPOSE",
            content:
              "Confirms that the tenant or locator has no outstanding obligations and accepts accountability related to the activity or event.",
          },
          {
            title: "HOW TO GET",
            steps: [
              "Request the form from Property Management / Leasing Office",
              "Must be signed by the authorized tenant representative",
            ],
          },
          {
            title: "COMMON REQUIREMENTS",
            steps: [
              "Fully accomplished clearance & release form",
              "Authorized signatory details",
              "Copy of valid government ID",
              "Proof of tenant status (Lease Agreement or Tenant Certificate, if required)",
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Event Permit Form",
        color: "#f43f5e #e11d48",
        sections: [
          {
            title: "PURPOSE",
            content:
              "Official approval to conduct an event, activation, or gathering within Filinvest City premises.",
          },
          {
            title: "HOW TO GET",
            steps: [
              "Can be downloaded via email",
              "Can get hardcopies at lobby guard 6F Vector One Building, Northgate Cyberzone",
              "Submit the application at least 2–3 weeks before the event",
            ],
          },
          {
            title: "APPROVAL TIME",
            steps: ["One to two weeks, depending on availability of signatory"],
          },
          {
            title: "COMMON REQUIREMENTS",
            steps: [
              "Accomplished Event Permit Form",
              "Detailed event proposal (program flow, schedule, expected number of attendees)",
              "Event layout / site plan",
              "Sound system details (if applicable)",
              "Safety and security plan",
              "Copy of IDs of organizer / company",
              "Proof of insurance or waiver (if required)",
            ],
          },
        ],
      },
      {
        id: 7,
        title: "Filinvest City Event Clearance",
        color: "#10b981 #059669",
        sections: [
          {
            title: "PURPOSE",
            content:
              "Final clearance confirming that all departments (security, engineering, traffic, estate management) have reviewed and approved the event.",
          },
          {
            title: "HOW TO GET",
            steps: [
              "Issued after submission and approval of all related permits and clearances",
              "Coordinated through the Filinvest City Events / Estate Management Office",
            ],
          },
          {
            title: "COMMON REQUIREMENTS",
            steps: [
              "Approved Event Permit",
              "Approved Road User Permit (if applicable)",
              "Tenant Accountability Clearance & Release Form",
              "Proof of payment of fees (if any)",
              "Final event layout and schedule",
            ],
          },
          {
            title: "IMPORTANT NOTES",
            steps: [
              "Processing time may vary depending on event size and road impact",
              "Incomplete documents may delay approval",
              "Early coordination with Filinvest City Management is highly recommended",
            ],
          },
        ],
      },
    ],
    events: [
      {
        id: 8,
        title: "Open House Events",
        color: "#f97316 #ea580c",
        sections: [
          {
            title: "EVENT GUIDELINES",
            content:
              "Open house events showcase properties to potential buyers. Follow these guidelines to ensure successful events.",
          },
          {
            title: "PLANNING CHECKLIST",
            steps: [
              "Reserve event date 2-3 weeks in advance",
              "Prepare marketing materials and signages",
              "Coordinate with sales team and property staff",
              "Set up registration desk and refreshments",
              "Conduct post-event evaluation",
            ],
          },
        ],
      },
      {
        id: 9,
        title: "Event Forms (External Events)",
        color: "#ec4899 #db2777",
        sections: [
          {
            title: "REQUIRED DETAILS",
            content: "Include the following:",
            steps: [
              "Security Deposit",
              "Location Fee",
              "LGU Permit",
              "Sponsorship Values",
              "Breakdown & Computation of Mileage",
              "Total # of Participants",
            ],
          },
        ],
      },
    ],
    digitalTools: [
      {
        id: 10,
        title: "ETC Plus (Easy to Compute Plus)",
        color: "#06b6d4 #0891b2",
        sections: [
          {
            title: "WHAT IS THIS?",
            content:
              "ETC Plus (Easy to Compute Plus) is an online web portal that allows sellers to submit special computation requests directly through the platform.",
          },
          {
            title: "HOW IT WORKS",
            content: "High-level flow:",
            steps: [
              "Seller submits a special computation request via ETC Plus",
              "Request is immediately routed and made available to the appropriate Product Development (PD) teams",
              "PD reviews and processes the request with better visibility and less back-and-forth",
            ],
          },
          {
            title: "WHY USE ETC PLUS",
            content:
              "Faster processing, clearer status visibility, and reduced manual follow-ups between sellers and PD.",
          },
        ],
      },
    ],
  },
};
