import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mallusrgreat",
  description: "Freelancer TypeScript developer",
  authors: [
    {
      name: "mallusrgreat",
      url: "https://github.com/mallusrgreatv2",
    },
  ],
  category: "portfolio",
  creator: "mallusrgreat",
  keywords: [
    "portfolio",
    "mallusrgreat",
    "mallusrgreatv2",
    "contact",
    "discord",
    "discord bots",
    "freelancer",
    "freelancing",
    "typescript",
    "javascript",
    "programmer",
    "bot dev",
    "api",
    "next.js",
    "nextjs",
    "node.js",
    "node",
    "nodejs",
    "discord bot developer",
    "automation",
  ],
  openGraph: {
    type: "profile",
    title: "mallusrgreat",
    description:
      "TypeScript developer specializing in Discord bots and backend software.",
    determiner: "the",
    emails: "mallusrgreat@duck.com",
    url: "https://discopika.tk",
  },
  applicationName: "mallusrgreat's portfolio",
  generator: "Next.js",
  twitter: {
    card: "summary",
    title: "mallusrgreat",
    description:
      "TypeScript developer specializing in Discord bots and backend software",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
export const viewport: Viewport = {
  colorScheme: "dark",
  initialScale: 1,
  themeColor: "#231c2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased md:p-10 dark`}>
        {children}
      </body>
    </html>
  );
}
