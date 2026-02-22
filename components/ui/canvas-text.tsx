"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";

interface CanvasTextProps {
  text: string;
  className?: string;
  backgroundClassName?: string;
  colors?: string[];
  animationDuration?: number;
  lineWidth?: number;
  lineGap?: number;
  curveIntensity?: number;
  overlay?: boolean;
}

function resolveColor(color: string): string {
  if (color.startsWith("var(")) {
    const varName = color.slice(4, -1).trim();
    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    return resolved || color;
  }
  return color;
}

export function CanvasText({
  text,
  className = "",
  backgroundClassName = "bg-white dark:bg-neutral-950",
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dfe6e9"],
  animationDuration = 5,
  lineWidth = 1.5,
  lineGap = 10,
  curveIntensity = 60,
  overlay = false,
}: CanvasTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);
  const [bgColor, setBgColor] = useState("#0a0a0a");
  const [resolvedColors, setResolvedColors] = useState<string[]>([]);
  const [isSafari, setIsSafari] = useState(false);
  const lastFrameTimeRef = useRef<number>(0);

  const updateColors = useCallback(() => {
    if (bgRef.current) {
      const computed = window.getComputedStyle(bgRef.current);
      setBgColor(computed.backgroundColor);
    }
    const resolved = colors.map(resolveColor);
    setResolvedColors(resolved);
  }, [colors]);

  useEffect(() => {
    // Detect Safari
    const ua = navigator.userAgent.toLowerCase();
    const isSafariCheck = ua.indexOf("safari") > -1 && ua.indexOf("chrome") === -1;
    setIsSafari(isSafariCheck);

    updateColors();

    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [updateColors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textEl = textRef.current;
    if (!canvas || !textEl || resolvedColors.length === 0 || isSafari) {
      if (isSafari) setIsReady(true);
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const rect = textEl.getBoundingClientRect();
    const width = Math.ceil(rect.width) || 400;
    const height = Math.ceil(rect.height) || 200;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const numLines = Math.floor(height / lineGap) + 10;
    startTimeRef.current = performance.now();
    lastFrameTimeRef.current = startTimeRef.current;

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);

      // Throttle to ~30fps to prevent blinking/stuttering in Safari
      const elapsedSinceLastFrame = currentTime - lastFrameTimeRef.current;
      if (elapsedSinceLastFrame < 33.33) return; // ~30fps

      lastFrameTimeRef.current = currentTime;
      const elapsed = (currentTime - startTimeRef.current) / 1000;
      const phase = (elapsed / animationDuration) * Math.PI * 2;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < numLines; i++) {
        const y = i * lineGap;

        const curve1 = Math.sin(phase) * curveIntensity;
        const curve2 = Math.sin(phase + 0.5) * curveIntensity * 0.6;

        const colorIndex = i % resolvedColors.length;
        ctx.strokeStyle = resolvedColors[colorIndex];
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(
          width * 0.33,
          y + curve1,
          width * 0.66,
          y + curve2,
          width,
          y,
        );
        ctx.stroke();
      }

      // Using default PNG for better sharp rendering in Safari clipping
      const dataUrl = canvas.toDataURL();
      textEl.style.backgroundImage = `url(${dataUrl})`;
      textEl.style.backgroundSize = `${width}px ${height}px`;

      if (!isReady) setIsReady(true);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    bgColor,
    resolvedColors,
    animationDuration,
    lineWidth,
    lineGap,
    curveIntensity,
    isReady,
    isSafari,
  ]);

  // Safari stable fallback gradient
  const safariStyle = isSafari ? {
    backgroundImage: `linear-gradient(90deg, ${resolvedColors[0] || "#3b82f6"}, ${resolvedColors[2] || "#8b5cf6"}, ${resolvedColors[0] || "#3b82f6"})`,
    backgroundSize: "200% auto",
    animation: "shine 3s linear infinite",
  } : {};

  return (
    <span className={cn("relative inline", overlay && "absolute inset-0")}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}} />
      <span
        ref={bgRef}
        className={cn(
          "pointer-events-none absolute h-0 w-0 opacity-0",
          backgroundClassName,
        )}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <span
        ref={textRef}
        className={cn(
          "transition-opacity duration-300",
          isReady ? "bg-clip-text text-transparent opacity-100" : "text-blue-600 dark:text-blue-400 opacity-100",
          overlay ? "absolute inset-0" : "inline",
          className,
        )}
        style={{
          WebkitBackgroundClip: isReady ? "text" : "none",
          WebkitTextFillColor: isReady ? "transparent" : "inherit",
          backgroundClip: isReady ? "text" : "none",
          color: isReady ? "transparent" : "inherit",
          willChange: isReady && !isSafari ? "background-image" : "auto",
          ...safariStyle,
        }}
      >
        {text}
      </span>
    </span>
  );
}
