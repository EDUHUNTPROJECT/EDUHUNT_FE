import { Inter } from "next/font/google";
import SessionProvider from "../components/auth/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const session = getServerSession().then((session) => {
    return (
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>{children}</SessionProvider>
        </body>
      </html>
    );
  });

  return session;
}
