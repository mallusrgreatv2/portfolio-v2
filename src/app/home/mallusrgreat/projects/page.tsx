import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import User from "@/components/user";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="md:p-10 p-8 border-l-2">
      <Breadcrumb>
        <BreadcrumbList>
          /<BreadcrumbItem>home</BreadcrumbItem>/
          <BreadcrumbItem>
            <BreadcrumbLink href="/home/mallusrgreat">
              mallusrgreat
            </BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbLink href="/home/mallusrgreat/projects">
              projects
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <User />
      <div className="flex flex-col mt-10 w-full">
        <Link
          href="/home/mallusrgreat"
          className="bg-card p-5 border rounded-sm mb-1 hover:bg-accent transition-all hover:scale-[100.5%] font-mono"
        >
          ..
        </Link>
        <Link
          href="/home/mallusrgreat/projects"
          className="bg-card p-5 border rounded-sm mb-1 hover:bg-accent transition-all hover:scale-[100.5%] font-mono"
        >
          ../projects
        </Link>
      </div>
      <div>
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
      </div>
    </div>
  );
}
