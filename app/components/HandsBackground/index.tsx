import Image from "next/image";
import { HAND_LEFT_ALT, HAND_RIGHT_ALT } from "./messages";
import styles from "./styles.module.css";

export function HandsBackground({ className }: { className?: string }) {
  return (
    <div className={`${styles.handsContainer} ${className || ""}`}>
      <div className={styles.handLeftWrap}>
        <Image
          src="/hand1.webp"
          alt={HAND_LEFT_ALT}
          width={2294}
          height={2140}
          className={styles.handLeftImg}
          priority
        />
      </div>
      <div className={styles.handRightWrap}>
        <Image
          src="/hand2.webp"
          alt={HAND_RIGHT_ALT}
          width={2513}
          height={2055}
          className={styles.handRightImg}
          priority
        />
      </div>
    </div>
  );
}
