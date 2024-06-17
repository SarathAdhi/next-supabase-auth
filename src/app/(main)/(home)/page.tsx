import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";
import BentoGridSection from "./_components/bento-grid-section";

const HomePage = () => {
  return (
    <div>
      <section className="grid place-content-center place-items-center gap-6 text-center">
        <Badge size="sm">
          Minimal Template with <Lock className="ml-1 w-4 h-4" />
        </Badge>

        <h1 className="max-w-6xl">
          Next.js 14 Supabase Authentication Playground: Building Modern Web
          Experiences Together
        </h1>

        <p className="max-w-3xl">
          Explore the World of Open Source Coding and Secure Web Development.
          Every Line of Code is Open Source - Contribute to the Future of Web
          Development with Supabase Authentication!
        </p>

        <div className="flex items-center gap-3">
          <Button className="rounded-full">
            <Link href="/login">Get Started</Link>
          </Button>

          <Button variant="outline" className="rounded-full">
            <a href="https://github.com/SarathAdhi/next-supabase-auth">
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-center">Key Features</h2>

        <BentoGridSection />
      </section>

      <section className="space-y-6 text-center">
        <h2>Completely Open Source</h2>

        <p className="mx-auto max-w-2xl">
          The code for this project is completely open source and available on
          GitHub. Join the community and contribute to the future of web
          development!
        </p>

        <Button size="sm" asChild>
          <a
            href="https://github.com/SarathAdhi/next-supabase-auth"
            target="_blank"
          >
            View on GitHub
          </a>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
