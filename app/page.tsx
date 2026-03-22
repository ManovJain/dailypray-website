import { HandsBackground } from "./components/HandsBackground";
import { IPhoneMockup, IPhoneCarousel } from "./components/IPhoneMockup";
import { screenshots } from "./components/IPhoneMockup/messages";
import {
  HOME_TITLE,
  HOME_SUBTITLE,
  HOME_CTA,
  HOME_CTA_URL,
} from "./messages";
import { SITE_DESCRIPTION, SITE_URL } from "./metadata";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DailyPray",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "3.99",
    offerCount: "3",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background layers */}
      <div className={styles.gridBg} />
      <div className={styles.glowBg} />

      {/* Hand of God background */}
      <HandsBackground />

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={`${styles.title} fade-in ${styles.titleAnimated}`}>{HOME_TITLE}</h1>

          <p className={`${styles.subtitle} fade-in ${styles.subtitleAnimated}`}>
            {HOME_SUBTITLE}
          </p>

          <div className={`${styles.ctas} fade-in ${styles.ctaAnimated}`}>
            <a
              href={HOME_CTA_URL}
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {HOME_CTA}
            </a>
          </div>
        </section>

        {/* Phone mockups */}
        <section className={`${styles.phones} ${styles.phonesAnimated}`}>
          <IPhoneMockup
            className={`${styles.phoneLeft} ${styles.desktopOnly}`}
            screenshotSrc={screenshots[1].src}
            alt={screenshots[1].alt}
          />
          <IPhoneMockup
            className={`${styles.phoneCenter} ${styles.desktopOnly}`}
            screenshotSrc={screenshots[0].src}
            alt={screenshots[0].alt}
          />
          <IPhoneMockup
            className={`${styles.phoneRight} ${styles.desktopOnly}`}
            screenshotSrc={screenshots[2].src}
            alt={screenshots[2].alt}
          />

          <IPhoneCarousel className={`${styles.phoneCenter} ${styles.mobileOnly}`} />
        </section>
      </main>
    </div>
  );
}
