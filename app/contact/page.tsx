import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | Emil Kristensen",
  description: "Get in touch with Emil Kristensen — available for freelance, full-time, and collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="contact-page">
        <div className="contact-page-inner">
          <p className="section-label" style={{ marginBottom: 20 }}>Contact</p>
          <h1 className="contact-page-heading" style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
            Let&apos;s build<br />something.
          </h1>
          <p className="contact-page-sub">
            I&apos;m currently available for freelance projects, full-time roles, and interesting collaborations.
            Whether you have a specific brief or just want to explore an idea — I&apos;d love to hear from you.
          </p>

          <div className="contact-page-cta">
            <Button
              asChild
              className="btn btn-brand h-auto gap-2 rounded-lg text-[15px]"
              style={{ padding: "14px 28px" }}
            >
              <a href="mailto:emilck@live.dk">
                Send me an email
                <ArrowUpRight className="size-[15px]" strokeWidth={2.5} />
              </a>
            </Button>
          </div>

          <div className="contact-page-links">
            <a href="mailto:emilck@live.dk" className="contact-page-link">
              <Mail className="size-4 shrink-0" strokeWidth={1.5} />
              <span>emilck@live.dk</span>
            </a>
            <a
              href="https://linkedin.com/in/emilkristensen"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-link"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 6.5v5M4 4.5v.01M7 11.5V8.5c0-1.1.9-2 2-2s2 .9 2 2v3M7 6.5v5"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/emil00y1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-page-link"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                <path d="M8 1.5a6.5 6.5 0 00-2.056 12.675c.325.06.444-.141.444-.313v-1.094c-1.806.393-2.187-.875-2.187-.875-.295-.75-.72-.95-.72-.95-.588-.402.044-.394.044-.394.65.046 1 .669 1 .669.578.994 1.519.706 1.888.54.059-.42.226-.706.41-.869-1.443-.163-2.96-.721-2.96-3.206 0-.709.253-1.288.669-1.741-.067-.164-.29-.824.063-1.719 0 0 .546-.174 1.787.667A6.22 6.22 0 018 5.906c.55.003 1.106.075 1.625.219 1.24-.841 1.785-.667 1.785-.667.356.895.132 1.555.065 1.719.418.453.669 1.032.669 1.741 0 2.492-1.52 3.04-2.966 3.2.234.2.443.597.443 1.204v1.784c0 .174.118.376.447.313A6.5 6.5 0 008 1.5z"
                  fill="currentColor" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
