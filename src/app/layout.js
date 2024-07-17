import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Todo | Best To-Do List App for Task Management & Productivity",
  description: "Stay organized and boost productivity with our intuitive to-do list app. Manage your tasks effortlessly with features like easy task addition, categorization, and synchronization across devices. Try it today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
