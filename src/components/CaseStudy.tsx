'use client';

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function CaseStudy({ isOpen, onClose, title, children }: CaseStudyProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset scroll position each open
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  return (
    // Portal-like fixed wrapper — sits on top of everything
    <div
      className="fixed inset-0 z-50"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* ── Sheet ── */}
      <div
        className="absolute inset-x-0 bottom-0 bg-white overflow-hidden flex flex-col"
        style={{
          top: "56px",
          borderRadius: "24px 24px 0 0",
          transform: isOpen ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* ── Sticky header ── */}
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-gray-100">
          {/* Drag handle + label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-1 rounded-full bg-gray-200" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              {/* Case Study */}
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain">
          <div className="max-w-[720px] mx-auto px-6 py-12 pb-24">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
