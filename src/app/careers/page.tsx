import type { Metadata } from "next";
import { PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "Careers", description: "Explore future opportunities to build trusted products at Alviteq." };

export default function CareersPage() {
  return <><PageHero eyebrow="Careers" title="Help build software worthy of trust." intro="We value thoughtful builders who care about product quality, privacy, and the details people experience." />
    <section className="section container"><div className="split"><div><p className="eyebrow">Working principles</p><h2>Small details. Serious responsibility.</h2><p className="lead">Our work spans product design, Flutter engineering, native platform integrations, encrypted storage, document processing, accessibility, and quality assurance.</p></div><div className="role-list"><div><strong>Engineering</strong><span>Flutter, native platforms, security, data, and quality</span></div><div><strong>Product & design</strong><span>Clear systems for complex, private information</span></div><div><strong>Security & privacy</strong><span>Threat modeling, review, testing, and communication</span></div></div></div></section>
    <section className="section tint"><div className="container"><div className="contact-card"><p className="eyebrow">Current openings</p><h2>No public roles are listed today.</h2><p className="lead">If Alviteq’s mission aligns with your work, you can still introduce yourself. Include your background, portfolio or code samples, and the problems you most want to solve.</p><a className="button" href="mailto:careers@alviteq.com?subject=Career%20introduction">careers@alviteq.com</a></div></div></section>
  </>;
}
