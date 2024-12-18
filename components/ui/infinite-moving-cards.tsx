"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([]);

  // Memoized function to set animation direction
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  }, [direction]);

  // Memoized function to set animation speed
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      let duration = "40s"; // Default to "normal"
      if (speed === "fast") {
        duration = "20s";
      } else if (speed === "slow") {
        duration = "80s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  // Function to handle duplicating items
  const addAnimation = useCallback(() => {
    if (items.length > 0) {
      setDuplicatedItems([...items, ...items]); // Duplicate items for infinite scrolling
      getDirection();
      getSpeed();
    }
  }, [items, getDirection, getSpeed]);

  // Run animation setup on component mount
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--tw-color-customBlue)_20%,var(--tw-color-customBlue)_50%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-4 flex-nowrap",
          duplicatedItems.length > 0 && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, index) => (
          <li
            className="relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 py-6 px-4 md:w-[450px] bg-gradient-to-b from-customBlue to-slate-900"
            key={`${item.name}-${index}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
