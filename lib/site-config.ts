// Central place for site-wide content.
// All details below are taken from the JESPL company profile and letterhead.

export const siteConfig = {
  name: "Jalayana Engineering & Services Private Limited",
  shortName: "Jalayana",
  code: "JESPL",
  tagline: "One-stop marine engineering & ship maintenance solutions.",
  description:
    "A marine engineering and technical services company providing integrated ship machinery maintenance, repair, refurbishment and project-execution services.",
  phone: "+91 78922 08329",
  phones: ["+91 78922 08329", "+91 73854 73874", "+91 99861 22379"],
  whatsapp: "917892208329",
  email: "jalayanaespl@yahoo.com",
  address:
    "Shop No. 21, 3rd Floor, Eshanya Building, Opposite Amrut Hotel, Karwar – 581301, Uttara Kannada, Karnataka",
  addressShort: "Eshanya Building, Opp. Amrut Hotel, Karwar – 581 301",
  mapQuery: "Eshanya Building, Opposite Amrut Hotel, Karwar, Karnataka 581301",
  gstin: "29AAHCJ4264B1ZM",
  cin: "U33129KA2026PTC221097",
  pan: "AAHCJ4264B",
  udyam: "UDYAM-KR-27-0058859",
  profileFile: "/docs/JESPL-Company-Profile.docx",
};

export const leadership = [
  { name: "A.S. Prakash", role: "Managing Director" },
  { name: "Anil Madhukar Naik", role: "Executive Director" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Registrations", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "marine-engines-generator-sets",
    title: "Marine engines & generator sets",
    summary:
      "Main and auxiliary engines, DG sets, HFO/Diesel/Gas engines, overhauling, troubleshooting, fuel systems, governors, turbochargers, starting-air and cooling systems, testing and commissioning.",
    icon: "Cog",
  },
  {
    slug: "centrifuges-separators",
    title: "Centrifuges & separators",
    summary:
      "Fuel-oil and lube-oil separators, bowl servicing, dismantling, cleaning, bearing/seal replacement, reassembly, commissioning and performance checks.",
    icon: "FlaskConical",
  },
  {
    slug: "pumps-motors",
    title: "Pumps & motors",
    summary:
      "Marine centrifugal, screw, gear, transfer, bilge, ballast, fire and cooling pumps; mechanical seals, bearings, alignment and motor servicing.",
    icon: "Droplets",
  },
  {
    slug: "valves-piping",
    title: "Valves & piping",
    summary:
      "Butterfly, globe, gate, check, shipside and system valves; dismantling, lapping, seat work, pressure testing, pipe fabrication, replacement and leakage rectification.",
    icon: "Settings",
  },
  {
    slug: "electrical-services",
    title: "Electrical services",
    summary:
      "Marine motors, generators, starters, AVR, MCC/panels, cable work, testing, insulation-resistance checks, troubleshooting and commissioning.",
    icon: "Zap",
  },
  {
    slug: "instrumentation-calibration",
    title: "Instrumentation & calibration",
    summary:
      "Pressure/temperature gauges, switches, sensors, transmitters, indicators and related instruments; calibration coordination, testing and documentation through appropriate traceable facilities.",
    icon: "Gauge",
  },
  {
    slug: "galley-pantry-equipment",
    title: "Galley & pantry equipment",
    summary:
      "Marine galley and pantry equipment servicing, installation, stainless-steel fabrication, cooking equipment, refrigeration-related support and refurbishment.",
    icon: "Utensils",
  },
  {
    slug: "modular-accommodation",
    title: "Modular accommodation",
    summary:
      "Marine accommodation refurbishment, modular cabins, wall/ceiling panels, flooring, furniture, berths, lockers, doors, sanitary and associated fit-out works.",
    icon: "BedDouble",
  },
  {
    slug: "insulation-hvac-support",
    title: "Insulation & HVAC support",
    summary:
      "Thermal, acoustic and fire-rated insulation, pipe/equipment insulation, ducting and HVAC-related mechanical support.",
    icon: "Thermometer",
  },
  {
    slug: "ship-painting-surface-treatment",
    title: "Ship painting & surface treatment",
    summary:
      "Surface preparation, chipping/grinding, priming, marine coating systems, machinery-space/accommodation painting, touch-up and refurbishment.",
    icon: "PaintRoller",
  },
  {
    slug: "pressure-testing-inspection",
    title: "Pressure testing & inspection",
    summary:
      "Hydrostatic and suitable pneumatic testing, valve and pipeline testing, leakage checks, test records and handover documentation.",
    icon: "ShieldCheck",
  },
  {
    slug: "mechanical-fabrication-works",
    title: "Mechanical & fabrication works",
    summary:
      "Welding, fabrication, pipe fitting, machining coordination, shaft/coupling work, equipment installation, alignment and general mechanical maintenance.",
    icon: "Hammer",
  },
  {
    slug: "installation-testing-commissioning",
    title: "Installation, testing & commissioning",
    summary:
      "Equipment installation, alignment, pre-commissioning checks, functional trials, load trials, troubleshooting and final documentation.",
    icon: "ClipboardCheck",
  },
  {
    slug: "turnkey-ship-repair-maintenance",
    title: "Turnkey ship repair & maintenance",
    summary:
      "Integrated execution combining mechanical, electrical, instrumentation, accommodation, galley, insulation, piping and painting scopes under one project-management framework.",
    icon: "Ship",
  },
] as const;

