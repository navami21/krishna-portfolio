// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { 
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   Download,
//   Send,
//   Menu,
//   X,
//   ChevronDown,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Code2,
//   Brain,
//   Database,
//   Globe,
//   Layout,
//   Terminal,
//   GitBranch,
//   BarChart3,

//   // ADD THESE MISSING ICONS
//   Home,
//   User,
//   Folder,
//   Server,
//   Palette,
//   FileCode,
//   FileText,
//   Utensils,
//   Calendar,
//   MapPin,
//   Sparkles,
//   Heart,
//   Trophy,
//   Code,

// } from "lucide-react";
// import profile from "../assets/portfolio.png";

// export default function Portfolio() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const fadeUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const skillVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.4 }
//     },
//     hover: { 
//       scale: 1.1,
//       backgroundColor: "rgba(59, 130, 246, 0.2)",
//       borderColor: "#3b82f6",
//       transition: { duration: 0.2 }
//     }
//   };

//   const projectVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.5 }
//     },
//     hover: { 
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)",
//       transition: { duration: 0.3 }
//     }
//   };

//   const navItems = [
//     { name: "Home", href: "#home", icon: Home },
//     { name: "About", href: "#about", icon: User },
//     { name: "Skills", href: "#skills", icon: Code2 },
//     { name: "Experience", href: "#experience", icon: Briefcase },
//     { name: "Projects", href: "#projects", icon: Folder },
//     { name: "Contact", href: "#contact", icon: Mail }
//   ];

//   const skills = [
//     { name: "Python", icon: Terminal, color: "from-blue-400 to-blue-600" },
//     { name: "Machine Learning", icon: Brain, color: "from-purple-400 to-purple-600" },
//     { name: "React", icon: Layout, color: "from-cyan-400 to-cyan-600" },
//     { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
//     { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-teal-600" },
//     { name: "MySQL", icon: Database, color: "from-orange-400 to-orange-600" },
//     { name: "JavaScript", icon: FileCode, color: "from-yellow-400 to-yellow-600" },
//     { name: "Git & GitHub", icon: GitBranch, color: "from-red-400 to-red-600" },
//     { name: "NumPy/Pandas", icon: BarChart3, color: "from-indigo-400 to-indigo-600" },
//     { name: "Scikit-learn", icon: Brain, color: "from-pink-400 to-pink-600" },
//     { name: "HTML/CSS", icon: Globe, color: "from-blue-500 to-purple-500" },
//     { name: "SQLite", icon: Database, color: "from-gray-400 to-gray-600" }
//   ];

//   const experiences = [
//     {
//       title: "ML & AI Intern",
//       company: "ICT Academy of Kerala",
//       period: "Jul 2025 – Dec 2025",
//       description: "Developed automated notification system and researched machine learning and AI concepts. Explored agentic AI concepts and their applications.",
//       icon: Brain,
//       color: "from-blue-600 to-indigo-600"
//     },
//     {
//       title: "Project Assistant",
//       company: "CSIR – NIIST",
//       period: "Jul 2024 – May 2025",
//       description: "Built and maintained web applications using PHP and MySQL. Collaborated with research teams to develop technical solutions.",
//       icon: Code,
//       color: "from-indigo-600 to-purple-600"
//     },
//     {
//       title: "Certified Specialist in ML & AI",
//       company: "ICT Academy of Kerala",
//       period: "Aug 2023 – Feb 2024",
//       description: "Hands-on experience in Python and Machine Learning, including data preprocessing, exploratory data analysis (EDA), and building supervised models.",
//       icon: Award,
//       color: "from-purple-600 to-pink-600"
//     }
//   ];

//   const projects = [
//     {
//       title: "Dyslexia Detection Using ML",
//       description: "CNN-based classification model for dyslexia detection with data preprocessing and model evaluation.",
//       tech: ["Python", "CNN", "TensorFlow"],
//       icon: Brain,
//       color: "from-blue-500 to-indigo-500"
//     },
//     {
//       title: "Fake News Detection",
//       description: "BERT-based ensemble model to classify COVID-19 news as fake or real using Python and MySQL.",
//       tech: ["BERT", "NLP", "MySQL"],
//       icon: FileText,
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       title: "Food Wastage Reduction",
//       description: "Node.js application connecting food donors with recipients to reduce food wastage.",
//       tech: ["Node.js", "SQLite", "Express"],
//       icon: Utensils,
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white min-h-screen font-['Inter',sans-serif]">
      
