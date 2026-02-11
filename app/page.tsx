"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IPhoneFrame } from "./components/IPhoneMockup";
import styles from "./page.module.css";

const screenshots = [
  { src: "/screenshots/onboarding.jpeg", alt: "DailyPray onboarding screen" },
  { src: "/screenshots/prayer.png", alt: "DailyPray prayer screen" },
  { src: "/screenshots/journal.png", alt: "DailyPray journal screen" },
];

function IPhoneMockup({
  className,
  screenshotSrc,
  alt,
}: {
  className?: string;
  screenshotSrc: string;
  alt: string;
}) {
  return (
    <div className={`${styles.iphone} ${className || ""}`}>
      <div className={styles.iphoneScreen}>
        <Image
          src={screenshotSrc}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <IPhoneFrame className={styles.iphoneFrame} />
    </div>
  );
}

function IPhoneCarousel({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.iphone} ${className || ""}`}>
      <div className={styles.iphoneScreen}>
        {screenshots.map((shot, i) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            fill
            style={{ objectFit: "cover" }}
            className={`${styles.carouselImage} ${
              i === activeIndex ? styles.carouselImageActive : ""
            }`}
            priority={i === 0}
          />
        ))}
      </div>
      <IPhoneFrame className={styles.iphoneFrame} />
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Background layers */}
      <div className={styles.gridBg} />
      <div className={styles.glowBg} />

      {/* Hand of God background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className={styles.handsContainer}>
        <div className={styles.handLeftWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hand1.svg" alt="" className={styles.handLeftImg} />
        </div>
        <div className={styles.handRightWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hand2.svg" alt="" className={styles.handRightImg} />
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <span className={styles.navLogo}>DailyPray</span>
        <div className={styles.navLinks}>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/privacy" className={styles.navLink}>Privacy Policy</a>
          <a href="#" className={styles.navLink}>Changelog</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={`${styles.title} fade-in`}>DailyPray</h1>

          <p className={`${styles.subtitle} fade-in fade-in--delay-1`}>
            A gentle daily companion for prayer, scripture, and spiritual
            reflection.
          </p>

          <div className={`${styles.ctas} fade-in fade-in--delay-2`}>
            <a
              href="#"
              className={styles.downloadBtn}
              aria-label="Download iOS"
            >
              DOWNLOAD iOS
            </a>
          </div>
        </section>

        {/* Phone mockups — desktop: 3 static, mobile: 1 carousel */}
        <section className={`${styles.phones} fade-in fade-in--delay-3`}>
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
