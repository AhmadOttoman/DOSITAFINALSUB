import uvSystemsDrinking1 from "@/assets/uv-systems-drinking-1.png";
import uvSystemsDrinking2 from "@/assets/uv-systems-drinking-2.png";
import uvSystemsDrinking3 from "@/assets/uv-systems-drinking-3.png";
import uvSystemsDrinking5 from "@/assets/uv-systems-drinking-5.png";
import csiSystemsDrinking1 from "@/assets/csi-systems-drinking-1.png";
import csiSystemsDrinking2 from "@/assets/csi-systems-drinking-2.png";
import csiSystemsDrinking3 from "@/assets/csi-systems-drinking-3.png";
import csiSystemsDrinking4 from "@/assets/csi-systems-drinking-4.png";
import csiSystemsDrinking5 from "@/assets/csi-systems-drinking-5.png";
import dosuvSystems1 from "@/assets/dosuv-systems-1.png";
import dosuvSystems2 from "@/assets/dosuv-systems-2.png";
import heaterSystems1 from "@/assets/heater-systems-1.png";
import heaterSystems2 from "@/assets/heater-systems-2.png";
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
  safetyInstallationBullets?: string[];
  safetyInstallationTitle?: string;
  productImages?: string[];
}

export const uvSystemsProduct: Product = {
  id: "uv-systems-drinking",
  title: "UV Systems",
  description: "Advanced ultraviolet disinfection systems for chemical-free drinking water treatment and pathogen elimination.",
  image: uvSystemsDrinking5,
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
    uvSystemsDrinking1,
  ],
};

export const dosuvSystemsPoolProduct: Product = {
  ...uvSystemsProduct,
  id: "dosuv-systems-pool",
  title: "UV Systems",
  image: dosuvSystems1,
  productImages: [dosuvSystems2],
  manuals: [
    { title: "DosUV Brochure", url: "/manuals/dosuv-brochure-1-2.pdf" },
  ],
};

export const copperSilverIonizationProduct: Product = {
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
  overviewTitle: "Overview",
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
};

export const drinkingWaterProducts: Product[] = [
  uvSystemsProduct,
  copperSilverIonizationProduct,
];

export const swimmingPoolProducts: Product[] = [
  {
    id: "electrical-heater",
    title: "Electrical Heater",
    description: "Efficient electric heating systems for optimal swimming pool water temperature control in all applications.",
    image: heaterSystems1,
    icon: <Thermometer className="h-8 w-8 text-primary" />,
    features: [
      "Energy efficient heating elements",
      "Digital temperature controls",
      "Corrosion resistant construction",
      "Multiple power configurations",
      "Safety shutdown systems",
      "Modular design options"
    ],
    introduction:
      "Electrical heaters are the Ideal choice for maintaining adequate water temperatures for your swimming pool or Jacuzzi all year long, provided with low maintenance & high-quality components.",
    specificationBullets: [
      "Heavy duty body made from marine grade SS316.",
      "Highly corrosion & chemical resistant heating elements made from pure Titanium.",
      "3-phase, 380V connection; with single phase models available for some sizes.",
      "50Hz frequency, with the option for 60Hz partially available.",
      "Model range from (9 – 24)kW.",
      "Multiple levels of protection for every unit including temperature controllers, thermal protection, & flow switchs, proper electrical connection on site to be administrated by competent technicians.",
      "Digital & analog models available.",
    ],
    safetyInstallationTitle: "Safety & Installation Notes",
    safetyInstallationBullets: [
      "It is the customer's responsibility to select a suitable ELCB for further protection against electrical leakage.",
      "It is the customer's responsibility to select the proper full gauge copper cable with the minimum size as recommended by the supplier.",
      "The heaters size recommended by the manufacturer is based on fixed parameters (such as a 72 hour period to achieve the desired heat, & DT of 17°C), other parameters may apply for proper heating, such as outdoor weather conditions, & the swimming pool surface area, air conditioning for indoor pools. The customer is responsible for requesting the proper heater size.",
    ],
    brochures: [
      { title: "StratoHeat Brochure 1.0", url: "/manuals/stratoheat-brochure-1-0.pdf" },
    ],
    productImages: [heaterSystems2],
  },
  dosuvSystemsPoolProduct,
  copperSilverIonizationProduct,
];