export const industries = [
  { title: "Shipyards & new-build projects", icon: "Factory" },
  { title: "Ship repair, refit & conversion projects", icon: "Wrench" },
  { title: "Indian Navy / Indian Coast Guard support projects", icon: "Anchor" },
  { title: "Commercial shipping & vessel operators", icon: "Ship" },
  { title: "Dredgers, tugs, offshore & workboats", icon: "Sailboat" },
  { title: "Ports & marine infrastructure", icon: "Warehouse" },
  { title: "Power generation & industrial utility plants", icon: "Zap" },
] as const;

export const stats = [
  { label: "Service divisions under one roof", value: 14, suffix: "" },
  { label: "Stages in our project execution approach", value: 6, suffix: "" },
  { label: "Industry segments served", value: 7, suffix: "" },
  { label: "Documents in our technical trail", value: 10, suffix: "" },
] as const;

export const whyUs = [
  {
    icon: "Handshake",
    title: "Single-point coordination",
    description:
      "One interface for multi-discipline marine maintenance — mechanical, electrical, instrumentation, accommodation, galley, insulation, piping and painting.",
  },
  {
    icon: "Ship",
    title: "Marine-focused approach",
    description:
      "A marine-focused engineering and project-management approach for ship repair, shipbuilding and vessel maintenance.",
  },
  {
    icon: "Users",
    title: "Flexible manpower",
    description:
      "Flexible manpower deployment for shipyard and vessel work, matched to the work scope.",
  },
  {
    icon: "Wrench",
    title: "Practical troubleshooting",
    description:
      "Strong emphasis on troubleshooting and practical field execution.",
  },
  {
    icon: "FileText",
    title: "Clear documentation",
    description:
      "A clear technical trail from inspection through final handover.",
  },
  {
    icon: "ClipboardCheck",
    title: "Specialist subcontractors, one owner",
    description:
      "Ability to coordinate specialist subcontractors without losing project ownership.",
  },
  {
    icon: "Siren",
    title: "Responsive support",
    description:
      "Responsive support for urgent repair and maintenance requirements.",
  },
] as const;

export const executionStages = [
  {
    stage: "Survey",
    approach:
      "Understand vessel condition, equipment history, access, safety requirements and customer scope.",
  },
  {
    stage: "Plan",
    approach:
      "Prepare work breakdown, manpower, tools, spares, schedule, testing requirements and responsibilities.",
  },
  {
    stage: "Execute",
    approach:
      "Carry out work using competent personnel, controlled procedures and appropriate tools/equipment.",
  },
  {
    stage: "Inspect & test",
    approach:
      "Measure, inspect, pressure-test, electrically test or run equipment as applicable.",
  },
  {
    stage: "Commission",
    approach:
      "Conduct functional checks, trials and load/performance checks where required.",
  },
  {
    stage: "Document & handover",
    approach:
      "Submit service reports, test records, replaced-parts details and final handover documentation.",
  },
] as const;

export const turnkeySteps = [
  "Pre-job survey and condition assessment",
  "Work-scope preparation and method planning",
  "Material and spare-parts coordination",
  "Skilled manpower deployment",
  "Mechanical / electrical / instrumentation execution",
  "Testing, trials and rectification",
  "Inspection records and final handover documentation",
] as const;

