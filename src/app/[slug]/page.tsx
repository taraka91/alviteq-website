import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Page = { title: string; eyebrow: string; intro: string; body: React.ReactNode };

const pages: Record<string, Page> = {
  about: {
    title: "We build dependable technology around human control.",
    eyebrow: "About Alviteq",
    intro: "Alviteq is a product technology company focused on private, resilient software for everyday life.",
    body: <><h2>Our point of view</h2><p>Useful technology should simplify important work without quietly taking ownership of the information behind it. We approach product design, engineering, and security as one discipline.</p><h2>Our principles</h2><ul><li>Collect less and explain clearly.</li><li>Keep essential experiences useful offline.</li><li>Make security visible through understandable choices.</li><li>Build portable products that respect user ownership.</li></ul></>,
  },
  products: {
    title: "Focused products for information that matters.",
    eyebrow: "Products",
    intro: "Our products combine careful interaction design with privacy-conscious engineering.",
    body: <><div className="contact-card"><p className="eyebrow">OwnKeep</p><h2>Your private life vault.</h2><p>Secure documents, useful extracted details, reminders, connected records, encrypted backups, and a private password manager—all organized locally.</p><Link className="button" href="/ownkeep">Explore OwnKeep</Link></div><h2>What comes next</h2><p>Alviteq continues to explore practical tools where privacy, local intelligence, and dependable cross-platform experiences can materially improve daily life.</p></>,
  },
  ownkeep: {
    title: "Keep what matters. Only you. Always.",
    eyebrow: "OwnKeep",
    intro: "OwnKeep is an encrypted personal vault for documents, important details, reminders, relationships, and passwords.",
    body: <><h2>One private place for life’s records</h2><p>Scan or import documents, preserve originals, generate thumbnails, run supported OCR locally, review extracted details, add tags, and find records by filename, tags, or recognized text.</p><div className="grid-3"><article className="card"><h3>Encrypted vault</h3><p>Original files and structured metadata are protected inside a local encrypted store.</p></article><article className="card"><h3>Life organization</h3><p>Connect records with people, vehicles, properties, places, devices, and other meaningful entities.</p></article><article className="card"><h3>Password manager</h3><p>Keep credentials and private notes inside the same unlocked encrypted environment.</p></article></div><h2>Designed to stay useful</h2><p>OwnKeep is designed for Android, iOS, macOS, Windows, and Linux, with offline-first workflows and encrypted portable backup support.</p></>,
  },
  technology: {
    title: "Security is a system, not a feature label.",
    eyebrow: "Technology",
    intro: "Alviteq combines local processing, authenticated encryption, and deliberately narrow platform integrations.",
    body: <><h2>Local-first foundations</h2><p>OwnKeep encrypts originals and metadata locally, uses device-protected key envelopes where available, and keeps recovery access separate from convenient device unlock.</p><h2>Deterministic intelligence</h2><p>Document classification, extraction, organization, and search are designed to work on-device. Suggested information remains reviewable rather than silently becoming authoritative.</p><h2>Portable by design</h2><p>Encrypted backups preserve user ownership and support migration without requiring a permanent cloud account.</p></>,
  },
  careers: {
    title: "Help build software worthy of trust.",
    eyebrow: "Careers",
    intro: "We value thoughtful builders who care about product quality, privacy, and the details people experience.",
    body: <><h2>Working at Alviteq</h2><p>We are interested in engineers, product designers, security practitioners, and collaborators who enjoy solving practical problems with disciplined technology.</p><div className="contact-card"><h3>Introduce yourself</h3><p>There are no publicly listed openings at this time. You can still share your background and the kind of work you care about.</p><Link className="button" href="/contact">Contact us</Link></div></>,
  },
  contact: {
    title: "Start a conversation.",
    eyebrow: "Contact",
    intro: "Questions about Alviteq, OwnKeep, partnerships, or careers are welcome.",
    body: <div className="contact-card"><h2>Email Alviteq</h2><p>Send your enquiry with enough context for us to direct it appropriately.</p><a className="button" href="mailto:hello@alviteq.com">hello@alviteq.com</a></div>,
  },
  "privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "Legal",
    intro: "This website is designed to provide company and product information with minimal data collection.",
    body: <><h2>Website information</h2><p>Alviteq does not intentionally ask visitors to create an account on this website. Infrastructure providers may process basic request data needed to deliver and secure the site.</p><h2>Messages you send</h2><p>If you contact Alviteq by email, the information you provide is used to respond to your enquiry and maintain necessary business records.</p><h2>OwnKeep</h2><p>OwnKeep product data is governed by the notices and agreements presented in the application. This website policy does not change those terms.</p><h2>Your choices</h2><p>You may contact Alviteq to ask about personal information submitted through direct correspondence.</p><p>Last updated: 29 July 2026.</p></>,
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    eyebrow: "Legal",
    intro: "These terms govern use of the public Alviteq website.",
    body: <><h2>Informational purpose</h2><p>Website content is provided for general information and may change as products evolve. It is not professional, legal, financial, or records-management advice.</p><h2>Intellectual property</h2><p>Alviteq names, branding, product descriptions, and original site content may not be misrepresented or reused in a way that implies endorsement.</p><h2>External services</h2><p>Links or references to third-party platforms do not create responsibility for their availability, security, or content.</p><h2>Product terms</h2><p>Use of an Alviteq product may require acceptance of separate product-specific terms and privacy notices.</p><p>Last updated: 29 July 2026.</p></>,
  },
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug];
  return page ? { title: page.eyebrow, description: page.intro } : {};
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <><section className="page-hero"><div className="container"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="lead">{page.intro}</p></div></section><article className="page-copy container">{page.body}</article></>;
}
