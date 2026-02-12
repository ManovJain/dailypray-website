"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { screenshots } from "./messages";
import styles from "./styles.module.css";

export function IPhoneFrame({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="248 154 1210 2488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phone body with screen cutout (evenodd) */}
      <path
        fillRule="evenodd"
        d="M431.528 156H1274.962A169.678 169.678 0 0 1 1444.64 325.678V2470.322A169.678 169.678 0 0 1 1274.962 2640H431.528A169.678 169.678 0 0 1 261.85 2470.322V325.678A169.678 169.678 0 0 1 431.528 156ZM437.063 203H1269.421A123.321 123.321 0 0 1 1392.742 326.321V2455.189A123.321 123.321 0 0 1 1269.421 2578.51H437.063A123.321 123.321 0 0 1 313.742 2455.189V326.321A123.321 123.321 0 0 1 437.063 203Z"
        fill="#2C2C2C"
      />

      {/* Side buttons — left */}
      <rect x="250" y="622.176" width="11.838" height="105.552" rx="3.946" fill="#2C2C2C" />
      <rect x="250" y="805.132" width="11.838" height="196.026" rx="3.946" fill="#2C2C2C" />
      <rect x="250" y="1042.38" width="11.838" height="194.015" rx="3.946" fill="#2C2C2C" />

      {/* Side button — right */}
      <rect x="1444.65" y="870.475" width="11.838" height="297.557" rx="3.946" fill="#2C2C2C" />

      {/* Dynamic Island */}
      <rect x="703.469" y="242.426" width="293" height="81.4464" rx="38.6525" fill="#2C2C2C" />
    </svg>
  );
}

export function IPhoneMockup({
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

export function IPhoneCarousel({ className }: { className?: string }) {
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
