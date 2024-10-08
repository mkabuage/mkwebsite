"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MountainIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

export function Portfolio() {
  const projects = [
    {
      title: "Ollama and Open WebUI",
      description: "Comming Soon...",
      link: "",
    },
    {
      title: "Comming Soon...",
      description: "",
      link: "#",
    },
    {
      title: "Comming Soon...",
      description: "",
      link: "#",
    },
  ];

  const blogPosts = [
    {
      title: "Unlocking the Power of Early Engagement",
      description:
        "A Technical Consultant’s Journey from Problem Discovery to Proof of Concept",
      date: "9th Sept 2024",
      readTime: "5 min read",
      link: "https://open.substack.com/pub/michaelkabuage/p/unlocking-the-power-of-early-engagement?r=3bz98e&utm_campaign=post&utm_medium=web",
    },
    {
      title: "Comming soon...",
      description: "",
      date: "",
      readTime: "",
      link: "#",
    },
    {
      title: "Comming soon...",
      description: "",
      date: "",
      readTime: "",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-xl font-medium px-4">
            Michael Kabuage - Portfolio
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link> */}
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#blog"
          >
            Blog
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI & Data Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Showcasing innovative projects in artificial intelligence and
                  data analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      asChild
                      onClick={() =>
                        sendGTMEvent({
                          event: "buttonClicked",
                          value: project.title,
                        })
                      }
                    >
                      <Link href={project.link}>View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Blog
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      <span>{post.date}</span>
                      <ClockIcon className="ml-4 mr-1 h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link
                        href={post.link}
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Read Post
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              About Me
            </h2>
            <p className="mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m a passionate AI and data consultant with a focus on
              creating innovative solutions to complex problems. With expertise
              in artificial intelligence, machine learning, data analysis, and
              systems, I strive to push the boundaries of what&apos;s possible
              with technology.
            </p>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contact
            </h2>
            {/* <div className="mx-auto">
              <ContactForm />
            </div> */}

            <div className="flex justify-center space-x-4 py-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  sendGTMEvent({ event: "buttonClicked", value: "github" })
                }
              >
                <Link
                  href="https://github.com/mkabuage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  sendGTMEvent({ event: "buttonClicked", value: "linkedin" })
                }
              >
                <Link
                  href="https://www.linkedin.com/in/michael-kabuage"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              {/* <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  sendGTMEvent({ event: "buttonClicked", value: "email" })
                }
              >
                <Link href="mailto:michael.kabuage@daltinum.com">
                  <SiGmail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Michael Kabuage Portfolio. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
