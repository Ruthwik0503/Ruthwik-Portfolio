/*
 * PORTFOLIO CONTENT — edit this file to update the public website.
 * Experience and dates are seeded from a previously shared resume, NOT from a live LinkedIn sync.
 * Please reconcile them against your current LinkedIn before publishing.
 */
window.PORTFOLIO = {
  name: "Ruthwik Reddy Gillela",
  shortName: "Ruthwik Reddy",
  title: "Full Stack AI Engineer",
  location: "Dallas, Texas, United States",
  email: "ruthwikreddy2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/ruthwik-reddy-g/",
  availability: "Open to SDE opportunities",
  heroEyebrow: "FULL STACK · AI/ML · CLOUD",
  heroLead: "I turn complex ideas into useful, well-engineered software.",
  heroDescription: "Full stack and AI-focused software engineer working across backend APIs, responsive web experiences, intelligent applications, and cloud integrations. I enjoy connecting research-minded thinking with production-ready engineering.",
  about: [
    "My work sits at the intersection of software engineering, applied AI, and solving real operational problems. I've built backend services, integrated APIs, worked on data-heavy systems, and explored AI/ML features that make applications more useful.",
    "From early hands-on work at DRDO to application and AI integration roles, I gravitate toward projects that demand careful debugging, clear architecture, and collaboration across teams. I hold a master's degree in Computer and Information Sciences from Texas A&M University–Kingsville."
  ],
  focus: [
    { title: "Build", text: "Python, Java, React, and API-driven web applications." },
    { title: "Intelligence", text: "Computer vision, retrieval, LLM integration, and evaluation." },
    { title: "Ship", text: "Testing, cloud services, integration, and maintainable delivery." }
  ],
  experience: [
    
    {
      role: "Associate Software Developer",
      company: "ASL, Defence Research & Development Organisation (DRDO)",
      date: "Apr 2022 — Dec 2023",
      place: "Hyderabad, India",
      tags: ["Python", "Django", "JavaScript", "MySQL", "TensorFlow"],
      points: [
        "Developed web application modules using Django, JavaScript, SQL, and RESTful APIs for data-driven workflows.",
        "Built responsive interfaces, managed relational data with Django ORM, and implemented backend input validation.",
        "Worked on a crop-leaf classification workflow using computer vision and CNN-based model inference."
      ]
    }
  ],
  projects: [
    {
      id: "geo",
      category: "Full Stack",
      number: "01",
      title: "Geo-Location Tracking System",
      subtitle: "Location data made accessible through a dependable web interface.",
      summary: "A Django-based location management application with database-backed records, map-based lookups, and administrative workflows.",
      role: "Backend and full stack development",
      tech: ["Python", "Django", "JavaScript", "SQL", "MySQL", "REST APIs"],
      details: [
        "Structured the application using Django's Model–View–Template pattern for clear separation of concerns.",
        "Implemented forms, validation, CRUD operations, and location-record management against relational data models.",
        "Connected frontend views with backend operations to help users find and review location information."
      ],
      accent: "lavender",
      visual: "map"
    },
    {
      id: "crop",
      category: "AI & ML",
      number: "02",
      title: "AI Crop Disease Detection",
      subtitle: "Applying computer vision to plant-health classification.",
      summary: "An image-based classification prototype pairing a CNN / transfer-learning pipeline with a Django web application.",
      role: "ML integration and full stack development",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Django", "NumPy"],
      details: [
        "Prepared and processed leaf images using OpenCV and NumPy before model inference.",
        "Explored ResNet-50 and other convolutional models, reviewing validation and classification errors.",
        "Exposed prediction results to a web interface through backend application logic."
      ],
      accent: "lime",
      visual: "leaf"
    },
    {
      id: "semantic",
      category: "AI & ML",
      number: "03",
      title: "Semantic Document Search",
      subtitle: "Finding the right context, not just matching the right words.",
      summary: "A Python prototype exploring document preprocessing, semantic retrieval, and the foundation of RAG-based search.",
      role: "Backend and AI prototyping",
      tech: ["Python", "NLP", "Embeddings", "Django REST", "SQL", "RAG concepts"],
      details: [
        "Implemented document and query processing flows to retrieve passages relevant to users' questions.",
        "Compared keyword-oriented retrieval with semantic similarity for improved contextual relevance.",
        "Explored passing retrieved context to LLM-powered responses while keeping retrieval distinct from generation."
      ],
      accent: "peach",
      visual: "search"
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "HTML & CSS", "Bash"] },
    { category: "Frameworks & APIs", items: ["Django", "Django REST Framework", "Spring Boot", "React", "REST APIs", "Node.js fundamentals"] },
    { category: "AI & Data", items: ["TensorFlow", "OpenCV", "Pandas", "NumPy", "Computer vision", "NLP", "LLM / RAG concepts"] },
    { category: "Cloud & Delivery", items: ["AWS", "Azure fundamentals", "Docker", "Git & GitHub", "CI/CD", "PyTest", "Postman"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server", "Data modeling", "Query optimization"] }
  ],
  education: [
    { degree: "M.S. Computer and Information Sciences", institution: "Texas A&M University–Kingsville", date: "2025", location: "Kingsville, Texas" },
    { degree: "B.Tech. Computer Science & Engineering", institution: "Jawaharlal Nehru Technological University", date: "2023", location: "Hyderabad, India" }
  ],
  certifications: [
    { title: "Google IT Automation with Python", issuer: "Google · Coursera" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft" }
  ]
};
