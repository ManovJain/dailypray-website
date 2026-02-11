"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <nav className={styles.nav}>
        <a href="/" className={styles.navLogo}>DailyPray</a>
        <div className={styles.navLinks}>
          <a href="/about" className={styles.navLink}>About</a>
          <a href="/privacy" className={styles.navLink}>Privacy Policy</a>
          <a href="#" className={styles.navLink}>Changelog</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </div>
      </nav>

      <div className={styles.content}>
        <h1 className={`${styles.title} fade-in`}>Get in touch</h1>
        <p className={`${styles.subtitle} fade-in fade-in--delay-1`}>
          Questions, feedback, or prayer requests — we&rsquo;d love to hear from
          you.
        </p>

        {status === "sent" ? (
          <div className={`${styles.success} fade-in`}>
            Thank you for reaching out. We&rsquo;ll get back to you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} fade-in fade-in--delay-2`}
          >
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                placeholder="Your name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder="How can we help?"
              />
            </div>

            {status === "error" && (
              <p className={styles.error}>{errorMsg}</p>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
