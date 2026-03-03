'use client';

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";
import { CaseStudy } from "./CaseStudy";

interface TestCardProps {
  title: string;
  caption: string;
  media?: React.ReactNode;
  muxPlaybackId?: string;
  variant?: "default" | "fill";
  tags?: string[];
  /** Pass case study blocks here to attach a mini case study to this card */
  caseStudy?: React.ReactNode;
}

export function TestCard({
  title,
  caption,
  media,
  muxPlaybackId,
  variant = "default",
  caseStudy,
}: TestCardProps) {
  const isFill = variant === "fill";
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Small delay before hiding the peek — lets the user move
  // their mouse toward the fixed strip without it disappearing.
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleEnter = () => {
    clearTimeout(hideTimer.current);
    setIsHovered(true);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => setIsHovered(false), 180);
  };

  const openCaseStudy = () => {
    setIsHovered(false);
    setIsOpen(true);
  };

  const peekVisible = isHovered && !isOpen;

  return (
    <>
      {/* ── Card ────────────────────────────────────────────────────────── */}
      <div
        className={`flex w-full flex-col gap-4 ${caseStudy ? "cursor-pointer" : ""}`}
        onMouseEnter={caseStudy ? handleEnter : undefined}
        onMouseLeave={caseStudy ? handleLeave : undefined}
        onClick={caseStudy ? openCaseStudy : undefined}
      >
        {/* Media — relative so the hover overlay can sit on top */}
        <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden p-2">
          <div
            className={`relative w-full bg-white/5 flex items-center justify-center text-white/20 overflow-hidden rounded-lg ${
              isFill ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            {muxPlaybackId ? (
              <MuxPlayer
                playbackId={muxPlaybackId}
                metadata={{ video_title: title }}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay="muted"
                loop
                streamType="on-demand"
                accentColor="#ffffff"
              />
            ) : media ? (
              media
            ) : (
              <span className="text-sm">Video or Image</span>
            )}

            {/* ── Click-to-open affordance overlay ──
                  Sits above the video/image. Darkens on card hover and
                  shows a label so it's clear the card is interactive.
            ── */}
            {caseStudy && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  background: isHovered
                    ? "rgba(0, 0, 0, 0.48)"
                    : "rgba(0, 0, 0, 0)",
                  transition: "background 0.3s ease",
                }}
              >
                <div
                  className="flex flex-col items-center gap-2"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0px)" : "translateY(6px)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                >
                  {/* Circle icon */}
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <ArrowUpRight size={18} className="text-white" strokeWidth={2} />
                  </div>
                  {/* Label */}
                  <span className="text-white text-sm font-medium tracking-wide">
                    View case study
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text */}
        <div className="flex w-full flex-col gap pb-4">
          <p className="text-lg text-white/90 font-medium">{title}</p>
          <p className="text-sm text-white/50 mt-2">{caption}</p>
        </div>
      </div>

      {/* ── Fixed viewport peek strip ────────────────────────────────────
            Sits fully below the screen at rest (translateY 100%).
            Rises on card hover to peek ~72px into view.
            Mouse events keep the timer alive so users can reach it.
      ─────────────────────────────────────────────────────────────────── */}
      {caseStudy && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40"
          style={{
            transform: peekVisible ? "translateY(0)" : "translateY(100%)",
            transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: peekVisible ? "auto" : "none",
          }}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <button
            onClick={openCaseStudy}
            aria-label={`Open case study: ${title}`}
            className="w-full bg-white rounded-t-3xl shadow-[0_-12px_48px_rgba(0,0,0,0.22)] px-6 pt-5 pb-6 flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.12em]">
                {/* Case Study */}
              </span>
              <span className="text-base font-semibold text-gray-900">
                {title}
              </span>
            </div>
            <ArrowUpRight size={20} className="text-gray-400" />
          </button>
        </div>
      )}

      {/* ── Full-screen sheet overlay ─────────────────────────────────── */}
      {caseStudy && (
        <CaseStudy
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
        >
          {caseStudy}
        </CaseStudy>
      )}
    </>
  );
}
