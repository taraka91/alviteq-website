import Image from "next/image";
import type { Metadata } from "next";
import { Cta, FeatureGrid, PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "Products", description: "Explore privacy-first products from Alviteq." };

export default function ProductsPage() {
  return <><PageHero eyebrow="Products" title="Focused tools for information that matters." intro="Alviteq products combine careful interaction design, local intelligence, and privacy-conscious engineering." action={{label:"Explore OwnKeep",href:"/ownkeep"}} />
    <section className="section container"><div className="product-showcase"><div><Image className="product-icon" src="/images/ownkeep-icon.png" width={150} height={150} alt="OwnKeep application icon" /><p className="eyebrow">Available product</p><h2>OwnKeep</h2><p className="lead">An encrypted personal life vault for documents, extracted details, reminders, connected records, and passwords.</p><div className="platform-list"><span>Android</span><span>iOS</span><span>macOS</span><span>Windows</span><span>Linux</span></div></div><Image className="vault-art" src="/images/ownkeep-vault.png" width={750} height={1000} alt="OwnKeep encrypted vault illustration" /></div></section>
    <section className="section tint"><div className="container"><div className="section-head"><p className="eyebrow">The product standard</p><h2>Every Alviteq product should be:</h2></div><FeatureGrid items={[
      ["✓","Understandable","Clear states, honest notices, and workflows that explain what happened."],
      ["⌁","Resilient","Useful across devices and during periods of limited or unavailable connectivity."],
      ["◇","Private","Designed to reduce unnecessary data movement and protect local information."]
    ]} /></div></section>
    <section className="section container"><Cta title="Have a product question?" body="We welcome thoughtful feedback from future users, collaborators, and partners." /></section>
  </>;
}
