type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const siteConfig: SiteConfig = {
  name: "Next Level UI",
  description:
    "Blazing-fast, interactive app built with latest web tech (Next.js 14). Modern design (Shadcn, Tailwind CSS). Open-source & yours to explore!",
  url: baseUrl,
  ogImage: `${baseUrl}/open-graph.png`,
  links: {
    twitter: "https://twitter.com/AdhithyaSarath",
    github: "https://github.com/SarathAdhi",
  },
};
