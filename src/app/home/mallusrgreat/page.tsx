"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import User from "@/components/user";
import { useState } from "react";
import HomeContent from "./_components/home";
import ContactContent from "./_components/contact";
import ProjectsContent from "./_components/projects";

type Page = "" | "projects" | "contact";
export default function HomePage() {
  const pages = ["", "projects", "contact"] as Page[];
  const [page, setPage] = useState<Page>("");

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
          {page
            ? `/${(
                <BreadcrumbItem>
                  <span onClick={() => setPage(page)}>{page}</span>
                </BreadcrumbItem>
              )}`
            : ""}
        </BreadcrumbList>
      </Breadcrumb>

      <User />

      <div className="flex flex-col mt-10 w-full">
        {pages.map((loopPage) => {
          let displayText;
          if (loopPage === "" && page === "") displayText = ".";
          else if (loopPage === "" && page !== "") displayText = "..";
          else if (loopPage !== "" && page === "")
            displayText = `./${loopPage}`;
          else if (loopPage !== "" && page !== "")
            displayText = `../${loopPage}`;

          return (
            <span
              onClick={() => setPage(loopPage)}
              key={loopPage}
              className="bg-card p-5 border rounded-sm mb-1 hover:bg-accent transition-all hover:scale-[100.5%] font-mono"
            >
              {displayText}
            </span>
          );
        })}{" "}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {(console.log("..") as any) || ""}
      </div>
      {getPageContent(page)}
    </div>
  );
}
function getPageContent(page: Page) {
  switch (page) {
    case "":
      return <HomeContent />;
    case "contact":
      return <ContactContent />;
    case "projects":
      return <ProjectsContent />;
  }
}
