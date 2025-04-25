import { ReactElement } from "react";
import { Card, CardContent } from "./ui/card";

export default function KnowledgeCard({
  title,
  items,
  align = "left",
}: {
  title: string;
  items: { label: string; icon: ReactElement }[];
  align: string;
}) {
  return (
    <Card className="m-5 md:ml-5 ml-0 md:w-64 hover:bg-accent transition duration-300">
      <CardContent className="p-6">
        <h3
          className={`text-2xl font-semibold ${
            align === "right" ? "text-end" : ""
          }`}
        >
          {title}
        </h3>
        <ul
          className={`mt-4 space-y-2 ${
            align === "right" ? "text-right" : "text-left"
          }`}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center ${
                align === "right" ? "justify-end" : ""
              }`}
            >
              {align === "right" ? (
                <>
                  <span className="mr-2">{item.label}</span>
                  {item.icon}
                </>
              ) : (
                <>
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
