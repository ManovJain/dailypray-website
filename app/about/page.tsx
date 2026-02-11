import Image from "next/image";
import { IPhoneFrame } from "../components/IPhoneMockup";
import styles from "./page.module.css";

const features = [
  {
    label: "Onboarding",
    title: "Pause before you scroll.",
    description:
      "DailyPray uses Screen Time to gently remind you to pause and pray when you open selected apps. A moment of intention before the noise.",
    src: "/screenshots/onboarding.jpeg",
    alt: "DailyPray onboarding screen",
  },
  {
    label: "Prayer",
    title: "Daily prayers & devotions.",
    description:
      "Start each day with curated prayers, scripture, and beautiful illustrations. A quiet moment of reflection to anchor your soul.",
    src: "/screenshots/prayer.png",
    alt: "DailyPray prayer screen",
  },
  {
    label: "Journal",
    title: "Your spiritual journal.",
    description:
      "Track your journey with guided journaling — gratitude, presence, emotions, challenges, and resolve. Watch your faith grow over time.",
    src: "/screenshots/journal.png",
    alt: "DailyPray journal screen",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <a href="/" className={styles.navLogo}>DailyPray</a>
        <div className={styles.navLinks}>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/privacy" className={styles.navLink}>Privacy Policy</a>
          <a href="#" className={styles.navLink}>Changelog</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className={`${styles.hero} fade-in`}>
        <h1 className={styles.heroTitle}>About DailyPray</h1>
        <p className={styles.heroSubtitle}>
          A gentle daily companion for prayer, scripture, and spiritual
          reflection — designed to help you build a deeper relationship with God.
        </p>
      </section>

      {/* Feature sections */}
      <div className={styles.features}>
        {features.map((feature, i) => (
          <section
            key={feature.label}
            className={`${styles.feature} ${
              i % 2 === 1 ? styles.featureReverse : ""
            } fade-in`}
          >
            {/* Phone */}
            <div className={styles.featurePhone}>
              <div className={styles.featurePhoneScreen}>
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <IPhoneFrame className={styles.featurePhoneFrame} />
            </div>

            {/* Text */}
            <div className={styles.featureText}>
              <p className={styles.featureLabel}>{feature.label}</p>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
