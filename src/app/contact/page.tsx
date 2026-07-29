import type { Metadata } from "next";
import { PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "Contact", description: "Contact Alviteq about products, partnerships, support, or careers." };

const contacts = [
  ["General enquiries","Questions about Alviteq and its products.","hello@alviteq.com"],
  ["OwnKeep","Product feedback and testing interest.","ownkeep@alviteq.com"],
  ["Careers","Introduce your experience and interests.","careers@alviteq.com"],
];

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Start a useful conversation." intro="Choose the closest topic and include enough context for the right response." />
    <section className="section container"><div className="contact-grid">{contacts.map(([title,body,email])=><article className="contact-card" key={email}><h2>{title}</h2><p>{body}</p><a href={`mailto:${email}`}>{email} →</a></article>)}</div><div className="response-note"><strong>Privacy note</strong><p>Please do not email passwords, recovery passphrases, private documents, or other sensitive vault content. Alviteq will never ask for your OwnKeep recovery passphrase.</p></div></section>
  </>;
}