//       {/* Animated background particles effect */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
//         <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* NAVBAR */}
//       <motion.nav 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           scrolled 
//             ? "bg-slate-900/95 backdrop-blur-lg border-b border-indigo-500/30 shadow-lg shadow-indigo-500/10" 
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-2"
//           >
//             <Code2 className="w-6 h-6 text-indigo-400" />
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Krishna P S
//             </h1>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8">
//             {navItems.map((item, index) => {
//               const Icon = item.icon;
//               return (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                   className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium relative group flex items-center gap-1"
//                 >
//                   <Icon className="w-4 h-4" />
//                   {item.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//                 </motion.a>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="md:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           initial={false}
//           animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
//           className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg"
//         >
//           <div className="flex flex-col p-4 space-y-4">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-300 hover:text-indigo-400 transition-colors py-2 flex items-center gap-2"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {item.name}
//                 </a>
//               );
//             })}
//           </div>
//         </motion.div>
//       </motion.nav>

//       {/* HERO SECTION */}
//       <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             <motion.div variants={fadeUp}>
//               <span className="text-indigo-400 font-semibold text-lg mb-4 block flex items-center gap-2">
//                 <Sparkles className="w-5 h-5" />
//                 Welcome to my portfolio
//               </span>
//             </motion.div>

//             <motion.h1 
//               variants={fadeUp}
//               className="text-5xl md:text-7xl font-bold mb-4"
//             >
//               <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                 Krishna P S
//               </span>
//             </motion.h1>

//             <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl text-indigo-300 mb-6 h-16 flex items-center gap-2">
//               <Brain className="w-8 h-8" />
//               <Typewriter
//                 words={[
//                   "Machine Learning Enthusiast",
//                   "Full Stack Developer",
//                   "AI/ML Specialist",
//                   "Problem Solver"
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="▮"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </motion.h2>

//             <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8 leading-relaxed">
//               MCA graduate passionate about AI, Machine Learning, and modern web development. 
//               Experienced in building intelligent applications and scalable backend systems 
//               with a focus on solving real-world problems.
//             </motion.p>

//             {/* BUTTONS */}
//             <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="/KrisnaP.S.pdf"
//                 download
//                 className="relative group px-8 py-3 rounded-lg font-semibold overflow-hidden flex items-center gap-2"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300"></span>
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300"></span>
//                 <Download className="w-5 h-5 relative z-10" />
//                 <span className="relative z-10">Download Resume</span>
//               </motion.a>

//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#contact"
//                 className="px-8 py-3 rounded-lg font-semibold border-2 border-indigo-400 hover:bg-indigo-400/10 transition-all duration-300 flex items-center gap-2"
//               >
//                 <Send className="w-5 h-5" />
//                 Contact Me
//               </motion.a>
//             </motion.div>

//             {/* SOCIAL LINKS */}
//             <motion.div variants={fadeUp} className="flex gap-6 mt-8">
//               <motion.a
//                 whileHover={{ y: -3 }}
//                 href="https://github.com/Krishnaps123"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
//               >
//                 <Github className="w-5 h-5" />
//                 <span className="relative">
//                   GitHub
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//                 </span>
//               </motion.a>

//               <motion.a
//                 whileHover={{ y: -3 }}
//                 href="https://linkedin.com/in/krishna-p-s"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
//               >
//                 <Linkedin className="w-5 h-5" />
//                 <span className="relative">
//                   LinkedIn
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//                 </span>
//               </motion.a>

