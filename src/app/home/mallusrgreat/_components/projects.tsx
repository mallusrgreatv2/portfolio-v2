import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsContent() {
  return (
    <section>
      <h2 className="text-3xl mt-10">Projects</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className={cn(
              "flex flex-col h-full hover:bg-accent transition-colors duration-500",
              idx === 0 ? "border-1 border-amber-300" : ""
            )}
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={project.link} target="_blank">
                <Button className="cursor-pointer">
                  Open <SquareArrowOutUpRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
