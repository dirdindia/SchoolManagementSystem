export const schoolDetails = {
  name: "EduPrime World School",
  tagline: "Empowering Minds, Shaping Tomorrow",
  established: "1998",
  affiliation: "CBSE & Cambridge International Accredited (Reg. No: 2130849)",
  contact: {
    phone: "+91 (011) 4892-0000",
    admissionHelpline: "+91 98765-43210",
    email: "admissions@eduprimeworld.edu.in",
    supportEmail: "erp-support@eduprimeworld.edu.in",
    address: "Campus Horizon, Sector 42, Institutional Area, New Delhi - 110001",
    timings: "Mon - Sat: 8:00 AM - 4:30 PM"
  },
  stats: [
    { label: "Active Students", value: "3,450+", icon: "Users", color: "from-blue-500 to-indigo-600" },
    { label: "Board Exam Average", value: "98.6%", icon: "Award", color: "from-amber-400 to-orange-500" },
    { label: "Certified Educators", value: "180+", icon: "GraduationCap", color: "from-emerald-400 to-teal-600" },
    { label: "Smart 3D Classrooms", value: "100%", icon: "MonitorCheck", color: "from-purple-500 to-pink-500" },
    { label: "Global University Placements", value: "99.2%", icon: "Globe", color: "from-cyan-400 to-blue-600" },
    { label: "Sports & Innovation Trophies", value: "240+", icon: "Trophy", color: "from-yellow-400 to-amber-600" }
  ]
};

export const academicPrograms = [
  {
    id: "pre-primary",
    title: "Pre-Primary & Kindergarten",
    badge: "Ages 3 - 5",
    description: "Montessori-inspired experiential learning fostering curiosity, early language phonics, motor skills, and foundational mathematical intuition.",
    highlights: ["Play-based STEM exploration", "Color-coded sensory zones", "Daily music & fine arts", "Child-safe interactive floor displays"],
    accent: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30"
  },
  {
    id: "primary",
    title: "Primary Wing (Grades I - V)",
    badge: "Grades 1 - 5",
    description: "Inquiry-driven curriculum balancing core sciences, literature, global languages, ethics, and early computational problem solving.",
    highlights: ["Dual-teacher collaborative model", "Young Coder's scratch studio", "Bilingual communication lab", "Junior Olympiad training"],
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30"
  },
  {
    id: "middle",
    title: "Middle School (Grades VI - VIII)",
    badge: "Grades 6 - 8",
    description: "Deep dive into analytical thinking, laboratory sciences, robotics design, advanced mathematics, debates, and athletics.",
    highlights: ["Hands-on IoT & Robotics Lab", "Model United Nations (MUN)", "Foreign Languages (French/German/Spanish)", "Inter-house Championship league"],
    accent: "from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/30"
  },
  {
    id: "senior",
    title: "Senior Secondary (Grades IX - XII)",
    badge: "Grades 9 - 12",
    description: "Rigorous academic pathways: Science (PCM/PCB), Commerce with FinTech, Humanities & Social Sciences with pre-college SAT/JEE/NEET mentoring.",
    highlights: ["IIT-JEE & NEET integrated prep", "Silicon Valley incubator cell", "Global university counselling", "AI & Quantum computing basics"],
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30"
  }
];

export const virtualTourHotspots = [
  {
    name: "AI & Innovation Super-Lab",
    category: "STEM & Tech",
    description: "Equipped with 3D printers, drone test bays, humanoid robotics kits, and high-performance computing clusters.",
    stats: "65 Workstations • 1 Gbps Fiber",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Central Digital Library & Archive",
    category: "Knowledge Hub",
    description: "Over 35,000 print books, 2 million digital research papers via JSTOR & Kindle terminals, with silent acoustic pods.",
    stats: "35,000+ Books • 80 Kindle Pods",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Olympic Standard Sports Complex",
    category: "Athletics",
    description: "Heated all-weather 50m swimming pool, FIFA-grade turf football arena, synthetic tennis courts, and indoor badminton stadium.",
    stats: "8 Sports Arenas • National Coaches",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Performing Arts & Symphony Auditorium",
    category: "Creative Arts",
    description: "1,200-seater acoustically tuned auditorium with computerized theatrical lighting, orchestra pit, and green rooms.",
    stats: "1,200 Seats • Dolby Surround",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
  }
];

