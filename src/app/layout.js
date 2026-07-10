import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Infinite Vision — We Build Experiences",
  description:
    "Infinite Vision crafts immersive brand experiences through theme branding, events, BTL activations, and branding solutions. Transforming ideas into real-world impact.",
  keywords: "branding, experiential marketing, events, BTL activations, brand experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/Videos/header_video.mp4"
          as="video"
          type="video/mp4"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/Images/header-image.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
