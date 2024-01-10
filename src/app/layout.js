import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quotes App",
  description: "Get Random Quotes instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: "30px" }}>
        <NavBar />
        <div style={{ marginTop: "30px" }}>{children}</div>
      </body>
    </html>
  );
}
