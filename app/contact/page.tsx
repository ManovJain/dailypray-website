"use client";

import { useState } from "react";
import {
  CONTACT_TITLE,
  CONTACT_SUBTITLE,
  CONTACT_FORM,
  CONTACT_BUTTON_SEND,
  CONTACT_BUTTON_SENDING,
  CONTACT_SUCCESS,
  CONTACT_ERROR_FALLBACK,
} from "./messages";
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
        err instanceof Error ? err.message : CONTACT_ERROR_FALLBACK
      );
    }
  }

  return (
    <div className="pageWrapper">
      <div className="gridBg" />

      <div className={styles.content}>
        <h1 className={`${styles.title} fade-in`}>{CONTACT_TITLE}</h1>
        <p className={`${styles.subtitle} fade-in fade-in--delay-1`}>
          {CONTACT_SUBTITLE}
        </p>

        {status === "sent" ? (
          <div className={`${styles.success} fade-in`}>
            {CONTACT_SUCCESS}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} fade-in fade-in--delay-2`}
          >
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                {CONTACT_FORM.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                placeholder={CONTACT_FORM.name.placeholder}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                {CONTACT_FORM.email.label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                placeholder={CONTACT_FORM.email.placeholder}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                {CONTACT_FORM.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className={styles.textarea}
                placeholder={CONTACT_FORM.message.placeholder}
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
              {status === "sending" ? CONTACT_BUTTON_SENDING : CONTACT_BUTTON_SEND}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
