import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { ClerkProvider } from "@clerk/nextjs";
import { TanstackProvider } from "@providers/tanstack-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issue tracker",
  description: "Issue tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.com/terms",
        },
      }}
    >
      <TanstackProvider>
        <html lang="en">
          <body className={inter.className}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      </TanstackProvider>
    </ClerkProvider>
  );
}
