window.PORTFOLIO_DATA = {

  personal: {
    name: "Hemasai Vattikuti",
    email: "hemasaivattikuti2727@gmail.com",
    linkedin: "https://www.linkedin.com/in/hemasaivattikuti",
    github: "https://github.com/hemasaivattikuti25",
    location: "Amaravati, India"
  },

  metrics: [
    { value: "1,492+",  label: "VitAp-UniOs Queries Served",  highlight: "text-accent-400" },
    { value: "690+",    label: "Mithra Active Users",        highlight: "text-emerald-400" },
    { value: "Sub-10s", label: "DRDO Hot Failover SLA",       highlight: "text-red-400"     },
    { value: "99%",     label: "CNN ML Model Accuracy",      highlight: "text-sky-400"     },
    { value: "7th/490+",label: "Simverse Hackathon Prize",    highlight: "text-purple-400"  },
    { value: "4th/486", label: "Google Cloud Hackathon",     highlight: "text-amber-400"   }
  ],

  featuredSystems: [
    {
      id: "vitap",
      num: "01",
      badge: "LIVE · 1,492+ QUERIES",
      badgeColor: "emerald",
      tag: "RAG · Qdrant · FastEmbed ONNX · Groq · Next.js · FastAPI",
      title: "VitAp-UniOs",
      subtitle: "Production RAG Campus Assistant · Serving 1,492+ Real User Queries",
      problem: "VIT-AP students needed an instant unified AI assistant for campus information. Official notices, faculty details, fees, and timetables were fragmented across websites and PDFs.",
      architecture: "Next.js frontend with real-time SSE response streaming. Async FastAPI backend with parallel hybrid retrieval (vector search + lexical scroll). Qdrant vector DB with FastEmbed ONNX runtime. Groq Llama-3 inference and authority-aware Playwright crawler.",
      challenges: "Ensuring high precision retrieval without cross-campus hallucinations. Running lightweight ONNX embedding pipelines within strict hosting RAM constraints while maintaining high query throughput.",
      tradeoffs: "FastEmbed ONNX over PyTorch: saved over 400MB RAM for free-tier hosting with sub-12ms vector retrieval latency.",
      outcome: "Served 1,492+ real user queries with zero cross-campus hallucination incidents. Automated evaluation suite validates every index rebuild.",
      metrics: [
        { label: "Queries Served", val: "1,492+" },
        { label: "Vector Search",  val: "< 12ms" },
        { label: "Architecture",   val: "Hybrid RAG" }
      ],
      demoUrl: "https://vitap-rag.vercel.app",
      githubUrl: "https://github.com/hemasaivattikuti25/vitap-rag",
      deepDive: {
        keyDecisions: [
          "FastEmbed ONNX Runtime over PyTorch: cuts RAM footprint by ~80% to fit strict free-tier cloud memory limits",
          "Parallel Hybrid Retrieval: executes Qdrant vector similarity search simultaneously with keyword lexical scroll for max precision",
          "Campus Isolation Scoping: automatically filters out irrelevant non-VITAP campus URLs to eliminate cross-campus confusion",
          "Automated evaluate_rag.py Test Suite: score threshold checks and keyword verification on every index rebuild"
        ],
        failureModes: "Groq API rate limit falls back to Llama 3.1 8B instant model. Stale index serves cached data seamlessly during crawler maintenance.",
        futureRoadmap: "Multi-college white-label deployment and custom admin portal for document uploads."
      },
      previewImg: "assets/vitap-rag.svg"
    },
    {
      id: "mithra",
      num: "02",
      badge: "LIVE · 690+ USERS",
      badgeColor: "yellow",
      tag: "Full-Stack · React · FastAPI · PostgreSQL · Supabase · pgvector · Gemini",
      title: "Mithra Life OS",
      subtitle: "AI-Native Productivity Platform · 690+ Active Users · Solo Founder",
      problem: "Productivity applications store notes in siloes without contextual AI or offline capability. Most AI assistants lose context across sessions or demand expensive subscriptions.",
      architecture: "React frontend with offline-first LWW sync engine and localStorage mutation queue. FastAPI backend + Supabase PostgreSQL with Row-Level Security (RLS). Gemini 2.5 dual-model strategy and pgvector 768d embedding search. Multiplayer 'Blend' workspaces with 6-char join codes.",
      challenges: "Enforcing zero-trust user data isolation at the PostgreSQL layer while allowing RLS-controlled cross-user collaboration in shared workspace rooms.",
      tradeoffs: "Enforced RLS policies directly on PostgreSQL tables so data security holds even on direct Supabase client access.",
      outcome: "690+ active users acquired. Zero-trust PostgreSQL database with full offline fallback and real-time multiplayer workspaces.",
      metrics: [
        { label: "Active Users", val: "690+" },
        { label: "Data Security", val: "PostgreSQL RLS" },
        { label: "Embeddings",    val: "768d Gemini" }
      ],
      demoUrl: "https://mithra-lifeos.com",
      githubUrl: "https://github.com/hemasaivattikuti25/Mithra-AI-life-os",
      deepDive: {
        keyDecisions: [
          "Row-Level Security (RLS) on PostgreSQL: zero-trust user isolation enforced at the database level",
          "768-dimensional Gemini embeddings stored in pgvector for semantic journal memory search",
          "Blend Workspaces: 6-char join code multiplayer room system with RLS-controlled cross-user permissions",
          "Offline-first LWW mutation queue for zero data loss during network interruptions"
        ],
        failureModes: "Network loss buffers local mutations to localStorage with exponential backoff sync on reconnect.",
        futureRoadmap: "Android APK build via Capacitor and premium AI subscription tier."
      },
      previewImg: "assets/mithra-lifeos.png"
    },
    {
      id: "projectile",
      num: "03",
      badge: "HACKATHON WINNER · 7TH PLACE",
      badgeColor: "purple",
      tag: "Physics Simulation · React.js · Interactive UI · Canvas",
      title: "Projectile Simulator",
      subtitle: "Real-Time Physics Simulation · Simverse Hackathon at VIT-AP",
      problem: "Visualizing complex projectile trajectories and kinematics physics equations in real time with interactive parametric controls.",
      architecture: "React.js frontend leveraging HTML5 Canvas and mathematical differential equations for real-time trajectory render at 60 FPS.",
      challenges: "Optimizing 60 FPS Canvas render loops while dynamic parameter sliders change mass, angle, drag coefficient, and gravity on the fly.",
      tradeoffs: "Built custom lightweight mathematical differential solver instead of heavy 3D game engines.",
      outcome: "Placed 7th out of 490+ participants at the Simverse Hackathon at VIT-AP. Awarded prize money.",
      metrics: [
        { label: "Hackathon Rank", val: "7th / 490+" },
        { label: "Render Target",  val: "60 FPS Canvas" },
        { label: "Award",          val: "Cash Prize" }
      ],
      demoUrl: "https://projectile-simulator-rho.vercel.app",
      githubUrl: "",
      deepDive: {
        keyDecisions: [
          "HTML5 Canvas 2D context optimization for 60 FPS physics trajectory calculations",
          "Real-time parametric controls for velocity, drag, air resistance, and launch angle"
        ],
        failureModes: "Extreme parameter boundary values are clamped safely to prevent infinite loops.",
        futureRoadmap: "Adding 3D WebGL renderer and multi-body gravitational physics support."
      },
      previewImg: "assets/simlator.svg"
    }
  ],

  timeline: [
    {
      date: "Jun 2026 – Jul 2026",
      type: "FREELANCE",
      typeColor: "text-accent-400",
      dotColor: "bg-accent-400",
      title: "Software Engineer · Orion Movers, New Zealand",
      description: "Delivered complete commercial web application — Next.js (Vercel), FastAPI (Render), Supabase, Resend API, and Google Sheets CRM. Automated quote-to-lead pipeline with zero manual intervention. Implemented deep technical SEO (Open Graph, Twitter Card, canonical tags) ranking on Page 1 of Google for target NZ queries within weeks.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-link text-accent-400 mr-1'></i> Live: <a href='https://www.orionmovers.co.nz' target='_blank' class='text-accent-400 font-bold hover:underline'>www.orionmovers.co.nz</a></span>"
    },
    {
      date: "Feb 2026 – Present",
      type: "PROJECT LAUNCH",
      typeColor: "text-emerald-400",
      dotColor: "bg-emerald-400",
      title: "Creator · VitAp-UniOs Campus RAG Assistant",
      description: "Built production campus assistant serving 1,492+ real student queries. Associated with VIT-AP University. Next.js, FastAPI, FastEmbed ONNX, Qdrant vector DB, Groq Llama-3 inference, and Playwright crawler. Designed authority-aware deduplication and parallel hybrid retrieval.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-link text-emerald-400 mr-1'></i> Live: <a href='https://vitap-rag.vercel.app' target='_blank' class='text-emerald-400 font-bold hover:underline'>vitap-rag.vercel.app</a> · Repository: <a href='https://github.com/hemasaivattikuti25/vitap-rag' target='_blank' class='text-emerald-400 font-bold hover:underline'>github.com/hemasaivattikuti25/vitap-rag</a></span>"
    },
    {
      date: "Jan 2026",
      type: "ACHIEVEMENT",
      typeColor: "text-purple-400",
      dotColor: "bg-purple-400",
      title: "7th Place · Simverse Hackathon · VIT-AP (490+ Participants)",
      description: "Placed 7th out of 490+ participants at the Simverse Hackathon at VIT-AP University for building an interactive 60 FPS HTML5 Canvas projectile physics simulator.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-link text-purple-400 mr-1'></i> Live: <a href='https://projectile-simulator-rho.vercel.app' target='_blank' class='text-purple-400 font-bold hover:underline'>projectile-simulator-rho.vercel.app</a></span>"
    },
    {
      date: "Nov 2025 – Present",
      type: "FOUNDER",
      typeColor: "text-amber-400",
      dotColor: "bg-amber-400",
      title: "Founder · Mithra Life OS",
      description: "Built AI-native productivity platform serving 690+ active users. React, FastAPI, Supabase PostgreSQL with RLS, pgvector 768d Gemini embeddings, and multiplayer Blend workspaces with 6-char join codes.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-link text-amber-400 mr-1'></i> Live: <a href='https://mithra-lifeos.com' target='_blank' class='text-amber-400 font-bold hover:underline'>mithra-lifeos.com</a> · Repository: <a href='https://github.com/hemasaivattikuti25/Mithra-AI-life-os' target='_blank' class='text-amber-400 font-bold hover:underline'>github.com/hemasaivattikuti25/Mithra-AI-life-os</a></span>"
    },
    {
      date: "Aug 2025 – Nov 2025",
      type: "INTERNSHIP",
      typeColor: "text-red-400",
      dotColor: "bg-red-400",
      title: "Project Intern (Backend & Distributed Systems) · DRDL – DRDO",
      description: "Ministry of Defence, Govt. of India. Architected 3-node MongoDB Replica Set with automatic PRIMARY election and sub-10s hot failover for Defence Asset Management System under Scientist 'E'. Built production-grade FastAPI backend with JWT, RBAC, and rate limiting. Dockerised 5-service stack with 30s background health monitoring.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-file-pdf text-red-400 mr-1'></i> Certificate: <a href='assets/DRDL_HemaSai.pdf' target='_blank' class='text-red-400 font-bold hover:underline'>DRDO_DRDL_Certificate.pdf</a> · Repository: <a href='https://github.com/hemasaivattikuti25/drdo_p1' target='_blank' class='text-red-400 font-bold hover:underline'>github.com/hemasaivattikuti25/drdo_p1</a></span>"
    },
    {
      date: "Jun 2025 – Nov 2025",
      type: "OPEN SOURCE",
      typeColor: "text-emerald-400",
      dotColor: "bg-emerald-400",
      title: "Open Source Contributor · GirlScript Summer of Code (GSSoC)",
      description: "Contributed to open-source FastAPI and Machine Learning repositories. Collaborated on code reviews, backend optimization, and developer tooling."
    },
    {
      date: "Mar 2025",
      type: "ACHIEVEMENT",
      typeColor: "text-amber-400",
      dotColor: "bg-amber-400",
      title: "4th Place · Google Cloud Hackathon (486 Participants)",
      description: "Placed 4th out of 486 participants at the Google Cloud sponsored hackathon at VIT-AP University. Top 1% competitive finish."
    },
    {
      date: "Jan 2025 – Jul 2025",
      type: "INTERNSHIP",
      typeColor: "text-sky-400",
      dotColor: "bg-sky-400",
      title: "Machine Learning Intern · LaunchED Global",
      description: "In association with Btech Walleh. Delivered end-to-end CNN-based image classification project achieving 99% test accuracy. Covered dataset curation, preprocessing, model architecture design, hyperparameter tuning, early stopping regularization, and benchmarking.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-file-pdf text-sky-400 mr-1'></i> Certificate: <a href='assets/lanched.pdf' target='_blank' class='text-sky-400 font-bold hover:underline'>LaunchED_ML_Certificate.pdf</a></span>"
    },
    {
      date: "Nov 2024 – Jan 2025",
      type: "INTERNSHIP",
      typeColor: "text-purple-400",
      dotColor: "bg-purple-400",
      title: "Artificial Intelligence Intern · Embrizon Technologies",
      description: "Built FastAPI backend and chatbot training pipeline for a production AI product. Received Letter of Recommendation (LOR) from Founder & CEO for outstanding technical performance.<br/><span class='mt-2 block text-xs'><i class='fa-solid fa-file-pdf text-purple-400 mr-1'></i> LOR Document: <a href='assets/Embrizon_Letter_of_Recommendation.pdf' target='_blank' class='text-purple-400 font-bold hover:underline'>Embrizon_LOR.pdf</a></span>"
    }
  ],

  principles: [
    {
      num: "01",
      icon: "fa-database",
      iconColor: "text-amber-400",
      title: "Data Integrity Over Convenience",
      text: "Never compromise database schema constraints or data validation rules for rapid prototyping. Production systems require deterministic data guarantees from day zero."
    },
    {
      num: "02",
      icon: "fa-bolt",
      iconColor: "text-emerald-400",
      title: "Fail Fast & Failover Faster",
      text: "Architect distributed infrastructure to detect network partitions and primary node failures instantly. Automatic hot failover with sub-10s recovery SLAs is mandatory."
    },
    {
      num: "03",
      icon: "fa-chart-line",
      iconColor: "text-sky-400",
      title: "Measure Telemetry, Not Intuition",
      text: "Every API endpoint, vector query, and backend worker thread must emit structured telemetry logs and latencies. Optimization without benchmarking is guesswork."
    },
    {
      num: "04",
      icon: "fa-shield-halved",
      iconColor: "text-red-400",
      title: "Zero-Trust System Security",
      text: "Enforce Row-Level Security (RLS) on database engines, role-based access control (RBAC), and stateless JWT authorization at every network boundary."
    },
    {
      num: "05",
      icon: "fa-brain",
      iconColor: "text-purple-400",
      title: "Context-Aware AI Infrastructure",
      text: "Generative AI applications are only as good as their retrieval context. RAG systems must utilize hybrid search, ONNX runtime compression, and low-latency vector databases."
    },
    {
      num: "06",
      icon: "fa-signal",
      iconColor: "text-accent-400",
      title: "Resilient Offline Fallbacks",
      text: "Network interruptions are inevitable. Client applications must buffer mutations locally using Last-Write-Wins (LWW) sync engines to prevent data loss."
    }
  ],

  certifications: [
    {
      title: "DRDO DRDL Internship Certificate",
      org: "Defence Research and Development Laboratory (DRDL) · DRDO",
      date: "Aug – Nov 2025",
      badge: "GOVT VERIFIED",
      icon: "fa-shield-halved",
      iconType: "fa-solid",
      badgeColor: "text-red-400",
      desc: "Official Project Internship Certificate issued by DRDL, DRDO (Ministry of Defence, Govt. of India) under Scientist 'E' supervision for architecting a 3-node MongoDB Replica Set with sub-10s hot failover & async FastAPI backend for DAMS v3.0.",
      file: "assets/DRDL_HemaSai.pdf"
    },
    {
      title: "AI Agents & Agentic AI with Python & GenAI",
      org: "Vanderbilt University (Coursera)",
      date: "Oct 2025",
      badge: "COURSERA VERIFIED",
      icon: "fa-robot",
      iconType: "fa-solid",
      badgeColor: "text-accent-400",
      desc: "Advanced certification covering AI Agents architecture, agentic workflows, tool use, multi-agent systems, and production LLM deployment patterns using Python.",
      file: "assets/Vanderbilt_AI_Agents_Certificate.pdf"
    },
    {
      title: "Advanced Learning Algorithms",
      org: "Stanford / DeepLearning.AI",
      date: "Jul 2025",
      badge: "STANFORD VERIFIED",
      icon: "fa-graduation-cap",
      iconType: "fa-solid",
      badgeColor: "text-emerald-400",
      desc: "Andrew Ng's advanced ML course covering neural networks, decision trees, ensemble methods, and practical tips for building production ML systems.",
      file: "assets/Stanford_Advanced_ML_Certificate.pdf"
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      org: "Stanford / DeepLearning.AI",
      date: "Apr 2025",
      badge: "STANFORD VERIFIED",
      icon: "fa-chart-line",
      iconType: "fa-solid",
      badgeColor: "text-sky-400",
      desc: "Part 1 of Andrew Ng's Machine Learning Specialization covering linear regression, logistic regression, gradient descent, and regularization techniques.",
      file: "assets/Stanford_Supervised_ML_Certificate.pdf"
    },
    {
      title: "Letter of Recommendation (LOR)",
      org: "Embrizon Technologies (Founder & CEO)",
      date: "Jan 2025",
      badge: "LOR AWARDED",
      icon: "fa-award",
      iconType: "fa-solid",
      badgeColor: "text-amber-400",
      desc: "Letter of Recommendation awarded by Founder & CEO for outstanding technical execution building FastAPI AI backend services and chatbot pipelines.",
      file: "assets/Embrizon_Letter_of_Recommendation.pdf"
    },
    {
      title: "Machine Learning Internship Certificate",
      org: "LaunchED Global / BTech Walleh",
      date: "Jan – Jul 2025",
      badge: "INTERNSHIP VERIFIED",
      icon: "fa-briefcase",
      iconType: "fa-solid",
      badgeColor: "text-purple-400",
      desc: "Official Internship Certificate of Completion for applied ML internship delivering end-to-end CNN image classification model achieving 99% test accuracy.",
      file: "assets/lanched.pdf"
    }
  ],

  terminalCommands: {
    "help":    "Commands: about · skills · experience · vitap · mithra · drdo · orion · projectile · contact · clear",
    "about":   "Hemasai Vattikuti · CSE @ VIT-AP · DRDO Intern (Min of Defence) · Founder, Mithra Life OS (690+ users) · VitAp-UniOs (1,492+ queries)",
    "skills":  "Backend: FastAPI, Async Python, MongoDB Replica Sets, PostgreSQL RLS | AI: RAG, Qdrant, FastEmbed ONNX, pgvector, Gemini 2.5, Groq | DevOps: Docker, Next.js",
    "experience": "Orion Movers NZ (Jun 26) -> DRDO DRDL Intern (Aug 25) -> GSSoC (Jun 25) -> LaunchED Global (Jan 25) -> Embrizon Tech (Nov 24)",
    "vitap":   "VitAp-UniOS · 1,492+ user queries · Hybrid RAG (Qdrant + FastEmbed ONNX) · Groq Llama-3 · Playwright crawler · Live: vitap-rag.vercel.app",
    "mithra":  "Mithra Life OS · 690+ active users · React + FastAPI + Supabase PostgreSQL RLS + pgvector 768d · Live: mithra-lifeos.com",
    "drdo":    "DRDL–DRDO Internship · 3-node MongoDB Replica Set · Sub-10s hot failover · Async FastAPI + JWT + RBAC + rate limiting · Docker Compose · Min of Defence",
    "orion":   "Orion Movers NZ · Next.js + FastAPI + Supabase + Resend API + Google Sheets CRM · Page 1 Google NZ SEO · Live: orionmovers.co.nz",
    "projectile": "Projectile Simulator · 7th place / 490+ participants at Simverse Hackathon · 60 FPS HTML5 Canvas physics · Live: projectile-simulator-rho.vercel.app",
    "contact": "Email: hemasaivattikuti2727@gmail.com | LinkedIn: www.linkedin.com/in/hemasaivattikuti | GitHub: github.com/hemasaivattikuti25"
  }

};
