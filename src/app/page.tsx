import Link from "next/link";

const pillars = [
  ["01", "Private by design", "Products are designed to minimize data exposure and keep people in control of what leaves their devices."],
  ["02", "Useful offline", "Core experiences remain dependable when connectivity is unavailable, unreliable, or intentionally disabled."],
  ["03", "Built for real life", "Clear workflows turn scattered documents and details into information people can understand and act on."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid container">
          <div>
            <p className="eyebrow">Human-centered software</p>
            <h1>Technology that works for you.</h1>
            <p className="lead">Alviteq creates private, resilient products for the information that matters most—without making people surrender control of their digital lives.</p>
            <div className="actions">
              <Link className="button" href="/products">Explore our products</Link>
              <Link className="button secondary" href="/about">Meet Alviteq</Link>
            </div>
            <div className="trust-row"><span>Privacy-first</span><span>Offline-capable</span><span>Cross-platform</span></div>
          </div>
          <div className="vault-visual" aria-label="Secure digital vault illustration">
            <div className="float-card one">Encrypted locally</div>
            <div className="vault" />
            <div className="float-card two">Your data. Your control.</div>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <p className="eyebrow">How we build</p>
          <h2>Trust should be part of the architecture.</h2>
          <p className="lead">We build products around clear ownership, understandable behavior, and protection that does not disappear when the network does.</p>
        </div>
        <div className="grid-3">
          {pillars.map(([icon, title, copy]) => <article className="card" key={title}><div className="card-icon">{icon}</div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
      <section className="section tint">
        <div className="split container">
          <div>
            <p className="eyebrow">Introducing OwnKeep</p>
            <h2>Your life, organized inside an encrypted vault.</h2>
            <p className="lead">OwnKeep helps people securely collect documents, extract useful details, manage reminders, and connect records to the people, places, and things in their lives.</p>
            <Link className="button" href="/ownkeep">Discover OwnKeep</Link>
          </div>
          <div className="stat-panel">
            <div className="stats">
              <div className="stat"><strong>Local</strong><span>Encryption and processing</span></div>
              <div className="stat"><strong>Offline</strong><span>Core functionality</span></div>
              <div className="stat"><strong>Portable</strong><span>Encrypted backups</span></div>
              <div className="stat"><strong>Yours</strong><span>Explicit export control</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
