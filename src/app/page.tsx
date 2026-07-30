import Image from "next/image";
import Link from "next/link";

const productPrinciples = [
  ["01", "Useful", "Technology should solve a clear problem and create value people can feel."],
  ["02", "Thoughtful", "Complex engineering should result in simple, understandable experiences."],
  ["03", "Dependable", "Products should earn and keep a place in people’s everyday lives."],
];

const engineeringPrinciples = [
  ["Human first", "Start with the problem, the person, and the context—not the technology."],
  ["Intelligence with purpose", "Use AI where it creates meaningful value, never simply to add a feature label."],
  ["Privacy & security", "Design protection into each product from the beginning."],
  ["Built to last", "Prefer maintainable engineering and long-term usefulness over short-lived trends."],
];

const capabilities = ["Mobile", "Desktop", "Web", "Artificial Intelligence", "On-device Intelligence", "Cloud", "Offline-first Systems", "Security"];

export default function Home() {
  return <>
    <section className="hero corporate-hero">
      <div className="hero-grid container">
        <div>
          <p className="eyebrow">Alviteq · Independent technology company</p>
          <h1>Technology built for everyday life.</h1>
          <p className="lead">Alviteq builds intelligent, dependable digital products designed to make everyday tasks simpler.</p>
          <div className="actions">
            <Link className="button" href="/products">Explore our products</Link>
            <Link className="button secondary" href="/about">About Alviteq</Link>
          </div>
          <p className="brand-promise">Technology you can trust.</p>
        </div>
        <div className="company-mark-panel" aria-label="Alviteq company mark">
          <Image src="/brand/official/alviteq-icon.svg" alt="" width={512} height={512} priority />
          <span>Thoughtful products.<br />Real-world value.</span>
        </div>
      </div>
    </section>

    <section className="section container">
      <div className="section-head">
        <p className="eyebrow">What we&apos;re building</p>
        <h2>We build technology around real problems.</h2>
        <p className="lead">From personal productivity and digital organization to intelligent software and connected experiences, Alviteq creates products designed to be useful beyond the novelty of technology itself.</p>
      </div>
      <div className="grid-3">
        {productPrinciples.map(([icon, title, body]) => <article className="card" key={title}><div className="card-icon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>

    <section className="section tint">
      <div className="container">
        <div className="section-head"><p className="eyebrow">Products from Alviteq</p><h2>Meet OwnKeep.</h2></div>
        <div className="product-showcase home-product">
          <div>
            <Image className="product-icon" src="/images/ownkeep-icon.png" width={150} height={150} alt="OwnKeep application icon" />
            <p className="eyebrow">OwnKeep · An Alviteq product</p>
            <h2>Your important information. Organized. Private. Available.</h2>
            <p className="lead">A private digital space for documents, records, reminders, passwords, and the information that matters in everyday life.</p>
            <div className="platform-list"><span>Offline-first</span><span>Local encryption</span><span>Document intelligence</span><span>Cross-platform</span><span>Encrypted backups</span></div>
            <Link className="button" href="/products/ownkeep">Explore OwnKeep</Link>
          </div>
          <Image className="vault-art" src="/images/ownkeep-vault.png" width={750} height={1000} alt="OwnKeep encrypted vault illustration" />
        </div>
      </div>
    </section>

    <section className="section container">
      <div className="section-head"><p className="eyebrow">How we think</p><h2>Capability guided by purpose.</h2></div>
      <div className="principle-grid">
        {engineeringPrinciples.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
    </section>

    <section className="section tint">
      <div className="split container">
        <div><p className="eyebrow">Engineering without boundaries</p><h2>Technology chosen for the problem.</h2><p className="lead">We work across platforms and technical approaches, selecting what helps a product become simpler, more capable, and more dependable.</p><Link className="button secondary" href="/technology">Our technology philosophy</Link></div>
        <div className="capability-cloud">{capabilities.map(item => <span key={item}>{item}</span>)}</div>
      </div>
    </section>

    <section className="section container">
      <div className="vision-panel"><p className="eyebrow">Building for what comes next</p><h2>More capable should not mean more complicated.</h2><p>Alviteq is being built around a simple idea: technology should become more capable without becoming harder to use. We are building products intended to remain useful as devices, platforms, and intelligent systems continue to evolve.</p><Link className="button" href="/products">See what we&apos;re building</Link></div>
    </section>
  </>;
}