export const feeCalculatorOptions = {
  grades: [
    { id: "pre-k", name: "Pre-Kindergarten / Nursery", baseAnnual: 95000, termCount: 4 },
    { id: "primary-1-5", name: "Grade 1 to Grade 5 (Primary)", baseAnnual: 125000, termCount: 4 },
    { id: "middle-6-8", name: "Grade 6 to Grade 8 (Middle)", baseAnnual: 145000, termCount: 4 },
    { id: "secondary-9-10", name: "Grade 9 & 10 (Secondary Board)", baseAnnual: 165000, termCount: 4 },
    { id: "senior-11-12", name: "Grade 11 & 12 (Science / Commerce / Arts)", baseAnnual: 185000, termCount: 4 }
  ],
  transportZones: [
    { id: "none", name: "No Transport (Self Commute)", cost: 0 },
    { id: "zone-1", name: "Zone 1: Within 5 km radius (GPS AC Bus)", cost: 24000 },
    { id: "zone-2", name: "Zone 2: 5 - 12 km radius (GPS AC Bus)", cost: 32000 },
    { id: "zone-3", name: "Zone 3: 12 - 20 km radius (GPS AC Bus)", cost: 40000 }
  ],
  hostelDayOptions: [
    { id: "day-scholar", name: "Regular Day Scholar (8 AM - 3 PM)", cost: 0 },
    { id: "extended-day", name: "Day Boarding with Evening Sports & Organic Meals (8 AM - 6 PM)", cost: 38000 },
    { id: "full-hostel", name: "Full Boarding Residential (AC Suite + Mess + Medical + Laundry)", cost: 180000 }
  ],
  optionalClubs: [
    { id: "robotics", name: "NASA / Robotics Elite Club", cost: 12000 },
    { id: "horse-riding", name: "Equestrian & Horse Riding Academy", cost: 18000 },
    { id: "foreign-lang", name: "French/German Alliance Certification", cost: 9500 },
    { id: "music-orchestra", name: "Trinity Music Guild & Orchestra", cost: 14000 }
  ]
};

export const liveNotices = [
  {
    id: 1,
    title: "Admissions Open for Academic Session 2026-27 (Nursery to Grade XI)",
    date: "November 12, 2026",
    category: "Admissions",
    isUrgent: true,
    description: "Limited seats available across branches. Early application window closes on 30th November 2026. Online entrance assessment dates announced."
  },
  {
    id: 2,
    title: "Annual Global Science & Innovation Conclave 2026",
    date: "November 25, 2026",
    category: "Events",
    isUrgent: false,
    description: "Keynote by ISRO scientists and presentation of 40 student-built IoT and AI working prototypes in main auditorium."
  },
  {
    id: 3,
    title: "CBSE & Cambridge Half-Yearly Report Card Release on Parent Portal",
    date: "November 18, 2026",
    category: "Academic",
    isUrgent: true,
    description: "Parents can securely download digitally verified progress cards with percentile analysis via Parent Panel credentials."
  },
  {
    id: 4,
    title: "Inter-School State Aquatic & Athletics Championship Selection",
    date: "December 02, 2026",
    category: "Sports",
    isUrgent: false,
    description: "Trials begin this Friday at the Olympic Pool for Under-14 and Under-17 categories."
  }
];

