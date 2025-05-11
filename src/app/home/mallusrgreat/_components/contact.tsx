import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const contact = [
  {
    name: "Discord Server",
    url: "https://discord.gg/HRaFffMjkq",
    description: "discord.gg/HRaFffMjkq",
  },
  {
    name: "Email",
    url: "mailto:mallusrgreat@duck.com",
    description: "mallusrgreat@duck.com",
  },
];

export default function ContactContent() {
  return (
    <section>
      <h2 className="text-3xl mt-10">Contact</h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contact.map((contact, idx) => (
          <Link href={contact.url} key={idx}>
            <Card className="flex flex-col h-full hover:bg-accent transition-colors duration-500">
              <CardHeader>
                <CardTitle className="flex justify-center">
                  {contact.name}
                </CardTitle>
                <CardContent>
                  <CardDescription className="flex justify-center">
                    {contact.description}{" "}
                    <SquareArrowOutUpRight size={13} className="ml-1 mt-1" />
                  </CardDescription>
                </CardContent>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
