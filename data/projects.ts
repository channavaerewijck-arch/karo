// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  services: string[];
  year: number;
  images: string[];
  color?: string;
  splineUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "karo",
    title: "KARO Website",
    subtitle: "Futuristische digitale ervaring",
    description:
      "Een volledig op maat gemaakte Next.js website met high-end motion, minimal design en een futuristische uitstraling.",
    cover: "https://picsum.photos/seed/karo-cover/1200/700",
    services: ["Webdesign", "Development", "Branding", "Framer Motion"],
    year: 2024,
    images: [
      "https://picsum.photos/seed/karo-1/1200/800",
      "httpsum.photos/seed/karo-2/1200/800",
      "https://picsum.photos/seed/karo-3/1200/800",
    ],
    color: "#050509",
    splineUrl: "https://prod.spline.design/some-3d-scene/scene.splinecode",
  },

  {
    slug: "aether-studios",
    title: "Aether Studios",
    subtitle: "Creative agency website",
    description:
      "Een cinematic website voor een internationaal creative agency met smooth scrolling, storytelling-secties en een interactieve 3D hero.",
    cover: "https://picsum.photos/seed/aether-cover/1200/700",
    services: ["Webdesign", "Development", "Brand Identity", "3D Design"],
    year: 2024,
    images: [
      "https://picsum.photos/seed/aether-1/1200/800",
      "https://picsum.photos/seed/aether-2/1200/800",
      "https://picsum.photos/seed/aether-3/1200/800",
    ],
    color: "#0d0d10",
    splineUrl:
      "https://prod.spline.design/example-3d-aether/scene.splinecode",
  },

  {
    slug: "lumina-saas",
    title: "Lumina SaaS Dashboard",
    subtitle: "Premium SaaS product website",
    description:
      "Een moderne SaaS marketing site met een clean visual identity, product-led storytelling en animaties die de functionaliteit uitleggen.",
    cover: "https://picsum.photos/seed/lumina-cover/1200/700",
    services: ["UI/UX", "Frontend", "Motion", "Product Design"],
    year: 2023,
    images: [
      "https://picsum.photos/seed/lumina-1/1200/800",
      "https://picsum.photos/seed/lumina-2/1200/800",
      "https://picsum.photos/seed/lumina-3/1200/800",
    ],
    color: "#0f1117",
  },

  {
    slug: "verve-ecommerce",
    title: "VERVE E-Commerce",
    subtitle: "Minimal luxury shop",
    description:
      "Een premium e-commerce ervaring voor een minimal fashion label met focus op fotografie, whitespace en micro-interacties.",
    cover: "https://picsum.photos/seed/verve-cover/1200/700",
    services: ["E-commerce", "Webdesign", "Shopify Frontend", "Development"],
    year: 2023,
    images: [
      "https://picsum.photos/seed/verve-1/1200/800",
      "https://picsum.photos/seed/verve-2/1200/800",
      "https://picsum.photos/seed/verve-3/1200/800",
    ],
    color: "#111111",
  },

  {
    slug: "nova-personal-brand",
    title: "NOVA Personal Brand",
    subtitle: "High-end personal brand website",
    description:
      "Een persoonlijke, elegante website voor een creatieve ondernemer met een minimal design, soft transitions en storytelling-secties.",
    cover: "https://picsum.photos/seed/nova-cover/1200/700",
    services: ["Webdesign", "Branding", "Motion Design"],
    year: 2022,
    images: [
      "https://picsum.photos/seed/nova-1/1200/800",
      "https://picsum.photos/seed/nova-2/1200/800",
      "https://picsum.photos/seed/nova-3/1200/800",
    ],
    color: "#08080a",
    splineUrl:
      "https://prod.spline.design/example-nova-scene/scene.splinecode",
  },
];
