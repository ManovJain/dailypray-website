import {
  CHANGELOG_LABEL,
  CHANGELOG_TITLE,
  CHANGELOG_SUBTITLE,
  CHANGELOG_VERSIONS,
} from "./messages";
import styles from "./page.module.css";

export default function Changelog() {
  return (
    <div className="pageWrapper">
      <div className="gridBg" />

      <section className={`${styles.hero} fade-in`}>
        <p className={styles.label}>{CHANGELOG_LABEL}</p>
        <h1 className={styles.title}>{CHANGELOG_TITLE}</h1>
        <p className={styles.subtitle}>{CHANGELOG_SUBTITLE}</p>
      </section>

      <div className={styles.versions}>
        {CHANGELOG_VERSIONS.map((release, i) => (
          <section key={release.version} className={`${styles.version} fade-in`}>
            <div className={styles.versionHeader}>
              <span className={styles.versionNumber}>{release.version}</span>
              <span className={styles.versionLabel}>{release.label}</span>
            </div>
            <ul className={styles.versionItems}>
              {release.items.map((item) => (
                <li key={item} className={styles.versionItem}>{item}</li>
              ))}
            </ul>
            {i < CHANGELOG_VERSIONS.length - 1 && (
              <hr className={styles.versionDivider} />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
