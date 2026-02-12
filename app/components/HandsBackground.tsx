/* eslint-disable @next/next/no-img-element */
import styles from "./HandsBackground.module.css";

export function HandsBackground({ className }: { className?: string }) {
  return (
    <div className={`${styles.handsContainer} ${className || ""}`}>
      <div className={styles.handLeftWrap}>
        <img src="/hand1.png" alt="" className={styles.handLeftImg} />
      </div>
      <div className={styles.handRightWrap}>
        <img src="/hand2.png" alt="" className={styles.handRightImg} />
      </div>
    </div>
  );
}