export const testimonials = [
  {
    name: "Dr. Rajesh & Sunita Malhotra",
    role: "Parents of Rohan Malhotra (Grade 10)",
    text: "The transformation in Rohan's confidence and problem-solving skills is extraordinary. The ERP portal gives us real-time insights into his attendance, test feedback, and bus tracking every single day.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Priya Sengupta",
    role: "Alumna (Batch 2023) • Now at MIT Computer Science",
    text: "EduPrime's robotics lab and supportive mentors laid the foundation for my research in robotics. This school doesn't just teach syllabus; it ignites lifelong ambition.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Col. Vikram Rathore",
    role: "Parent of Ananya (Grade 7)",
    text: "Discipline, top-tier sports infrastructure, and transparent fee administration make EduPrime stand head and shoulders above any international school in the country.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const panelsList = [
  {
    id: "landing",
    name: "Public Portal & Landing",
    desc: "School branding, 3D hero, admissions showcase, virtual tour, notice board & fee calculator",
    icon: "Globe",
    badge: "Public Access",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "admin",
    name: "Super Admin & Principal",
    desc: "360° Institutional ERP control, student-staff roster, multi-branch, audit & permissions",
    icon: "ShieldAlert",
    badge: "Master Role",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: "staff",
    name: "Teacher & Faculty Panel",
    desc: "Smart attendance taker, digital gradebook, homework broadcaster, lesson planner",
    icon: "GraduationCap",
    badge: "Educators",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "student",
    name: "Student Learning Desk",
    desc: "My subjects, live timetable, digital marksheet, homework submitter & reading pods",
    icon: "BookOpen",
    badge: "Students",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "parent",
    name: "Parent & Guardian Gateway",
    desc: "Child's academic growth, live GPS school bus tracker, 1-click online fee pay & teacher chat",
    icon: "HeartHandshake",
    badge: "Parents",
    color: "from-rose-500 to-pink-600"
  },
  {
    id: "accountant",
    name: "Accounts & Fee Cell",
    desc: "Cashless fee collection, automated receipt generator, salary payroll & ledger analytics",
    icon: "CreditCard",
    badge: "Finance",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: "librarian",
    name: "Library & E-Resources",
    desc: "35,000+ volume ISBN barcode issue/return, digital repository & late fee calculator",
    icon: "Library",
    badge: "Library",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "transport",
    name: "Transport & Bus Fleet",
    desc: "Live GPS bus tracking, route optimization, driver rosters & stop-wise student manifests",
    icon: "Bus",
    badge: "Logistics",
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: "hostel",
    name: "Hostel & Dormitory",
    desc: "Bed inventory, warden roll-call, night gate passes, mess menu & infirmary health records",
    icon: "Building",
    badge: "Residential",
    color: "from-teal-500 to-emerald-600"
  },
  {
    id: "exam",
    name: "Examination & Results Cell",
    desc: "Admit cards / Hall tickets, automated seating charts, grading rubrics & merit list",
    icon: "FileSpreadsheet",
    badge: "Exam Controller",
    color: "from-violet-500 to-indigo-600"
  }
];

export const mockStudents = [
  { id: "STU-1001", name: "Aarav Sharma", grade: "10-A", roll: 12, attendance: "96.4%", fees: "Paid", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80", parent: "Rajesh Sharma", gpa: "3.92 / 4.0" },
  { id: "STU-1002", name: "Ananya Iyer", grade: "10-A", roll: 14, attendance: "98.1%", fees: "Paid", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80", parent: "Sundar Iyer", gpa: "4.00 / 4.0" },
  { id: "STU-1003", name: "Kabir Verma", grade: "9-B", roll: 21, attendance: "91.8%", fees: "Due ₹12,500", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", parent: "Vikram Verma", gpa: "3.65 / 4.0" },
  { id: "STU-1004", name: "Zoya Siddiqui", grade: "11-Science", roll: 5, attendance: "95.0%", fees: "Paid", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80", parent: "Tariq Siddiqui", gpa: "3.88 / 4.0" },
  { id: "STU-1005", name: "Devansh Mehra", grade: "12-Commerce", roll: 9, attendance: "89.2%", fees: "Paid", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80", parent: "Ashok Mehra", gpa: "3.75 / 4.0" }
];

export const mockTeachers = [
  { id: "TCH-201", name: "Dr. Shalini Mukherji", subject: "Advanced Physics & Robotics", classes: "11-A, 12-A", experience: "14 Years", rating: "4.9/5", status: "In Class (Lab 2)" },
  { id: "TCH-202", name: "Prof. Christopher Vance", subject: "World Literature & Debating", classes: "9-B, 10-A", experience: "11 Years", rating: "4.8/5", status: "Available" },
  { id: "TCH-203", name: "Mrs. Meenakshi Raman", subject: "Pure Mathematics & Calculus", classes: "10-A, 12-B", experience: "16 Years", rating: "5.0/5", status: "In Class (Room 104)" },
  { id: "TCH-204", name: "Coach Gurpreet Singh", subject: "Athletics & Physical Training", classes: "All Wings", experience: "9 Years", rating: "4.9/5", status: "On Turf" }
];
