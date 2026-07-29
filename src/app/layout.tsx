import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alviteq.com"),
  title: { default: "Alviteq — Private technology for everyday life", template: "%s | Alviteq" },
  description: "Alviteq builds private, dependable software that keeps important information under your control.",
  icons: {
    icon: "/images/alviteq-mark.png",
    apple: "/images/alviteq-mark.png",
  },
  openGraph: {
    title: "Alviteq",
    description: "Private technology for everyday life.",
    url: "https://alviteq.com",
    siteName: "Alviteq",
    type: "website",
    images: [{ url: "/images/alviteq-brand-card.png", width: 1536, height: 1024, alt: "Alviteq" }],
  },
};

const nav = [
  ["About", "/about"],
  ["Products", "/products"],
  ["OwnKeep", "/ownkeep"],
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
                src="/images/alviteq-logo.png"
                alt="Alviteq"
                width={1518}
                height={378}
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
                  src="/images/alviteq-logo.png"
                  alt="Alviteq"
                  width={1518}
                  height={378}
                />
                <p>Thoughtful technology designed around privacy, resilience, and human control.</p>
              </div>
              <div className="footer-links">
                <h3>Company</h3>
                <Link href="/about">About</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Contact</Link>
              </div>
              <div className="footer-links">
                <h3>Legal</h3>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              </div>
            </div>
            <div className="copyright">© {new Date().getFullYear()} Alviteq. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
