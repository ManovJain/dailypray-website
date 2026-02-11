import styles from "./page.module.css";

export default function Privacy() {
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

      <article className={styles.content}>
        <h1 className={styles.title}>Daily Pray — Privacy Policy</h1>
        <p className={styles.updated}>Last updated: February 10, 2026</p>

        <p className={styles.intro}>
          Anim LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
          operates the Daily Pray mobile application (the &ldquo;App&rdquo;).
          This Privacy Policy explains how we collect, use, and protect your
          information when you use the App. By using Daily Pray, you agree to the
          practices described in this Privacy Policy.
        </p>

        {/* 1 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

          <h3 className={styles.subsectionTitle}>
            1.1 Information You Provide
          </h3>
          <ul className={styles.list}>
            <li>First name (optional, entered during onboarding)</li>
            <li>Spiritual goals selected during onboarding</li>
            <li>
              Daily Examen journal entries, including written reflections and
              selected emotions
            </li>
            <li>Bible translation preference</li>
            <li>App selection for screen time management</li>
          </ul>

          <h3 className={styles.subsectionTitle}>
            1.2 Automatically Collected Information
          </h3>
          <ul className={styles.list}>
            <li>
              Prayer streak and activity dates (used to track your daily habit)
            </li>
            <li>Subscription status (managed by Apple)</li>
          </ul>

          <h3 className={styles.subsectionTitle}>
            1.3 Information We Do NOT Collect
          </h3>
          <ul className={styles.list}>
            <li>
              We do not collect your email address, phone number, or physical
              address.
            </li>
            <li>We do not collect location data.</li>
            <li>
              We do not collect device identifiers or advertising IDs.
            </li>
            <li>
              We do not use analytics, tracking, or third-party SDKs.
            </li>
            <li>
              We do not access the content of your blocked apps or browsing
              history.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. How Your Data Is Stored</h2>
          <p className={styles.paragraph}>
            All personal data — including your name, journal entries, emotions,
            goals, streak history, and app preferences — is stored locally on
            your device using Apple&rsquo;s on-device storage (UserDefaults and
            local files within the App Group container). Your data is never
            transmitted to our servers or any third party.
          </p>
          <p className={styles.paragraph}>
            We do not operate servers or databases that store your personal
            information.
          </p>
        </section>

        {/* 3 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            3. Screen Time and Family Controls
          </h2>
          <p className={styles.paragraph}>
            Daily Pray uses Apple&rsquo;s Screen Time API (FamilyControls,
            ManagedSettings) to allow you to voluntarily shield selected apps
            until you complete your daily prayer reflection. This feature is
            entirely self-directed:
          </p>
          <ul className={styles.list}>
            <li>You choose which apps to shield.</li>
            <li>
              You choose whether to enable adult content filtering.
            </li>
            <li>
              We do not monitor, log, or transmit any information about your app
              usage, screen time, or the apps you select.
            </li>
            <li>
              All Screen Time configuration data is stored locally on your
              device.
            </li>
          </ul>
          <p className={styles.paragraph}>
            Apple processes Screen Time data according to{" "}
            <a
              href="https://www.apple.com/privacy/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 4 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            4. Subscriptions and Payments
          </h2>
          <p className={styles.paragraph}>
            Daily Pray offers auto-renewable subscriptions managed entirely by
            Apple through the App Store. We do not collect, process, or store any
            payment information such as credit card numbers or billing addresses.
            All payment processing, subscription management, and receipt
            validation is handled by Apple.
          </p>
          <p className={styles.paragraph}>
            For details on how Apple handles payment data, see{" "}
            <a
              href="https://www.apple.com/privacy/"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* 5 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Notifications</h2>
          <p className={styles.paragraph}>
            If you grant notification permission, Daily Pray may send local
            notifications (e.g., daily prayer reminders, prompts from the shield
            screen). These notifications are generated on your device. We do not
            use push notification services, and no notification data is sent to
            external servers.
          </p>
        </section>

        {/* 6 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Sharing</h2>
          <p className={styles.paragraph}>
            We do not sell, rent, trade, or otherwise share your personal data
            with any third party. Because all data is stored locally on your
            device, we have no access to it.
          </p>
        </section>

        {/* 7 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            7. Data Retention and Deletion
          </h2>
          <p className={styles.paragraph}>
            Your data remains on your device for as long as the App is installed.
            You can delete all of your data at any time by:
          </p>
          <ul className={styles.list}>
            <li>
              Using the &ldquo;Redo Onboarding&rdquo; option in Settings (resets
              name, goals, and preferences)
            </li>
            <li>Deleting individual journal entries within the App</li>
            <li>
              Uninstalling the App (removes all locally stored data)
            </li>
          </ul>
          <p className={styles.paragraph}>
            We do not retain any data after the App is uninstalled.
          </p>
        </section>

        {/* 8 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            8. Children&rsquo;s Privacy
          </h2>
          <p className={styles.paragraph}>
            Daily Pray is not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            The App&rsquo;s use of the Family Controls framework is for
            individual, self-directed use only and is not designed as a parental
            control tool.
          </p>
        </section>

        {/* 9 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Security</h2>
          <p className={styles.paragraph}>
            Because all data is stored locally on your device, your data is
            protected by your device&rsquo;s built-in security features,
            including device passcode, Face ID, Touch ID, and Apple&rsquo;s
            hardware encryption. We recommend keeping your device software up to
            date.
          </p>
        </section>

        {/* 10 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            10. Changes to This Privacy Policy
          </h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. Any changes will
            be reflected by updating the &ldquo;Last updated&rdquo; date at the
            top of this page. We encourage you to review this Privacy Policy
            periodically. Continued use of the App after changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* 11 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Your Rights</h2>
          <p className={styles.paragraph}>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className={styles.list}>
            <li>
              Access the personal data stored about you (all data is visible
              within the App)
            </li>
            <li>Delete your personal data (see Section 7)</li>
            <li>
              Opt out of data collection (we do not collect data beyond what is
              stored locally)
            </li>
          </ul>
          <p className={styles.paragraph}>
            Since all data is stored on your device and we have no access to it,
            these rights are inherently fulfilled by the App&rsquo;s local-only
            architecture.
          </p>
        </section>

        {/* 12 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions about this Privacy Policy or the
            App&rsquo;s privacy practices, please contact us at:
          </p>
          <p className={styles.paragraph}>
            Anim LLC
            <br />
            Email:{" "}
            <a href="mailto:privacy@animllc.com" className={styles.link}>
              privacy@animllc.com
            </a>
          </p>
        </section>

        <hr className={styles.divider} />

        <p className={styles.footer}>
          This Privacy Policy is effective as of February 10, 2026.
        </p>
      </article>
    </div>
  );
}
