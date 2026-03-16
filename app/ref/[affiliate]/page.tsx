import Image from "next/image";
import { HOME_CTA_URL } from "../../messages";
import styles from "./page.module.css";

interface ReferralPageProps {
  params: Promise<{ affiliate: string }>;
}

export default async function ReferralPage({ params }: ReferralPageProps) {
  const { affiliate } = await params;
  const code = `PRAYWITH${affiliate.toUpperCase()}`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.logoWrapper}>
          <Image
            src="/dailypray_logo.png"
            alt="DailyPray"
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        <h1 className={styles.title}>DailyPray</h1>

        <p className={styles.subtitle}>
          A gentle daily companion for prayer, scripture, and spiritual
          reflection.
        </p>

        <div className={styles.codeCard}>
          <p className={styles.codeLabel}>Download DailyPray and use code</p>
          <p className={styles.code}>{code}</p>
          <p className={styles.codeLabel}>for a special discount</p>
        </div>

        <a
          href={HOME_CTA_URL}
          className={styles.downloadBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          DOWNLOAD ON THE APP STORE
        </a>
      </main>
    </div>
  );
}
