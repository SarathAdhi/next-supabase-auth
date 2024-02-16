import { Badge } from "@ui/badge";
import { Button } from "@ui/button";
import { Code2, Component, Lock, LockKeyhole, Palette } from "lucide-react";
import Link from "next/link";
import React from "react";

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
            <a href="https://github.com/Next-Level-Starter-Templates/next-supabase-auth">
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-center">Key Features</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-6">
            <Component className="w-10 h-10 duration-300 ease-in-out group-hover:scale-75" />

            <div className="space-y-2">
              <h4 className="leading-none">Server Components</h4>

              <p className="text-sm">
                Utilize the power of server components for seamless rendering
                and improved performance.
              </p>
            </div>
          </div>

          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-6">
            <LockKeyhole className="w-10 h-10 duration-300 ease-in-out group-hover:scale-75" />

            <div className="space-y-2">
              <h4 className="leading-none">Authentication</h4>

              <p className="text-sm">
                Secure your application with the robust authentication provided
                using Supabase Auth.
              </p>
            </div>
          </div>

          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-6">
            <Code2 className="w-10 h-10 duration-300 ease-in-out group-hover:scale-75" />

            <div className="space-y-2">
              <h4 className="leading-none">Open Source</h4>

              <p className="text-sm">
                Join hands with developers worldwide to enhance and innovate,
                making a lasting impact on the project.
              </p>
            </div>
          </div>

          <div className="group p-4 sm:p-6 bg-foreground/5 duration-200 transition-colors hover:bg-foreground/[0.065] rounded-lg border space-y-6">
            <Palette className="w-10 h-10 duration-300 ease-in-out group-hover:scale-75" />

            <div className="space-y-2">
              <h4 className="leading-none">Modern UI</h4>

              <p className="text-sm">
                Craft stunning and responsive user interfaces with the latest
                design principles and practices.
              </p>
            </div>
          </div>
        </div>
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
            href="https://github.com/Next-Level-Starter-Templates/next-supabase-auth"
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
