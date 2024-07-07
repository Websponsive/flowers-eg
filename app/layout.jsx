import { Inter, Madimi_One } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });
const headings = Madimi_One({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--heading-font"
})

export const metadata = {
  title: "Custom bouquets for all occasions",
  metadataBase: "https://flowers-eg.netlify.app",
  description: 'Surprise your loved ones with our personalized bouquets, crafted with care and love to bring smiles and joy. Reach out now and you\'ll have your flowers by tomorrow!',
  openGraph: {
    title: 'TransfeRome',
    description: 'Surprise your loved ones with our personalized bouquets, crafted with care and love to bring smiles and joy. Reach out now and you\'ll have your flowers by tomorrow!',
    images: '/assets/bouquet.webp'
  },
  icons: {
    shortcut: { url: "/favicon.ico", type: "image/x-icon" },
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    manifest: "/site.webmanifest"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${headings.variable}`}>
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