//               <motion.a
//                 whileHover={{ y: -3 }}
//                 href="mailto:krishnapsanthosh@gmail.com"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
//               >
//                 <Mail className="w-5 h-5" />
//                 <span className="relative">
//                   Email
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//                 </span>
//               </motion.a>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT PROFILE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ 
//               duration: 0.8,
//               type: "spring",
//               bounce: 0.4
//             }}
//             className="flex justify-center relative"
//           >
//             <div className="relative">
//               {/* Animated rings */}
//               <motion.div
//                 animate={{ 
//                   scale: [1, 1.1, 1],
//                   opacity: [0.3, 0.5, 0.3]
//                 }}
//                 transition={{ 
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"
//               ></motion.div>
              
//               <img
//                 src={profile}
//                 alt="Krishna P S"
//                 className="w-72 h-72 rounded-full object-cover border-4 border-indigo-400 shadow-2xl relative z-10"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
//         >
//           <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
//             <ChevronDown className="w-4 h-4 text-indigo-400 mt-2" />
//           </div>
//         </motion.div>
//       </section>

//       {/* ABOUT */}
//       <motion.section
//         id="about"
//         className="max-w-5xl mx-auto py-32 px-6 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={fadeUp}
//       >
//         <div className="relative">
//           <motion.h2 
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold mb-8 text-center flex items-center justify-center gap-4"
//           >
//             <User className="w-12 h-12 text-indigo-400" />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </motion.h2>

//           <motion.div 
//             variants={fadeUp}
//             className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20"
//           >
//             <p className="text-gray-300 text-lg leading-relaxed">
//               MCA graduate with expertise in Machine Learning, Python, React, and backend development. 
//               Passionate about solving real-world problems using intelligent systems and modern scalable technologies. 
//               Certified Specialist in ML & AI from ICT Academy of Kerala with hands-on experience in building 
//               supervised models including Regression, KNN, Decision Trees, and Random Forest.
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* SKILLS */}
//       <motion.section
//         id="skills"
//         className="py-32 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.h2 
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold mb-16 text-center flex items-center justify-center gap-4"
//           >
//             <Code2 className="w-12 h-12 text-indigo-400" />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Technical Skills
//             </span>
//           </motion.h2>

//           <motion.div 
//             variants={staggerContainer}
//             className="grid grid-cols-2 md:grid-cols-4 gap-6"
//           >
//             {skills.map((skill, index) => {
//               const Icon = skill.icon;
//               return (
//                 <motion.div
//                   key={skill.name}
//                   variants={skillVariants}
//                   whileHover="hover"
//                   className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 cursor-pointer group"
//                 >
//   <div className="mb-3 flex justify-center">
//   <Icon className="w-8 h-8 text-indigo-400 group-hover:text-blue-400 transition-colors duration-300" />
// </div>
//                   <div className="font-semibold text-indigo-300 group-hover:text-indigo-400 transition-colors">
//                     {skill.name}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* EXPERIENCE */}
//       <motion.section
//         id="experience"
//         className="py-32 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h2 
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold mb-16 text-center flex items-center justify-center gap-4"
//           >
//             <Briefcase className="w-12 h-12 text-indigo-400" />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </motion.h2>

//           <div className="space-y-8">
//             {experiences.map((exp, index) => {
//               const Icon = exp.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   variants={projectVariants}
//                   whileHover="hover"
//                   className="relative group"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
//                   <div className="relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20">
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <Icon className="w-6 h-6 text-indigo-400" />
//                         <h3 className="text-2xl font-bold text-indigo-300">{exp.title}</h3>
//                       </div>
//                       <span className="text-gray-400 font-mono flex items-center gap-2 mt-2 md:mt-0">
//                         <Calendar className="w-4 h-4" />
//                         {exp.period}
//                       </span>
//                     </div>
//                     <p className="text-indigo-400 mb-3 font-semibold flex items-center gap-2">
//                       <Briefcase className="w-4 h-4" />
//                       {exp.company}
//                     </p>
//                     <p className="text-gray-300 leading-relaxed">{exp.description}</p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </motion.section>

//       {/* PROJECTS */}
//       <motion.section
//         id="projects"
//         className="py-32 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-6xl mx-auto px-6">
//           <motion.h2 
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-bold mb-16 text-center flex items-center justify-center gap-4"
//           >
//             <Folder className="w-12 h-12 text-indigo-400" />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </motion.h2>

