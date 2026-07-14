// Central place for site-wide content.
// Replace placeholder values here as real company details become available.
// (Later this file's shape maps directly onto a Sanity schema.)

export const siteConfig = {
  name: "Jalayana Engineering & Services Limited",
  shortName: "Jalayana",
  code: "JES",
  tagline: "Engineering trust into every vessel we touch.",
  description:
    "Turnkey marine engineering, ship repair, and heavy industrial services delivered with precision and reliability.",
  phone: "+91 00000 00000",
  email: "info@jalayanaengineering.com",
  address: "Karwar, Karnataka, India",
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "turnkey-projects",
    title: "Turnkey projects",
    summary:
      "End-to-end project delivery from design through commissioning, managed by a single accountable team.",
    icon: "ClipboardCheck",
  },
  {
    slug: "engineering-systems",
    title: "Engineering systems",
    summary:
      "Mechanical and systems engineering for propulsion, auxiliary, and shipboard machinery.",
    icon: "Cog",
  },
  {
    slug: "electrical-works",
    title: "Electrical works",
    summary:
      "Shipboard electrical installation, rewiring, and systems integration to class standards.",
    icon: "Zap",
  },
  {
    slug: "hull-structures",
    title: "Hull & structures",
    summary:
      "Structural steel repair, fabrication, and renewal across naval and commercial vessels.",
    icon: "Ship",
  },
  {
    slug: "hydraulics",
    title: "Hydraulics",
    summary:
      "Design, overhaul, and maintenance of hydraulic systems for marine and industrial equipment.",
    icon: "GitBranch",
  },
  {
    slug: "surface-preparation",
    title: "Surface preparation",
    summary:
      "Modern blasting and coating systems for long-lasting corrosion protection.",
    icon: "SprayCan",
  },
  {
    slug: "shiplifts",
    title: "Shiplifts",
    summary:
      "Fabrication, installation, load testing, and maintenance of shiplift systems.",
    icon: "ArrowUpDown",
  },
  {
    slug: "heavy-engineering",
    title: "Heavy engineering",
    summary:
      "Structural and mechanical engineering for nuclear, irrigation, and industrial infrastructure.",
    icon: "Factory",
  },
] as const;

export const industries = [
  { title: "Defence & naval", icon: "Anchor" },
  { title: "Commercial shipping", icon: "Ship" },
  { title: "Ports & terminals", icon: "Warehouse" },
  { title: "Energy & infrastructure", icon: "Zap" },
] as const;

export const stats = [
  { label: "Years of combined team experience", value: 0, suffix: "+" },
  { label: "Engineering disciplines covered", value: 8, suffix: "" },
  { label: "Safety-first operating standard", value: 100, suffix: "%" },
  { label: "Locations served", value: 3, suffix: "+" },
] as const;

export const projects = [
  {
    slug: "project-one",
    title: "Placeholder project one",
    category: "Ship repair",
    summary: "Project details to be added.",
    image: "/images/project-placeholder-1.jpg",
  },
  {
    slug: "project-two",
    title: "Placeholder project two",
    category: "Turnkey",
    summary: "Project details to be added.",
    image: "/images/project-placeholder-2.jpg",
  },
  {
    slug: "project-three",
    title: "Placeholder project three",
    category: "Heavy engineering",
    summary: "Project details to be added.",
    image: "/images/project-placeholder-3.jpg",
  },
  {
    slug: "project-four",
    title: "Placeholder project four",
    category: "Shiplifts",
    summary: "Project details to be added.",
    image: "/images/project-placeholder-4.jpg",
  },
] as const;

export const certifications = [
  { title: "ISO 9001", note: "Placeholder — certification details to follow." },
  { title: "ISO 45001", note: "Placeholder — certification details to follow." },
  { title: "Registered vendor", note: "Placeholder — registration details to follow." },
] as const;

export const newsItems = [
  {
    title: "Jalayana opens new engineering bay",
    date: "Placeholder date",
    excerpt: "Placeholder summary of company news update.",
  },
  {
    title: "Company profile update",
    date: "Placeholder date",
    excerpt: "Placeholder summary of company news update.",
  },
  {
    title: "Industry partnership announced",
    date: "Placeholder date",
    excerpt: "Placeholder summary of company news update.",
  },
] as const;

export const timeline = [
  { year: "Year 1", title: "Company founded", description: "Placeholder milestone description." },
  { year: "Year 2", title: "First major contract", description: "Placeholder milestone description." },
  { year: "Year 3", title: "Facility expansion", description: "Placeholder milestone description." },
  { year: "Year 4", title: "Certification achieved", description: "Placeholder milestone description." },
] as const;

export const faqs = [
  {
    question: "What services does Jalayana Engineering provide?",
    answer:
      "We provide turnkey marine engineering, ship repair, structural, electrical, hydraulic, and heavy engineering services. See the Services page for a full breakdown.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We serve defence and naval clients, commercial shipping operators, ports and terminals, and energy and infrastructure projects.",
  },
  {
    question: "How can I request a quote or inquiry?",
    answer:
      "Use the contact form on the Contact page, or reach us directly by phone or email — details are listed in the footer.",
  },
  {
    question: "Do you take on international projects?",
    answer:
      "Placeholder answer — update with real scope of operations as the company defines its service regions.",
  },
] as const;

export const jobOpenings = [
  {
    title: "Marine engineer",
    location: "Karwar, Karnataka",
    type: "Full-time",
  },
  {
    title: "Project manager — turnkey projects",
    location: "Karwar, Karnataka",
    type: "Full-time",
  },
  {
    title: "Electrical technician",
    location: "Karwar, Karnataka",
    type: "Full-time",
  },
] as const;
