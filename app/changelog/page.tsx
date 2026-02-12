import { CHANGELOG_LABEL, CHANGELOG_TITLE, CHANGELOG_SUBTITLE } from "./messages";
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
    </div>
  );
}
