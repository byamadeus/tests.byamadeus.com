// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY BLOCKS
// ─────────────────────────────────────────────────────────────────────────────
// Copy-paste any of these blocks inside a <TestCard caseStudy={...}> prop.
// They compose together to build a mini case study layout.
//
// Available blocks:
//   <CSTitle>         — Main title + optional subtitle
//   <CSTools>         — "Tools used" tag list with links
//   <CSBody>          — Body text paragraph
//   <CSHeading>       — Section heading (h2) within the case study
//   <CSImage>         — Full-width image with optional caption
//   <CSSplit>         — Half image / half text, side by side
//   <CSVideo>         — Mux video embed
//   <CSDivider>       — Subtle horizontal rule between sections
// ─────────────────────────────────────────────────────────────────────────────

import MuxPlayer from "@mux/mux-player-react";

// ─── TITLE ───────────────────────────────────────────────────────────────────

interface CSTitleProps {
  title: string;
  subtitle?: string;
}

export function CSTitle({ title, subtitle }: CSTitleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-400 mt-3 leading-snug">{subtitle}</p>
      )}
    </div>
  );
}

// ─── TOOLS ───────────────────────────────────────────────────────────────────

interface Tool {
  name: string;
  url: string;
}

interface CSToolsProps {
  tools: Tool[];
}

export function CSTools({ tools }: CSToolsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10">
      {tools.map((tool) => (
        <a
          key={tool.name}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
        >
          {tool.name} ↗
        </a>
      ))}
    </div>
  );
}

// ─── BODY TEXT ───────────────────────────────────────────────────────────────

interface CSBodyProps {
  children: React.ReactNode;
}

export function CSBody({ children }: CSBodyProps) {
  return (
    <p className="text-[1.125rem] text-gray-600 leading-relaxed mb-8">
      {children}
    </p>
  );
}

// ─── SECTION HEADING ─────────────────────────────────────────────────────────

interface CSHeadingProps {
  children: React.ReactNode;
}

export function CSHeading({ children }: CSHeadingProps) {
  return (
    <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-12 first:mt-0">
      {children}
    </h2>
  );
}

// ─── FULL-WIDTH IMAGE ────────────────────────────────────────────────────────

interface CSImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function CSImage({ src, alt, caption }: CSImageProps) {
  return (
    <figure className="mb-10 -mx-6 sm:mx-0">
      <div className="w-full rounded-none sm:rounded-2xl overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover block"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-400 text-center px-6 sm:px-0">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── SPLIT (half image + half text) ──────────────────────────────────────────

interface CSSplitProps {
  src: string;
  alt: string;
  caption?: string;
  children: React.ReactNode;
  /** Default: image on the left, text on the right */
  imageFirst?: boolean;
}

export function CSSplit({
  src,
  alt,
  caption,
  children,
  imageFirst = true,
}: CSSplitProps) {
  const imageBlock = (
    <div>
      <div className="rounded-2xl overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover block"
        />
      </div>
      {caption && (
        <p className="mt-2 text-xs text-gray-400 text-center">{caption}</p>
      )}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <div className="text-[1.0625rem] text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
      {imageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

// ─── MUX VIDEO ───────────────────────────────────────────────────────────────

interface CSVideoProps {
  muxPlaybackId: string;
  title?: string;
  caption?: string;
}

export function CSVideo({ muxPlaybackId, title, caption }: CSVideoProps) {
  return (
    <figure className="mb-10">
      <div className="w-full rounded-2xl overflow-hidden bg-gray-900">
        <MuxPlayer
          playbackId={muxPlaybackId}
          metadata={{ video_title: title }}
          style={{ width: "100%", aspectRatio: "16/9" }}
          streamType="on-demand"
          autoPlay="muted"
                loop
          accentColor="#111111"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────

export function CSDivider() {
  return <hr className="my-12 border-gray-100" />;
}