export const documentation = [
  "Site survey / inspection report",
  "Detailed work scope and quotation",
  "Dismantling and condition report",
  "Measurement and clearance report",
  "Parts replacement record",
  "Repair / overhaul report",
  "Testing and calibration records",
  "Pressure-test report where applicable",
  "Pre-commissioning and commissioning report",
  "Final service / handover report",
] as const;

export const mission = [
  "Deliver dependable engineering and ship-maintenance services with strong technical supervision.",
  "Provide responsive field support for critical marine machinery and equipment.",
  "Execute multi-discipline projects through disciplined planning, skilled manpower and controlled subcontracting where specialist facilities are required.",
  "Maintain strong focus on safety, quality, traceability and customer satisfaction.",
  "Develop long-term relationships with shipyards, vessel owners, operators and industrial customers.",
] as const;

export const organisation = [
  {
    position: "Project / Marine Engineering Manager",
    responsibility:
      "Project planning, customer coordination, technical supervision and execution",
  },
  {
    position: "Senior Marine Engine Technician",
    responsibility: "Engine, DG, fuel-system and troubleshooting support",
  },
  {
    position: "Mechanical Technicians",
    responsibility: "Pumps, valves, separators, piping and machinery",
  },
  {
    position: "Electrical Technician",
    responsibility:
      "Motors, generators, panels, testing and electrical troubleshooting",
  },
  {
    position: "Instrumentation Technician",
    responsibility: "Instrumentation, testing and calibration coordination",
  },
  {
    position: "Fabricator / Welder / Pipe Fitter",
    responsibility: "Fabrication, piping and shipboard repair works",
  },
  {
    position: "Helpers / Skilled Support",
    responsibility: "Site support, tools, material handling and housekeeping",
  },
  {
    position: "Commercial / Administration",
    responsibility: "Quotations, procurement, documentation and billing",
  },
] as const;

export const capabilities = [
  "Engine-service and precision measurement tools",
  "Pump / valve overhaul and alignment tools",
  "Electrical testing instruments",
  "Instrumentation test and calibration equipment",
  "Welding, fabrication and pipe-fitting equipment",
  "Hydraulic / pressure-testing equipment",
  "Lifting, rigging and shipboard access support",
  "Partner facilities for machining, balancing, rewinding, blasting and specialist testing",
] as const;

export const registrations = [
  { title: "CIN", note: "Corporate Identification Number", value: siteConfig.cin },
  { title: "GSTIN", note: "Goods and Services Tax registration", value: siteConfig.gstin },
  { title: "PAN", note: "Permanent Account Number", value: siteConfig.pan },
  { title: "UDYAM", note: "Udyam (MSME) registration", value: siteConfig.udyam },
] as const;

export const faqs = [
  {
    question: "What services does Jalayana Engineering & Services provide?",
    answer:
      "We provide marine engineering, ship repair and technical services across 14 service divisions — from engines, pumps, valves and electrical work to instrumentation, accommodation, galley, insulation, painting and turnkey ship repair. See the Services page for the full scope.",
  },
  {
    question: "Which customers and industries do you work with?",
    answer:
      "Shipyards and new-build projects, ship repair, refit and conversion projects, Indian Navy / Indian Coast Guard support projects, commercial shipping and vessel operators, dredgers, tugs, offshore and workboats, ports and marine infrastructure, and power generation and industrial utility plants.",
  },
  {
    question: "Can you handle a multi-discipline job under one contract?",
    answer:
      "Yes. We coordinate multi-disciplinary vessel work packages through a single project-management interface, combining engine-room machinery, pumps, valves, piping, electrical, instrumentation, accommodation, galley, insulation and painting scopes.",
  },
  {
    question: "What documentation do you provide?",
    answer:
      "For each applicable job we aim to provide a clear technical trail — from the site survey and work scope through dismantling, measurement and test reports to the final service / handover report.",
  },
  {
    question: "What about calibration, machining, balancing or NDT?",
    answer:
      "Specialist calibration, machining, balancing, rewinding, NDT and other specialist activities are coordinated through suitable competent facilities according to the project requirement and customer specification, with JESPL retaining project ownership.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Use the contact form, or call or email us directly — details are on the Contact page and in the footer.",
  },
] as const;
