import {
  PRIVACY_TITLE,
  PRIVACY_UPDATED,
  PRIVACY_EFFECTIVE,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
} from "./messages";
import styles from "./page.module.css";

export default function Privacy() {
  return (
    <div className="pageWrapper">
      <div className="gridBg" />

      <article className={styles.content}>
        <h1 className={styles.title}>{PRIVACY_TITLE}</h1>
        <p className={styles.updated}>{PRIVACY_UPDATED}</p>

        <p className={styles.intro}>{PRIVACY_INTRO}</p>

        {PRIVACY_SECTIONS.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.subsections?.map((sub) => (
              <div key={sub.title}>
                <h3 className={styles.subsectionTitle}>{sub.title}</h3>
                <ul className={styles.list}>
                  {sub.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

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

            {section.afterItems?.map((p) => (
              <p key={p} className={styles.paragraph}>{p}</p>
            ))}

            {section.footnote && (
              <p className={styles.paragraph}>
                {section.footnote.text}{" "}
                <a
                  href={section.footnote.linkHref}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.footnote.linkText}
                </a>
                .
              </p>
            )}

            {section.contact && (
              <p className={styles.paragraph}>
                {section.contact.company}
                <br />
                Email:{" "}
                <a href={`mailto:${section.contact.email}`} className={styles.link}>
                  {section.contact.email}
                </a>
              </p>
            )}
          </section>
        ))}

        <hr className={styles.divider} />

        <p className={styles.footer}>{PRIVACY_EFFECTIVE}</p>
      </article>
    </div>
  );
}
