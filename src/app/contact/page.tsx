import type { Metadata } from "next";
import { PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "Contact", description: "Contact Alviteq about the company, product support, privacy, or security." };

const contacts = [
  ["General","Company, product, partnership, and media enquiries.","hello@alviteq.com"],
  ["Product support","Help and feedback for Alviteq products.","support@alviteq.com"],
  ["Privacy","Questions about privacy and personal information.","privacy@alviteq.com"],
  ["Security","Responsible reports about product or website security.","security@alviteq.com"],
];

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Start a useful conversation." intro="Choose the closest topic and include enough context for the right response." />
    <section className="section container"><div className="contact-grid four">{contacts.map(([title,body,email])=><article className="contact-card" key={email}><h2>{title}</h2><p>{body}</p><a href={`mailto:${email}`}>{email} →</a></article>)}</div><div className="response-note"><strong>Protect sensitive information</strong><p>Do not email passwords, recovery passphrases, identity documents, private records, or other sensitive product data. Alviteq will never ask for an OwnKeep recovery passphrase.</p></div></section>
  </>;
}
