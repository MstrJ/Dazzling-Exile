import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Footer from "../components/footer";
import DazzlingNavbar from "../components/Navbar/dazzlingNavbar";

export const metadata: Metadata = {
  title: "Dazzling Exile",
  description:
    "Website which can help you to find your way in the world of path of exile",
  icons: "/favicon.ico",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  return (
    <html lang="pl" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background antialiased">
        <Providers
          session={session}
          themeProps={{ attribute: "class", defaultTheme: "dark" }}
        >
          <DazzlingNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
