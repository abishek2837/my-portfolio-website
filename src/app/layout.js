import { Inter } from "next/font/google";
import "../../public/styles/globals.css";
import "../../public/styles/Home.module.css";
import "../../public/styles/animation.css";
import "../../public/styles/cssGrid.css";
import PortfolioProvider from "@/contextApi/PortfolioContext";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abishek's Portfolio",
  description: "Explore the best Next.js and React.js portfolio by Abishek Poddar. Featuring simple, dark and light theme designs and mobile responsiveness.",
  keywords: ["portfolio", "Next.js", "React.js", "web development", "dark theme", "light theme", "best portfolio github", "best next js portfolio", "how to make a portfolio", "best react js portfolio github", "best react js portfolio", "best next js portfolio", "react js developer in biratnager", "react js developer in nepal", "react js developer in morang", "react js developer in kathmandu"],
  url: "https://abishekpoddar.com.np",
  openGraph: {
    title: "Abhishek's Portfolio",
    description: "Passionate and driven ReactJS developer with a strong foundation in NextJS. Dedicated to creating dynamic and user-centric web applications. Eager to contribute my expertise in frontend frameworks, modern UI/UX design, and responsive development to a forward-thinking team, while continuouslylearning and growing in the ever-evolving world of web development.",
    url: "https://abishekpoddar.com.np/#about",
    images: [
      {
        url: "images/myimage/myimage.jpg",
        width: 800,
        height: 600,
        alt: "About Us",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PortfolioProvider>
          <ThemeProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  color: "#713200",
                },
              }}
            />
          </ThemeProvider>
        </PortfolioProvider>
      </body>
    </html>
  );
}
