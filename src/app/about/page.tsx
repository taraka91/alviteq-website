import type { Metadata } from "next";
import { Cta, FeatureGrid, PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "About", description: "Meet Alviteq and the principles behind our privacy-first products." };

export default function AboutPage() {
  return <><PageHero eyebrow="About Alviteq" title="Technology should earn a place in your life." intro="Alviteq is a product technology company building private, resilient software around the information people value most." />
    <section className="section container"><div className="split"><div><p className="eyebrow">Our purpose</p><h2>Make powerful software feel trustworthy.</h2><p className="lead">Important information is often scattered across files, inboxes, devices, and services. We create products that bring it together while preserving clear human ownership.</p><p>Our work joins product design, security engineering, and local intelligence from the beginning—not as separate layers added at the end.</p></div><div className="quote-panel">“The best private technology does more than protect information. It helps people understand and use it without giving up control.”</div></div></section>
    <section className="section tint"><div className="container"><div className="section-head"><p className="eyebrow">How we work</p><h2>Principles that guide the product.</h2></div><FeatureGrid items={[
      ["01","Human control","Suggestions remain reviewable, exports stay explicit, and recovery choices are explained clearly."],
      ["02","Local capability","Essential workflows should remain useful without depending on a permanent cloud connection."],
      ["03","Responsible scope","We avoid claims the product cannot support and treat limitations as part of honest design."],
      ["04","Cross-platform quality","Mobile and desktop experiences share one product model while respecting each operating system."],
      ["05","Durable ownership","Portable encrypted backups help users retain access beyond one installation or device."],
      ["06","Continuous verification","Security, functionality, accessibility, and visual quality are tested as the product evolves."]
    ]} /></div></section>
    <section className="section container"><Cta title="Interested in Alviteq?" body="Talk with us about OwnKeep, partnerships, product feedback, or future opportunities." /></section>
  </>;
}
