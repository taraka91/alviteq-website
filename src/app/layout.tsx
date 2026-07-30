import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alviteq.com"),
  title: { default: "Alviteq — Technology built for everyday life", template: "%s | Alviteq" },
  description: "Alviteq is an independent technology company building thoughtful digital products that solve real-world problems.",
  icons: {
    icon: [
      { url: "/brand/official/favicon.ico", sizes: "any" },
      { url: "/brand/official/alviteq-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/official/alviteq-icon-192.png",
  },
  openGraph: {
    title: "Alviteq",
    description: "Thoughtful digital products that solve real-world problems.",
    url: "https://alviteq.com",
    siteName: "Alviteq",
    type: "website",
    images: [{ url: "/brand/alviteq-social-card-final.png", width: 1200, height: 630, alt: "Alviteq — Technology you can trust" }],
  },
};

const nav = [
  ["About", "/about"],
  ["Products", "/products"],
  ["OwnKeep", "/products/ownkeep"],
  ["Technology", "/technology"],
  ["Careers", "/careers"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav container" aria-label="Main navigation">
            <Link className="brand" href="/" aria-label="Alviteq home">
              <Image
                className="brand-logo"
                src="/brand/official/alviteq-horizontal.svg"
                alt="Alviteq"
                width={1500}
                height={420}
                priority
              />
            </Link>
            <div className="nav-links">
              {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <Link className="button" href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Image
                  className="footer-logo"
                  src="/brand/official/alviteq-horizontal.svg"
                  alt="Alviteq"
                  width={1500}
                  height={420}
                />
                <p>Thoughtful digital products built around real problems, dependable engineering, and simple experiences.</p>
              </div>
              <div className="footer-links">
                <h3>Company</h3>
                <Link href="/about">About</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="footer-links">
                <h3>Legal</h3>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </div>
            </div>
            <div className="copyright">© {new Date().getFullYear()} Alviteq. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
