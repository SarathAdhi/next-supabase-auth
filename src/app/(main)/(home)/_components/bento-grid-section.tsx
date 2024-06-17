import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Code2, Component, LockKeyhole, Palette } from "lucide-react";

const features = [
  {
    Icon: Component,
    name: "Server Components",
    description:
      "Utilize the power of server components for seamless rendering and improved performance.",
    href: "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div />,
  },
  {
    Icon: LockKeyhole,
    name: "Authentication",
    description:
      "Secure your application with the robust authentication provided using Supabase Auth.",
    href: "https://supabase.com/docs/guides/auth/server-side/nextjs",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div />,
  },
  {
    Icon: Code2,
    name: "Open Source",
    description:
      "Join hands with developers worldwide to enhance and innovate, making a lasting impact on the project.",
    href: "https://opensource.guide/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div />,
  },
  {
    Icon: Palette,
    name: "Modern UI",
    description:
      "Craft stunning and responsive user interfaces with the latest design principles and practices.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: <div />,
  },
];

const BentoGridSection = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoGridSection;
