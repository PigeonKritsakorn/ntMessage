"use client";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { BreadcrumbCollapsed } from "@/components/breadcrumbBar";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const noto = localFont({
  src: [
    {
      path: "../public/fonts/NotoSerifThai-Bold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body className={`${noto.variable}`}>
        {isLoginPage ? (
          <main>{children}</main>
        ) : (
          <SidebarProvider>
            <AppSidebar />
            <main>
              <div className="flex flex-row justify-start items-center gap-4 p-4 border-b border-background">
                <SidebarTrigger />
                <BreadcrumbCollapsed />
              </div>
              {children}
            </main>
          </SidebarProvider>
        )}
      </body>
    </html>
  );
}
