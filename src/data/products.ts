import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
};

export const CATEGORIES = [
  "Interior",
  "Exterior",
  "Lighting",
  "Car Care",
  "Electronics",
  "Performance",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Car LED Headlight Kit",
    category: "Lighting",
    price: 3499,
    mrp: 4999,
    rating: 4.7,
    reviews: 1284,
    image: p1,
    description:
      "6500K plug-and-play LED headlight kit with 12,000 lumens output, copper heat-sink cooling and CANbus compatibility. Fits most Indian hatchbacks, sedans and SUVs.",
  },
  {
    id: 2,
    name: "Magnetic Phone Holder",
    category: "Interior",
    price: 599,
    mrp: 999,
    rating: 4.4,
    reviews: 3120,
    image: p2,
    description:
      "Six N52 neodymium magnets hold your phone rock-steady over potholes. Aluminium body, 360° rotation and a vent clip that won't damage your dashboard.",
  },
  {
    id: 3,
    name: "Car Ambient Lighting Kit",
    category: "Lighting",
    price: 1799,
    mrp: 2599,
    rating: 4.6,
    reviews: 942,
    image: p3,
    description:
      "5m fibre-optic strip with 16 million colours, app and remote control, music sync mode and hidden-fit routing for a factory-finish glow.",
  },
  {
    id: 4,
    name: "Premium Seat Cushion",
    category: "Interior",
    price: 1299,
    mrp: 1899,
    rating: 4.3,
    reviews: 671,
    image: p4,
    description:
      "High-density memory foam with breathable mesh and anti-slip base. Designed for long highway drives and daily city commutes.",
  },
  {
    id: 5,
    name: "Car Vacuum Cleaner",
    category: "Car Care",
    price: 2299,
    mrp: 3499,
    rating: 4.5,
    reviews: 1863,
    image: p5,
    description:
      "Cordless 8000Pa handheld vacuum with 30-minute runtime, HEPA filter and three nozzles for seats, mats and tight console gaps.",
  },
  {
    id: 6,
    name: "Dashboard Camera 2K",
    category: "Electronics",
    price: 5999,
    mrp: 8499,
    rating: 4.8,
    reviews: 2410,
    image: p6,
    description:
      "2K front recording with 140° wide angle, night vision, loop recording, G-sensor incident lock and 24-hour parking monitor.",
  },
  {
    id: 7,
    name: "Car Cleaning Kit",
    category: "Car Care",
    price: 899,
    mrp: 1499,
    rating: 4.2,
    reviews: 1105,
    image: p7,
    description:
      "Complete 7-piece kit: interior cleaner, dashboard polish, glass cleaner, microfibre towels and a detailing brush for vents and trims.",
  },
  {
    id: 8,
    name: "Universal Car Floor Mats",
    category: "Interior",
    price: 1999,
    mrp: 2999,
    rating: 4.6,
    reviews: 1547,
    image: p8,
    description:
      "7D anti-skid floor mats with raised edges and a waterproof base. Trimmable universal fit, easy to wash and quick to dry.",
  },
  {
    id: 9,
    name: "Performance Cold Air Intake",
    category: "Performance",
    price: 9499,
    mrp: 12999,
    rating: 4.5,
    reviews: 318,
    image: p1,
    description:
      "High-flow washable filter with mandrel-bent aluminium tubing for improved throttle response and a deeper intake note.",
  },
  {
    id: 10,
    name: "Chrome Body Side Moulding",
    category: "Exterior",
    price: 1199,
    mrp: 1799,
    rating: 4.3,
    reviews: 486,
    image: p8,
    description:
      "Weather-resistant chrome trim with 3M automotive adhesive. Protects doors from dings while sharpening your car's side profile.",
  },
  {
    id: 11,
    name: "Wireless Car Charger Mount",
    category: "Electronics",
    price: 1699,
    mrp: 2499,
    rating: 4.4,
    reviews: 894,
    image: p2,
    description:
      "15W fast wireless charging with auto-clamping arms, over-heat protection and a one-hand release button.",
  },
  {
    id: 12,
    name: "Ceramic Coating Spray",
    category: "Car Care",
    price: 299,
    mrp: 549,
    rating: 4.9,
    reviews: 2278,
    image: p7,
    description:
      "SiO2 ceramic spray that adds a deep hydrophobic gloss in minutes. Safe on paint, glass, plastic and chrome.",
  },
];

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const discount = (p: Product) => Math.round((1 - p.price / p.mrp) * 100);
