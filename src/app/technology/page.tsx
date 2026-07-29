import type { Metadata } from "next";
import { Cta, FeatureGrid, PageHero } from "@/components/page-elements";

export const metadata: Metadata = { title: "Technology", description: "Learn about Alviteq's local-first security and product architecture." };

export default function TechnologyPage() {
  return <><PageHero eyebrow="Technology" title="Security is a system, not a feature label." intro="OwnKeep combines authenticated encryption, SQLCipher metadata storage, device-protected key handling, and deterministic local processing." />
    <section className="section container"><div className="architecture"><div><span>01</span><h3>Capture</h3><p>User-selected files enter an approved local workflow.</p></div><b>→</b><div><span>02</span><h3>Preserve</h3><p>The immutable original is encrypted before organization.</p></div><b>→</b><div><span>03</span><h3>Understand</h3><p>Supported OCR and extraction run locally for review.</p></div><b>→</b><div><span>04</span><h3>Use</h3><p>Search, reminders, links, and export remain user-directed.</p></div></div></section>
    <section className="section tint"><div className="container"><FeatureGrid items={[
      ["A","Authenticated encryption","Encrypted objects are authenticated so corruption or modification fails closed."],
      ["D","Database protection","Structured metadata, tags, extracted fields, reminders, and graph records stay in SQLCipher."],
      ["K","Key separation","Recovery credentials and convenient device unlock serve different roles."],
      ["O","Offline processing","Core classification, OCR integration, extraction, and search avoid mandatory cloud calls."],
      ["B","Backup verification","Portable encrypted archives are verified before restore activates a replacement vault."],
      ["P","Plaintext discipline","Decrypted originals use short-lived private leases and explicit export boundaries."]
    ]} /></div></section>
    <section className="section container"><div className="page-copy compact"><h2>Transparent limitations matter</h2><p>Hardware-backed protection, biometrics, camera capture, scanners, OCR providers, and notification behavior vary by operating system and device. OwnKeep is designed to report those limits rather than represent unavailable capability as successful.</p><h2>Review before authority</h2><p>Machine-extracted details are suggestions. The product keeps the original as evidence and asks the user to verify important fields before they become trusted life information.</p></div><Cta title="Discuss the architecture" body="For security, integration, or platform questions, contact the Alviteq team." /></section>
  </>;
}
