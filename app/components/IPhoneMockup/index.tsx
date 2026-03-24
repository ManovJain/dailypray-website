"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { screenshots } from "./messages";
import styles from "./styles.module.css";

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
          sizes="(max-width: 768px) 280px, 336px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/devices/iPhone-14-Pro-Max.svg"
        alt=""
        className={styles.iphoneFrame}
        draggable={false}
      />
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
            sizes="280px"
            style={{ objectFit: "cover" }}
            className={`${styles.carouselImage} ${
              i === activeIndex ? styles.carouselImageActive : ""
            }`}
            priority={i === 0}
          />
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/devices/iPhone-14-Pro-Max.svg"
        alt=""
        className={styles.iphoneFrame}
        draggable={false}
      />
    </div>
  );
}
