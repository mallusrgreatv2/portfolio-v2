import { knowledgeSections } from "@/constants/knowledge";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, SquareArrowOutUpRight } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import KnowledgeCard from "@/components/KnowledgeCard";
import User from "@/components/user";

export default function HomePage() {
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
        </BreadcrumbList>
      </Breadcrumb>

      <User />

      <div className="flex flex-col mt-10 w-full">
        <Link
          href="/home/mallusrgreat"
          className="bg-card p-5 border rounded-sm mb-1 hover:bg-accent transition-all hover:scale-[100.5%] font-mono"
        >
          .
        </Link>
        <Link
          href="/home/mallusrgreat/projects"
          className="bg-card p-5 border rounded-sm mb-1 hover:bg-accent transition-all hover:scale-[100.5%] font-mono"
        >
          ./projects
        </Link>
      </div>

      <section className="pt-16">
        <h2 className="md:text-2xl text-lg mb-5">Currently working on...</h2>
        <div className="flex gap-5 md:ml-5 mt-10 md:flex-row flex-col">
          <Card className="md:w-sm w-3xs p-10 flex flex-col items-center hover:bg-accent transition-colors duration-500">
            <Image
              src="/rudescore.webp"
              alt="Rudescore"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex items-center mt-3">
              <CardTitle className="text-2xl">Rudescore</CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CheckCircle height={20} width={20} className="ml-2" />
                  </TooltipTrigger>
                  <TooltipContent>Verified bot</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <CardDescription className="text-center mt-2">
              A feature-packed utility bot with powerful tools for server
              administrators
            </CardDescription>
            <CardAction className="justify-self-center self-center">
              <Link href="https://rudescore.com" target="_blank">
                <Button className="w-full cursor-pointer">
                  Website <SquareArrowOutUpRight />
                </Button>
              </Link>
            </CardAction>
          </Card>

          <Card className="md:w-sm w-3xs p-10 flex flex-col items-center hover:bg-accent transition-colors duration-500">
            <Image
              src="/daisy.png"
              alt="Daisy"
              width={100}
              height={100}
              className="rounded-full"
            />
            <CardTitle className="text-2xl mt-3">Daisy</CardTitle>
            <CardDescription className="text-center mt-2">
              Various fun commands to keep your server active
            </CardDescription>
            <CardAction className="justify-self-center self-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="w-full cursor-not-allowed opacity-50">
                      Website <SquareArrowOutUpRight />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Coming soon</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardAction>
          </Card>
        </div>
      </section>

      <section className="pt-16">
        <h2 className="text-2xl mb-5">Knowledge</h2>
        <div className="flex md:flex-row flex-col">
          {knowledgeSections.map((section, idx) => (
            <KnowledgeCard
              key={idx}
              title={section.title}
              items={section.items}
              align={section.align}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