//           <motion.div 
//             variants={staggerContainer}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {projects.map((project, index) => {
//               const Icon = project.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   variants={projectVariants}
//                   whileHover="hover"
//                   className="relative group"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
//                   <div className="relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/20 h-full flex flex-col">
//                     <div className={`text-5xl mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
//                       <Icon className="w-12 h-12" />
//                     </div>
//                     <h3 className="text-xl font-bold text-indigo-300 mb-3">{project.title}</h3>
//                     <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech, i) => (
//                         <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30 flex items-center gap-1">
//                           <Code className="w-3 h-3" />
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* EDUCATION & CERTIFICATIONS */}
//       <motion.section
//         className="py-32 relative"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Education */}
//             <motion.div variants={fadeUp} className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20">
//               <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
//                 <GraduationCap className="w-6 h-6" />
//                 Education
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-white">Master of Computer Applications</h4>
//                   <p className="text-indigo-400 flex items-center gap-2 mt-1">
//                     <MapPin className="w-4 h-4" />
//                     Mohandas College of Engineering and Technology
//                   </p>
//                   <p className="text-gray-400 flex items-center gap-2 mt-1">
//                     <Award className="w-4 h-4" />
//                     CCPA: 8.03
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-white">Bachelor of Science in Computer Science</h4>
//                   <p className="text-indigo-400 flex items-center gap-2 mt-1">
//                     <MapPin className="w-4 h-4" />
//                     A.J. College of Science and Technology
//                   </p>
//                   <p className="text-gray-400 flex items-center gap-2 mt-1">
//                     <Award className="w-4 h-4" />
//                     CCPA: 6.968
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Certifications */}
//             <motion.div variants={fadeUp} className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20">
//               <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
//                 <Award className="w-6 h-6" />
//                 Certifications
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <Trophy className="w-5 h-5 text-indigo-400 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-white">Certified Specialist in ML & AI</h4>
//                     <p className="text-indigo-400 flex items-center gap-2 mt-1">
//                       <Briefcase className="w-4 h-4" />
//                       ICT Academy of Kerala
//                     </p>
//                     <p className="text-gray-400 flex items-center gap-2 mt-1">
//                       <Calendar className="w-4 h-4" />
//                       Aug 2023 – Feb 2024
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* CONTACT */}
//       <section id="contact" className="py-32 relative">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.h2 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-6xl font-bold mb-8 flex items-center justify-center gap-4"
//           >
//             <Mail className="w-12 h-12 text-indigo-400" />
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-300 text-xl mb-12"
//           >
//             I'm always interested in hearing about new opportunities and exciting projects.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex flex-col items-center gap-6"
//           >
//             <a
//               href="mailto:krishnapsanthosh@gmail.com"
//               className="text-2xl text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-3 group"
//             >
//               <Mail className="w-8 h-8" />
//               <span className="relative">
//                 krishnapsanthosh@gmail.com
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//               </span>
//             </a>
            
//             <a
//               href="tel:+918921206035"
//               className="text-2xl text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-3 group"
//             >
//               <Phone className="w-8 h-8" />
//               <span className="relative">
//                 +91 89212 06035
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
//               </span>
//             </a>
            
//             <div className="flex gap-8 mt-8">
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="https://github.com/Krishnaps123"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
//               >
//                 <Github className="w-6 h-6" />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="https://linkedin.com/in/krishna-p-s"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
//               >
//                 <Linkedin className="w-6 h-6" />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 href="mailto:krishnapsanthosh@gmail.com"
//                 className="text-gray-400 hover:text-indigo-400 transition-colors p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
//               >
//                 <Mail className="w-6 h-6" />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="text-center py-8 text-gray-500 border-t border-indigo-500/20 bg-slate-900/30 backdrop-blur-sm">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="flex items-center justify-center gap-2"
//         >
//           <Heart className="w-4 h-4 text-red-400" />
//           © {new Date().getFullYear()} Krishna P S. Crafted with passion and code.
//           <Heart className="w-4 h-4 text-red-400" />
//         </motion.p>
//       </footer>

