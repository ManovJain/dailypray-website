import type { Metadata } from "next";
import {
  TERMS_TITLE,
  TERMS_UPDATED,
  TERMS_EFFECTIVE,
  TERMS_INTRO,
  TERMS_SECTIONS,
} from "./messages";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "DailyPray terms of use — subscription details, acceptable use, and service terms for the Christian screen time app.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <div className="pageWrapper">
      <div className="gridBg" />

      <article className={styles.content}>
        <h1 className={styles.title}>{TERMS_TITLE}</h1>
        <p className={styles.updated}>{TERMS_UPDATED}</p>

        <p className={styles.intro}>{TERMS_INTRO}</p>

        {TERMS_SECTIONS.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.paragraphs?.map((p) => (
              <p key={p} className={styles.paragraph}>{p}</p>
            ))}

            {section.items && (
              <ul className={styles.list}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.subsections?.map((sub) => (
              <div key={sub.title}>
                <h3 className={styles.subsectionTitle}>{sub.title}</h3>
                {sub.paragraphs.map((p) => (
                  <p key={p} className={styles.paragraph}>{p}</p>
                ))}
              </div>
            ))}

            {section.link && (
              <p className={styles.paragraph}>
                <a href={section.link.href} className={styles.link}>
                  {section.link.text}
                </a>
              </p>
            )}

            {section.contact && (
              <p className={styles.paragraph}>
                {section.contact.company}
                <br />
                <a href={section.contact.linkHref} className={styles.link}>
                  {section.contact.linkText}
                </a>
              </p>
            )}
          </section>
        ))}

        <hr className={styles.divider} />

        <p className={styles.footer}>{TERMS_EFFECTIVE}</p>
      </article>
    </div>
  );
}
