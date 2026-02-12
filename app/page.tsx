"use client";

import { useState } from "react";
import { HandsBackground } from "./components/HandsBackground";
import { IPhoneMockup, IPhoneCarousel } from "./components/IPhoneMockup";
import { screenshots } from "./components/IPhoneMockup/messages";
import {
  HOME_TITLE,
  HOME_SUBTITLE,
  HOME_CTA,
  HOME_WAITLIST_TITLE,
  HOME_WAITLIST_SUBTITLE,
  HOME_WAITLIST_PLACEHOLDER,
  HOME_WAITLIST_SUBMIT,
  HOME_WAITLIST_SUBMITTING,
  HOME_WAITLIST_SUCCESS,
  GOOGLE_FORM_URL,
  GOOGLE_FORM_EMAIL_FIELD,
} from "./messages";
import styles from "./page.module.css";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIL_FIELD, email);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setFormStatus("success");
    } catch {
      setFormStatus("success");
    }
  }

  function closeModal() {
    setModalOpen(false);
    setEmail("");
    setFormStatus("idle");
  }

  return (
    <div className={styles.page}>
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
            <button
              className={styles.downloadBtn}
              onClick={() => setModalOpen(true)}
            >
              {HOME_CTA}
            </button>
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

      {/* Waitlist Modal */}
      <div
        className={`${styles.modalOverlay} ${modalOpen ? styles.modalOverlayOpen : ""}`}
        onClick={closeModal}
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalClose} onClick={closeModal} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {formStatus === "success" ? (
            <div className={styles.modalBody}>
              <p className={styles.modalSuccess}>{HOME_WAITLIST_SUCCESS}</p>
            </div>
          ) : (
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{HOME_WAITLIST_TITLE}</h2>
              <p className={styles.modalSubtitle}>{HOME_WAITLIST_SUBTITLE}</p>
              <form onSubmit={handleWaitlistSubmit} className={styles.modalForm}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={HOME_WAITLIST_PLACEHOLDER}
                  className={styles.modalInput}
                />
                <button
                  type="submit"
                  className={styles.modalBtn}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? HOME_WAITLIST_SUBMITTING : HOME_WAITLIST_SUBMIT}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