//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Send,
  Menu,
  X,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Brain,
  Database,
  Globe,
  Layout,
  Terminal,
  GitBranch,
  BarChart3,
  Home,
  User,
  Folder,
  Server,
  Palette,
  FileCode,
  FileText,
  Utensils,
  Calendar,
  MapPin,
  Sparkles,
  Heart,
  Trophy,
  Code,
  ExternalLink,
  ChevronRight,
  Clock,
  BookOpen,
  CheckCircle,
  Zap,
  Rocket,
  Star
} from "lucide-react";
import profile from "../assets/portfolio.png";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "#3b82f6",
      transition: { duration: 0.2 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact", href: "#contact", icon: Mail }
  ];

  const skills = [
    { name: "Python", icon: Terminal, color: "from-blue-400 to-blue-600", level: 90 },
    { name: "Machine Learning", icon: Brain, color: "from-purple-400 to-purple-600", level: 85 },
    { name: "React", icon: Layout, color: "from-cyan-400 to-cyan-600", level: 80 },
    { name: "Node.js", icon: Server, color: "from-green-400 to-green-600", level: 75 },
    { name: "Tailwind CSS", icon: Palette, color: "from-teal-400 to-teal-600", level: 85 },
    { name: "MySQL", icon: Database, color: "from-orange-400 to-orange-600", level: 80 },
    { name: "JavaScript", icon: FileCode, color: "from-yellow-400 to-yellow-600", level: 85 },
    { name: "Git & GitHub", icon: GitBranch, color: "from-red-400 to-red-600", level: 90 },
    { name: "NumPy/Pandas", icon: BarChart3, color: "from-indigo-400 to-indigo-600", level: 80 },
    { name: "Scikit-learn", icon: Brain, color: "from-pink-400 to-pink-600", level: 85 },
    { name: "HTML/CSS", icon: Globe, color: "from-blue-500 to-purple-500", level: 95 },
    { name: "SQLite", icon: Database, color: "from-gray-400 to-gray-600", level: 75 }
  ];

  const experiences = [
    {
      title: "ML & AI Intern",
      company: "ICT Academy of Kerala",
      period: "Jul 2025 – Dec 2025",
      description: "Developed automated notification system and researched machine learning and AI concepts. Explored agentic AI concepts and their applications.",
      icon: Brain,
      color: "from-blue-600 to-indigo-600",
      achievements: [
        "Built automated notification system using Python",
        "Researched and implemented agentic AI concepts",
        "Collaborated with team on ML model development"
      ]
    },
    {
      title: "Project Assistant",
      company: "CSIR – NIIST",
      period: "Jul 2024 – May 2025",
      description: "Built and maintained web applications using PHP and MySQL. Collaborated with research teams to develop technical solutions.",
      icon: Code,
      color: "from-indigo-600 to-purple-600",
      achievements: [
        "Developed 3+ web applications for research purposes",
        "Optimized database queries for better performance",
        "Maintained and updated existing codebase"
      ]
    },
    {
      title: "Certified Specialist in ML & AI",
      company: "ICT Academy of Kerala",
      period: "Aug 2023 – Feb 2024",
      description: "Hands-on experience in Python and Machine Learning, including data preprocessing, exploratory data analysis (EDA), and building supervised models.",
      icon: Award,
      color: "from-purple-600 to-pink-600",
      achievements: [
        "Completed 6-month intensive training program",
        "Built multiple supervised learning models",
        "Achieved top performance in final project"
      ]
    }
  ];

  const projects = [
    {
      title: "Dyslexia Detection Using ML",
      description: "CNN-based classification model for dyslexia detection with data preprocessing and model evaluation.",
      tech: ["Python", "CNN", "TensorFlow"],
      icon: Brain,
      color: "from-blue-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      highlights: ["95% accuracy", "Real-time detection", "Web interface"]
    },
    {
      title: "Fake News Detection",
      description: "BERT-based ensemble model to classify COVID-19 news as fake or real using Python and MySQL.",
      tech: ["BERT", "NLP", "MySQL"],
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
      highlights: ["98% precision", "Multi-language support", "API ready"]
    },
    {
      title: "Food Wastage Reduction",
      description: "Node.js application connecting food donors with recipients to reduce food wastage.",
      tech: ["Node.js", "SQLite", "Express"],
      icon: Utensils,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200&auto=format&fit=crop",
      highlights: ["100+ users", "Real-time chat", "Location based"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white min-h-screen font-['Inter',sans-serif] overflow-x-hidden">
      
      {/* Animated background particles effect - responsive sizing */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* NAVBAR - improved mobile responsiveness */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-slate-900/95 backdrop-blur-lg border-b border-indigo-500/30 shadow-lg shadow-indigo-500/10" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center p-3 sm:p-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.href = "#home"}
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Krishna P S
            </h1>
          </motion.div>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`transition-colors duration-300 font-medium relative group flex items-center gap-1 text-sm lg:text-base ${
                    isActive ? "text-indigo-400" : "text-gray-300 hover:text-indigo-400"
                  }`}
                >
                  <Icon className="w-3 h-3 lg:w-4 lg:h-4" />
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400"
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-2xl p-2 hover:bg-indigo-500/10 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu - improved animation and styling */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-lg border-t border-indigo-500/20"
        >
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`py-3 px-4 rounded-lg transition-all flex items-center gap-3 ${
                    isActive 
                      ? "bg-indigo-500/20 text-indigo-400 border-l-4 border-indigo-400" 
                      : "text-gray-300 hover:bg-indigo-500/10 hover:text-indigo-400"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>

      {/* HERO SECTION - improved mobile layout */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.div variants={fadeUp}>
              <span className="text-indigo-400 font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 block flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Krishna P S
              </span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl text-indigo-300 mb-4 sm:mb-6 h-12 sm:h-16 flex items-center justify-center md:justify-start gap-2">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div className="text-left">
                <Typewriter
                  words={[
                    "Machine Learning Enthusiast",
                    "Full Stack Developer",
                    "AI/ML Specialist",
                    "Problem Solver"
                  ]}
                  loop
                  cursor
                  cursorStyle="▮"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              MCA graduate passionate about AI, Machine Learning, and modern web development. 
              Experienced in building intelligent applications and scalable backend systems 
              with a focus on solving real-world problems.
            </motion.p>

            {/* BUTTONS - stacked on mobile, row on larger screens */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/KrisnaP.S.pdf"
                download
                className="relative group px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold overflow-hidden flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300"></span>
                <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold border-2 border-indigo-400 hover:bg-indigo-400/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* SOCIAL LINKS - improved mobile layout */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center md:justify-start">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/Krishnaps123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="relative text-sm sm:text-base">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/krishna-p-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="relative text-sm sm:text-base">
                  LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:krishnapsanthosh@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="relative text-sm sm:text-base">
                  Email
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT PROFILE IMAGE - hidden on very small screens, adjusted size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="hidden sm:flex justify-center relative"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"
              ></motion.div>
              
              <img
                src={profile}
                alt="Krishna P S"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-indigo-400 shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-indigo-400 rounded-full flex justify-center">
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 mt-2" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT - improved mobile padding */}
      <motion.section
        id="about"
        className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
      >
        <div className="relative">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-4"
          >
            <User className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div 
            variants={fadeUp}
            className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-indigo-500/20"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              MCA graduate with expertise in Machine Learning, Python, React, and backend development. 
              Passionate about solving real-world problems using intelligent systems and modern scalable technologies. 
              Certified Specialist in ML & AI from ICT Academy of Kerala with hands-on experience in building 
              supervised models including Regression, KNN, Decision Trees, and Random Forest.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SKILLS - responsive grid */}
      <motion.section
        id="skills"
        className="py-16 sm:py-20 md:py-24 lg:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center flex items-center justify-center gap-2 sm:gap-4"
          >
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover="hover"
                  className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-indigo-500/20 cursor-pointer group"
                >
                  <div className="mb-2 sm:mb-3 flex justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-indigo-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="font-semibold text-indigo-300 group-hover:text-indigo-400 transition-colors text-xs sm:text-sm md:text-base text-center">
                    {skill.name}
                  </div>
                  {/* Skill level indicator - hidden on mobile */}
                  <div className="hidden sm:block mt-2 w-full bg-slate-700 rounded-full h-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE - improved mobile layout */}
      <motion.section
        id="experience"
        className="py-16 sm:py-20 md:py-24 lg:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center flex items-center justify-center gap-2 sm:gap-4"
          >
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-indigo-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 flex-shrink-0" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-300">{exp.title}</h3>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-indigo-400 mb-2 sm:mb-3 font-semibold flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.company}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">{exp.description}</p>
                    
                    {/* Achievements - hidden on very small screens */}
                    <div className="hidden sm:block space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS - responsive grid */}
      <motion.section
        id="projects"
        className="py-16 sm:py-20 md:py-24 lg:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center flex items-center justify-center gap-2 sm:gap-4"
          >
            <Folder className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover="hover"
                  className="relative group h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  <div className="relative bg-slate-800/30 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-indigo-500/20 h-full flex flex-col">
                    
                    {/* Project image - hidden on mobile */}
                    <div className="hidden sm:block relative w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    </div>
                    
                    <div className={`sm:text-4xl md:text-5xl mb-3 sm:mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-indigo-300 mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 flex-grow">{project.description}</p>
                    
                    {/* Highlights - hidden on mobile */}
                    <div className="hidden sm:flex flex-wrap gap-2 mb-3">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-indigo-500/10 text-indigo-300 px-2 py-1 rounded-full border border-indigo-500/20">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 sm:px-3 py-1 rounded-full border border-indigo-500/30 flex items-center gap-1">
                          <Code className="w-2 h-2 sm:w-3 sm:h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View project link - hidden on mobile */}
                    <motion.a
                      href="#"
                      className="hidden sm:flex items-center gap-2 mt-4 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      View Project <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* EDUCATION & CERTIFICATIONS - responsive grid */}
      <motion.section
        className="py-16 sm:py-20 md:py-24 lg:py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Education */}
            <motion.div variants={fadeUp} className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-indigo-500/20">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-300 mb-4 sm:mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                Education
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-white">Master of Computer Applications</h4>
                  <p className="text-indigo-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Mohandas College of Engineering and Technology</span>
                  </p>
                  <p className="text-gray-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    CCPA: 8.03
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-white">Bachelor of Science in Computer Science</h4>
                  <p className="text-indigo-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>A.J. College of Science and Technology</span>
                  </p>
                  <p className="text-gray-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    CCPA: 6.968
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp} className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-indigo-500/20">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-300 mb-4 sm:mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                Certifications
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-white">Certified Specialist in ML & AI</h4>
                    <p className="text-indigo-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      ICT Academy of Kerala
                    </p>
                    <p className="text-gray-400 flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      Aug 2023 – Feb 2024
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT - responsive */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-4"
          >
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 px-2"
          >
            I'm always interested in hearing about new opportunities and exciting projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <a
              href="mailto:krishnapsanthosh@gmail.com"
              className="text-lg sm:text-xl md:text-2xl text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 sm:gap-3 group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              <span className="relative text-sm sm:text-base md:text-lg lg:text-xl">
                krishnapsanthosh@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            
            <a
              href="tel:+918921206035"
              className="text-lg sm:text-xl md:text-2xl text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 sm:gap-3 group"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              <span className="relative text-sm sm:text-base md:text-lg lg:text-xl">
                +91 89212 06035
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Krishnaps123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 sm:p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/krishna-p-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 sm:p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:krishnapsanthosh@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors p-2 sm:p-3 bg-slate-800/50 rounded-full border border-indigo-500/20"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER - responsive */}
      <footer className="text-center py-4 sm:py-6 md:py-8 text-gray-500 border-t border-indigo-500/20 bg-slate-900/30 backdrop-blur-sm">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
        >
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
          © {new Date().getFullYear()} Krishna P S. Crafted with passion and code.
          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
        </motion.p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}