/* eslint-disable @next/next/no-img-element */
import { HAND_LEFT_ALT, HAND_RIGHT_ALT } from "./messages";
import styles from "./styles.module.css";

export function HandsBackground({ className }: { className?: string }) {
  return (
    <div className={`${styles.handsContainer} ${className || ""}`}>
      <div className={styles.handLeftWrap}>
        <img src="/hand1.png" alt={HAND_LEFT_ALT} className={styles.handLeftImg} />
      </div>
      <div className={styles.handRightWrap}>
        <img src="/hand2.png" alt={HAND_RIGHT_ALT} className={styles.handRightImg} />
      </div>
    </div>
  );
}
