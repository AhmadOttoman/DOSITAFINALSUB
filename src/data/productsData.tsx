import poolEquipment from "@/assets/pool-equipment.jpg";
import uvSystems from "@/assets/uv-systems.jpg";
import uvSystemsDrinking1 from "@/assets/uv-systems-drinking-1.png";
import uvSystemsDrinking2 from "@/assets/uv-systems-drinking-2.png";
import uvSystemsDrinking3 from "@/assets/uv-systems-drinking-3.png";
import uvSystemsDrinking4 from "@/assets/uv-systems-drinking-4.png";
import uvSystemsDrinking5 from "@/assets/uv-systems-drinking-5.png";
import copperIonization from "@/assets/copper-ionization.jpg";
import csiSystemsDrinking1 from "@/assets/csi-systems-drinking-1.png";
import csiSystemsDrinking2 from "@/assets/csi-systems-drinking-2.png";
import csiSystemsDrinking3 from "@/assets/csi-systems-drinking-3.png";
import csiSystemsDrinking4 from "@/assets/csi-systems-drinking-4.png";
import csiSystemsDrinking5 from "@/assets/csi-systems-drinking-5.png";
import ozoneGenerator from "@/assets/ozone-generator.jpg";
import electricHeaters from "@/assets/electric-heaters.jpg";
import { Zap, Atom, Thermometer } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  specifications?: Record<string, string>;
  specificationBullets?: string[];
  introduction?: string;
  overviewTitle?: string;
  certifications?: { title: string; url: string }[];
  manuals?: { title: string; url: string }[];
  brochures?: { title: string; url: string }[];
  productImages?: string[];
}

export const drinkingWaterProducts: Product[] = [
  {
    id: "uv-systems-drinking",
    title: "UV Systems",
    description: "Advanced ultraviolet disinfection systems for chemical-free drinking water treatment and pathogen elimination.",
    image: uvSystemsDrinking1,
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
    introduction: `UV disinfection systems refer to the application of Ultra Violet radiation, ideally at 254nm wavelength, to neutralize pollutant organisms such as: viruses, bacteria, & fungi; in the air, water, or on surfaces intended for disinfection. The disinfection depends largely on the radiation dose & the exposure time.

This process leaves no trace in or on the disinfected medium or surface, & creates no byproducts

Dosita has been a developer & supplier of UV disinfection systems since 2000, with a product ranges in air disinfection, potable water, & waste water, for projects in residential, commercial, & industrial facilities.`,
    certifications: [
      { title: "ISO 9001:2015", url: "/certifications/dosita-iso-9001-2027.pdf" },
      { title: "WRAS", url: "/certifications/uv-wras-certificate-2029.pdf" },
      { title: "UDEM", url: "/certifications/uv-udem-2025.pdf" },
      { title: "NSF", url: "/certifications/uv-nsf-test-report-2024.pdf" },
    ],
    manuals: [
      { title: "UVSafe Brochure", url: "/manuals/uvisafe-brochure-1-5.pdf" },
    ],
    productImages: [
      uvSystemsDrinking2,
      uvSystemsDrinking3,
      uvSystemsDrinking4,
      uvSystemsDrinking5,
    ],
  },
  {
    id: "copper-silver-ionization-drinking",
    title: "Copper Silver Ionization",
    description: "Eco-friendly copper-silver ionization systems for natural drinking water sanitization using mineral technology.",
    image: csiSystemsDrinking1,
    icon: <Atom className="h-8 w-8 text-primary" />,
    features: [
      "Natural mineral sanitization",
      "Long-lasting copper electrodes",
      "Mineral-based water treatment", 
      "Reduced chemical requirements",
      "Automatic ion level control",
      "Environmentally friendly process"
    ],
    specificationBullets: [
      "Our product range adopts Cu:AG 90:10, or 99.99 pure copper, depending on the requirements.",
      "Our vessels are SS316, & tested to 10 bars.",
      "Programmable controller for voltage, amperes, & time.",
      "Flow meters & BMS control meters are available options.",
      "Standard range (see brochure) & custom made units.",
    ],
    overviewTitle: "Introduction",
    introduction:
      "CSI disinfection, is the process of releasing ions to a water supply with the purpose of neutralizing harmful organisms, most commonly for Legionella. The concept was devised & developed by NASA in the 60's, & gradually made its presence into civilian applications for its effect on pathogens.",
    certifications: [
      { title: "ISO 9001:2015", url: "/certifications/dosita-iso-9001-2027.pdf" },
      { title: "WRAS", url: "/certifications/csi-wras-certificate-2029.pdf" },
      { title: "UDEM", url: "/certifications/csi-udem-2025.pdf" },
      { title: "NSF", url: "/certifications/csi-nsf-test-report-2024.pdf" },
    ],
    brochures: [
      { title: "IonSafe Brochure 1.0", url: "/manuals/ionsafe-brochure-1-0.pdf" },
    ],
    productImages: [
      csiSystemsDrinking2,
      csiSystemsDrinking4,
      csiSystemsDrinking3,
      csiSystemsDrinking5,
    ],
  }
];

export const swimmingPoolProducts: Product[] = [
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
];
