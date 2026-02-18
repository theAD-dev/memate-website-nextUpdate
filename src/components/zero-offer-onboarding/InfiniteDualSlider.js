"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const baseImages = [
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask01.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask02.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask03.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask04.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask05.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask06.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask07.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask08.png",
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/19-11-2025/mask09.png",
];

const images = [...baseImages, ...baseImages];

export default function InfiniteDualSlider() {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  const pausedRef = useRef(false);

  useEffect(() => {
    const tracks = [
      { ref: col1Ref, speed: 35 },
      { ref: col2Ref, speed: 30 },
      { ref: col3Ref, speed: 40 },
    ];

    let rafId;
    let lastTime = performance.now();

    const positions = tracks.map(() => 0);
    let heights = tracks.map(() => 0);

    // ✅ Wait until images load properly
    const updateHeights = () => {
      heights = tracks.map(
        (t) => (t.ref.current?.scrollHeight || 0) / 2
      );
    };

    // Run once after full render
    setTimeout(updateHeights, 500);

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!pausedRef.current) {
        tracks.forEach((track, i) => {
          positions[i] -= (track.speed * delta) / 1000;

          // ✅ Smooth infinite loop reset (no jump)
          if (positions[i] <= -heights[i]) {
            positions[i] += heights[i];
          }

          track.ref.current.style.transform = `translate3d(0, ${positions[i]}px, 0)`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    tracks.forEach((t) => {
      t.ref.current?.addEventListener("mouseenter", pause);
      t.ref.current?.addEventListener("mouseleave", resume);
    });

    return () => {
      cancelAnimationFrame(rafId);
      tracks.forEach((t) => {
        t.ref.current?.removeEventListener("mouseenter", pause);
        t.ref.current?.removeEventListener("mouseleave", resume);
      });
    };
  }, []);

  return (
    <div className="bg_slider">
      <div className="ui-grid">
        {/* Column 1 */}
        <div className="ui-col">
          <div className="slide_track" ref={col1Ref}>
            {images.map((img, i) => (
              <div className="ui-card card-sm" key={`c1-${i}`}>
                <Image src={img} alt="" width={420} height={300} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="ui-col">
          <div className="slide_track" ref={col2Ref}>
            {images.map((img, i) => (
              <div className="ui-card card-lg" key={`c2-${i}`}>
                <Image src={img} alt="" width={420} height={420} />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="ui-col">
          <div className="slide_track" ref={col3Ref}>
            {images.map((img, i) => (
              <div className="ui-card card-md" key={`c3-${i}`}>
                <Image src={img} alt="" width={420} height={360} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
