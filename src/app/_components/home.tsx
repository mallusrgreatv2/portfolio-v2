import KnowledgeCard from "@/components/KnowledgeCard";
import { Button } from "@/components/ui/button";
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
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { knowledgeSections } from "@/constants/knowledge";
import { CheckCircle, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  return (
    <>
      <section>
        <h2 className="text-3xl mt-10">Currently working on...</h2>
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

      <section>
        <h2 className="text-3xl mt-10">Knowledge</h2>
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
    </>
  );
}
