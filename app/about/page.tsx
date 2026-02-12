import Image from "next/image";
import { IPhoneFrame } from "../components/IPhoneMockup";
import { ABOUT_HERO_TITLE, ABOUT_HERO_SUBTITLE, ABOUT_FEATURES, ABOUT_FOOTER_AUTHOR, ABOUT_FOOTER_URL } from "./messages";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className="pageWrapper">
      <div className="gridBg" />

      {/* Hero */}
      <section className={`${styles.hero} fade-in`}>
        <h1 className={styles.heroTitle}>{ABOUT_HERO_TITLE}</h1>
        <p className={styles.heroSubtitle}>{ABOUT_HERO_SUBTITLE}</p>
      </section>

      {/* Feature sections */}
      <div className={styles.features}>
        {ABOUT_FEATURES.map((feature, i) => (
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
                  sizes="(max-width: 768px) 240px, 300px"
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

      <footer className={styles.footer}>
        created by{" "}
        <a href={ABOUT_FOOTER_URL} target="_blank" rel="noopener noreferrer">
          {ABOUT_FOOTER_AUTHOR}
        </a>
      </footer>
    </div>
  );
}
