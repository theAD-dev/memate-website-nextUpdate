"use client";

import { useEffect, useRef } from "react";

export default function MobileScrollSync() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const content = scrollRef.current;
      const phoneScreen = content.parentElement;
      const section = content.closest(".mobile-demo-section");

      if (!phoneScreen || !section) return;

      // Section position on page
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress inside this section (0 → 1)
      const progress =
        (windowHeight - rect.top) / (rect.height + windowHeight);

      // Clamp between 0 and 1
      const clamped = Math.max(0, Math.min(1, progress));

      // ✅ Exact max scroll inside phone
      const maxTranslate =
        content.scrollHeight - phoneScreen.clientHeight;

      // Apply exact pixel transform
      content.style.transform = `translateY(-${
        clamped * maxTranslate
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mobile-demo-section gridboxstreamline item2">
      <div className="phone-frame">
        {/* Phone Screen Viewport */}
        <div className="phone-screen">
          <div className="scroll-content" ref={scrollRef}>
            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 1"
            />

            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 2"
            />

            <img
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/1.png"
              className="screen-image"
              alt="Screen 3"
            />
          </div>
        </div>

        {/* Phone Frame Overlay */}
        <img
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/mobile-img12_va9ume.png"
          className="frame-image"
          alt="Phone Frame"
        />
      </div>
       <h4>Track Every Expense and Time <br/> Allocated to Your Projects</h4>
    </section>
  );
}
