import treatmentSystems from "@/assets/treatment-systems.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";
import poolEquipment from "@/assets/pool-equipment.jpg";
import uvSystems from "@/assets/uv-systems.jpg";
import copperIonization from "@/assets/copper-ionization.jpg";
import ozoneGenerator from "@/assets/ozone-generator.jpg";
import dosingSystems from "@/assets/dosing-systems.jpg";
import electricHeaters from "@/assets/electric-heaters.jpg";
import circulationPumps from "@/assets/circulation-pumps.jpg";
import { Droplets, Shield, Waves, Zap, Filter, Settings, Atom, Wind, Beaker, Thermometer, RotateCw } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  specifications: Record<string, string>;
  introduction?: string;
  certifications?: { title: string; url: string }[];
  manuals?: { title: string; url: string }[];
  productImages?: string[];
}

export const drinkingWaterProducts: Product[] = [
  {
    id: "uv-systems-drinking",
    title: "UV Systems",
    description: "Advanced ultraviolet disinfection systems for chemical-free drinking water treatment and pathogen elimination.",
    image: uvSystems,
    icon: <Zap className="h-8 w-8 text-primary" />,
    features: [
      "UV-C technology for disinfection",
      "No chemical residue or byproducts",
      "Low maintenance requirements",
      "Automatic intensity monitoring",
      "Energy efficient LED options",
      "Real-time performance tracking"
    ],
    specifications: {
      "Lamps": "Our product range utilizes the low-pressure lamps.",
      "Dosage": "The dosage of our product range is (30 – 40) mJ/cm².",
      "Tested pressure": "The tested pressure is 10 bars for the UVSafe range.",
      "UV lamp life": "The expected life of the UV lamps is (8,000 – 10,000) hours.",
      "Accessories": "Our product range includes UV intensity monitoring.",
      "Options": "Optional features include BMS, flow switches and an hour counter.",
    },
    introduction: "Our UV Systems represent the cutting edge of water disinfection technology, providing reliable, chemical-free treatment for drinking water applications. Using powerful UV-C light, these systems effectively eliminate bacteria, viruses, and other pathogens without altering the taste or chemistry of your water.",
    certifications: [
      { title: "ISO 9001:2015", url: "/certifications/dosita-iso-9001-2027.pdf" },
      { title: "WRAS", url: "/certifications/uv-wras-certificate-2029.pdf" },
      { title: "UDEM", url: "/certifications/uv-udem-2025.pdf" },
      { title: "NSF", url: "/certifications/uv-nsf-test-report-2024.pdf" },
    ],
    manuals: [
      { title: "UVSafe Brochure", url: "/manuals/uvisafe-brochure-1-5.pdf" },
    ],
    productImages: [uvSystems, treatmentSystems]
  },
  {
    id: "copper-silver-ionization-drinking",
    title: "Copper Silver Ionization",
    description: "Eco-friendly copper-silver ionization systems for natural drinking water sanitization using mineral technology.",
    image: copperIonization,
    icon: <Atom className="h-8 w-8 text-primary" />,
    features: [
      "Natural mineral sanitization",
      "Long-lasting copper electrodes",
      "Mineral-based water treatment", 
      "Reduced chemical requirements",
      "Automatic ion level control",
      "Environmentally friendly process"
    ],
    specifications: {
      "Ion Output": "0.2-2.0 ppm Cu",
      "Electrode Life": "1-3 years",
      "Power": "12-24V DC",
      "Material": "99.9% pure copper"
    },
    introduction: "Copper Silver Ionization systems offer a natural, environmentally friendly approach to water treatment. By releasing controlled amounts of copper and silver ions, these systems provide long-lasting sanitization with minimal chemical use, making them ideal for sustainable water management.",
    certifications: [
      { title: "EPA Registered - Environmental Protection Agency", url: "/manuals/product-manual.pdf" },
      { title: "NSF/ANSI Standard 61 - Drinking Water System Components", url: "/manuals/product-manual.pdf" },
      { title: "ISO 14001:2015 Environmental Management", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "WRAS Approved - Water Regulations Advisory Scheme", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation Guide", url: "/manuals/product-manual.pdf" },
      { title: "Maintenance Manual", url: "/manuals/product-manual.pdf" },
      { title: "Electrode Replacement Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [copperIonization, disinfectionSystems]
  }
];

export const swimmingPoolProducts: Product[] = [
  {
    id: "uv-systems-pool",
    title: "UV System",
    description: "Advanced ultraviolet disinfection systems for chemical-free swimming pool water treatment and pathogen elimination.",
    image: uvSystems,
    icon: <Zap className="h-8 w-8 text-primary" />,
    features: [
      "UV-C technology for disinfection",
      "No chemical residue or byproducts",
      "Low maintenance requirements",
      "Automatic intensity monitoring",
      "Energy efficient LED options",
      "Real-time performance tracking"
    ],
    specifications: {
      "UV Dose": "30-300 mJ/cm²",
      "Lamp Type": "Low/Medium pressure",
      "Power": "120-480V available",
      "Material": "316L stainless steel"
    },
    introduction: "Pool UV Systems deliver superior water quality through advanced ultraviolet technology, reducing chlorine demand and eliminating harmful microorganisms. Perfect for commercial and residential pools seeking eco-friendly water treatment solutions.",
    certifications: [
      { title: "NSF/ANSI Standard 50 - Pool & Spa Equipment", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
      { title: "UL Listed - Safety Certification", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation Manual", url: "/manuals/product-manual.pdf" },
      { title: "Operation Guide", url: "/manuals/product-manual.pdf" },
      { title: "Lamp Replacement Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [uvSystems, poolEquipment]
  },
  {
    id: "copper-silver-pool",
    title: "Copper Silver",
    description: "Eco-friendly copper-silver ionization systems for natural swimming pool sanitization using mineral technology.",
    image: copperIonization,
    icon: <Atom className="h-8 w-8 text-primary" />,
    features: [
      "Natural mineral sanitization",
      "Long-lasting copper electrodes",
      "Mineral-based water treatment", 
      "Reduced chemical requirements",
      "Automatic ion level control",
      "Environmentally friendly process"
    ],
    specifications: {
      "Ion Output": "0.2-2.0 ppm Cu",
      "Electrode Life": "1-3 years",
      "Power": "12-24V DC",
      "Material": "99.9% pure copper"
    },
    introduction: "Copper Silver ionization technology provides a natural alternative to traditional pool chemicals, delivering effective sanitization through mineral ions. This system significantly reduces chlorine usage while maintaining crystal-clear, safe pool water.",
    certifications: [
      { title: "EPA Registered for Pool Treatment", url: "/manuals/product-manual.pdf" },
      { title: "NSF/ANSI Standard 50 Certified", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "System Installation Guide", url: "/manuals/product-manual.pdf" },
      { title: "User Manual", url: "/manuals/product-manual.pdf" },
      { title: "Electrode Care Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [copperIonization, ozoneGenerator]
  },
  {
    id: "swimming-pool-pumps",
    title: "Swimming Pool Pumps",
    description: "High-performance circulation pumps for continuous water flow and optimal swimming pool system operation.",
    image: circulationPumps,
    icon: <RotateCw className="h-8 w-8 text-primary" />,
    features: [
      "Variable speed drive capability",
      "High hydraulic efficiency",
      "Energy saving operations",
      "Corrosion resistant construction",
      "Low noise operation",
      "Easy maintenance access"
    ],
    specifications: {
      "Flow Rate": "100-5000 GPM",
      "Head": "Up to 200 feet",
      "Power": "1-200 HP available",
      "Efficiency": "Up to 85%"
    },
    introduction: "Our swimming pool pumps are engineered for reliability and efficiency, providing optimal water circulation with minimal energy consumption. Variable speed technology ensures whisper-quiet operation while reducing operating costs by up to 80%.",
    certifications: [
      { title: "Energy Star Certified", url: "/manuals/product-manual.pdf" },
      { title: "NSF/ANSI Standard 50 Certified", url: "/manuals/product-manual.pdf" },
      { title: "UL Listed - Safety Standards", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation Manual", url: "/manuals/product-manual.pdf" },
      { title: "Operation & Maintenance", url: "/manuals/product-manual.pdf" },
      { title: "Troubleshooting Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [circulationPumps, poolEquipment]
  },
  {
    id: "electrical-heater",
    title: "Electrical Heater",
    description: "Efficient electric heating systems for optimal swimming pool water temperature control in all applications.",
    image: electricHeaters,
    icon: <Thermometer className="h-8 w-8 text-primary" />,
    features: [
      "Energy efficient heating elements",
      "Digital temperature controls",
      "Corrosion resistant construction",
      "Multiple power configurations",
      "Safety shutdown systems",
      "Modular design options"
    ],
    specifications: {
      "Power": "5-500 kW available",
      "Voltage": "208-480V, 3-phase",
      "Material": "316L stainless steel",
      "Control": "Digital PID"
    },
    introduction: "Electrical pool heaters offer precise temperature control and rapid heating capabilities, ensuring comfortable swimming conditions year-round. Built with premium stainless steel and advanced digital controls for maximum reliability and performance.",
    certifications: [
      { title: "UL Listed - Electrical Safety", url: "/manuals/product-manual.pdf" },
      { title: "NSF/ANSI Standard 50 Certified", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "CSA Certified - Canadian Standards", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation Guide", url: "/manuals/product-manual.pdf" },
      { title: "Electrical Schematic", url: "/manuals/product-manual.pdf" },
      { title: "Service Manual", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [electricHeaters, poolEquipment]
  },
  {
    id: "chemical-dosing",
    title: "Chemical Dosing",
    description: "Precision chemical dosing pumps and systems for accurate swimming pool water treatment chemical delivery.",
    image: dosingSystems,
    icon: <Beaker className="h-8 w-8 text-primary" />,
    features: [
      "Precision metering pumps",
      "Automated control systems",
      "Multiple chemical handling",
      "Flow-proportional dosing",
      "Safety interlocks included",
      "Remote monitoring capability"
    ],
    specifications: {
      "Flow Rate": "0.1-500 GPH",
      "Pressure": "Up to 150 PSI",
      "Control": "4-20mA, digital",
      "Materials": "PVDF, 316SS"
    },
    introduction: "Chemical dosing systems provide automated, precise chemical delivery for maintaining optimal pool water chemistry. Advanced control algorithms ensure accurate dosing while minimizing chemical waste and maintaining safe water conditions.",
    certifications: [
      { title: "NSF/ANSI Standard 50 Certified", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
      { title: "ATEX Certified - Explosive Atmospheres", url: "/manuals/product-manual.pdf" },
      { title: "FDA Compliant Materials", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation & Setup Guide", url: "/manuals/product-manual.pdf" },
      { title: "Calibration Procedures", url: "/manuals/product-manual.pdf" },
      { title: "Safety & Maintenance Manual", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [dosingSystems, treatmentSystems]
  },
  {
    id: "swimming-pool-sand-filter",
    title: "Swimming Pool Sand Filter",
    description: "Multi-stage sand filtration systems for superior swimming pool water clarity and debris removal.",
    image: disinfectionSystems,
    icon: <Filter className="h-8 w-8 text-primary" />,
    features: [
      "Multi-stage filtration process",
      "Automatic backwash systems",
      "Variable speed drive pumps",
      "Modular system design",
      "Low operating costs",
      "Minimal waste generation"
    ],
    specifications: {
      "Filtration": "0.01-500 microns",
      "Flow Rate": "10-10,000 GPM",
      "Backwash": "Fully automated",
      "Efficiency": ">99% removal"
    },
    introduction: "Sand filtration systems deliver exceptional water clarity through proven multi-media filtration technology. Automatic backwash cycles and intelligent controls minimize maintenance while ensuring optimal filtration performance for crystal-clear pool water.",
    certifications: [
      { title: "NSF/ANSI Standard 50 Certified", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
      { title: "ASME Pressure Vessel Code", url: "/manuals/product-manual.pdf" },
      { title: "WRAS Approved Materials", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Installation Manual", url: "/manuals/product-manual.pdf" },
      { title: "Backwash Programming Guide", url: "/manuals/product-manual.pdf" },
      { title: "Media Replacement Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [disinfectionSystems, poolEquipment]
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Complete range of swimming pool accessories and components for system enhancement and maintenance.",
    image: poolEquipment,
    icon: <Settings className="h-8 w-8 text-primary" />,
    features: [
      "Wide range of accessories",
      "Compatible with all systems",
      "High-quality materials",
      "Easy installation",
      "Available on demand",
      "Custom solutions available"
    ],
    specifications: {
      "Range": "Complete selection",
      "Availability": "On demand",
      "Quality": "Premium grade",
      "Support": "Technical assistance"
    },
    introduction: "Our comprehensive range of pool accessories and components ensures your system operates at peak efficiency. From replacement parts to enhancement modules, we provide everything needed for installation, maintenance, and upgrades.",
    certifications: [
      { title: "NSF/ANSI Standard 50 Certified Components", url: "/manuals/product-manual.pdf" },
      { title: "CE Marking - European Conformity", url: "/manuals/product-manual.pdf" },
      { title: "ISO 9001:2015 Quality Management", url: "/manuals/product-manual.pdf" },
      { title: "RoHS Compliant Materials", url: "/manuals/product-manual.pdf" },
    ],
    manuals: [
      { title: "Accessories Catalog", url: "/manuals/product-manual.pdf" },
      { title: "Installation Guidelines", url: "/manuals/product-manual.pdf" },
      { title: "Compatibility Guide", url: "/manuals/product-manual.pdf" }
    ],
    productImages: [poolEquipment, treatmentSystems]
  }
];
