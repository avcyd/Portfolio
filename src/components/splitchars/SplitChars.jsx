import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Lightweight character split — no Club GSAP plugin required */
export default function SplitChars({
  text,
  as: Tag = "span",
  className = "",
  delay = 0.03,
  duration = 0.55,
  staggerFrom = "start",
  triggerOnScroll = false,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const chars = el.querySelectorAll(".split-char");
      gsap.set(chars, { opacity: 0, y: 18, rotateX: -40 });

      const tween = {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        ease: "power3.out",
        stagger: { each: delay, from: staggerFrom },
      };

      if (triggerOnScroll) {
        gsap.to(chars, {
          ...tween,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      } else {
        gsap.to(chars, { ...tween, delay: 0.2 });
      }
    },
    { scope: ref, dependencies: [text] },
  );

  const parts = text.split("").map((char, i) => (
    <span className="split-char" key={`${char}-${i}`}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag ref={ref} className={`split-chars ${className}`.trim()} aria-label={text}>
      {parts}
    </Tag>
  );
}
