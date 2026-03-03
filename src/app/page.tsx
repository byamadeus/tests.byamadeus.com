'use client';

import { useState } from 'react';
import { Nav } from '@/components/Nav';
import BlitzText from '@/components/BlitzText';
import { TestCard } from '@/components/TestCard';
import { Footer } from '@/components/Footer';
import {
  CSTitle,
  CSTools,
  CSBody,
  CSHeading,
  CSImage,
  CSSplit,
  CSVideo,
  CSDivider,
} from '@/components/CaseStudyBlocks';

// ─── Tags ──────────────────────────────────────────────────────────────────
// Add or remove tags here — they'll automatically appear in the filter UI.

const ALL_TAGS = [
  'AI',
  'Paper Engineering',
  'Mechanics',
  'Fabrication',
  'Web Design',
] as const;

type Tag = (typeof ALL_TAGS)[number];

// ─── Case studies ──────────────────────────────────────────────────────────
// Each case study is a JSX constant. Compose it from blocks, then reference
// it in the cards array below. Add `caseStudy` to a card to enable the peek.

const showcaseCaseStudy = (
  <>
    <CSTitle
      title="Interactive Showcase for Echo"
      subtitle="An AI-powered listening experience for an EMS product"
    />

    <CSTools
      tools={[
        { name: 'TouchDesigner', url: 'https://derivative.ca' },
        { name: 'Claude AI', url: 'https://claude.ai' },
        { name: 'Mux', url: 'https://mux.com' },
      ]}
    />

    <CSHeading>Use Case / Hypothesis</CSHeading>
    <CSBody>
      Echo is an EMS product built around an AI listening experience. The
      hypothesis was that a real-time, reactive visual layer could make abstract
      physiological data feel intuitive and human — bridging the gap between
      clinical readout and lived experience.
    </CSBody>

    <CSImage
      src="/assets/placeholder.jpg"
      alt="Echo prototype showing the listening interface"
      caption="Early prototype — the signal visualization reacts to voice and breath."
    />

    <CSHeading>Approach</CSHeading>
    <CSBody>
      We built the visual engine in TouchDesigner, driving generative patterns
      with live audio input processed through the Echo hardware. Each layer of
      the visualization mapped to a different physiological signal — breath
      rate, HRV, and vocal tone — so the output felt deeply personal.
    </CSBody>

    <CSSplit
      src="/assets/placeholder.jpg"
      alt="Close-up of the signal mapping detail"
      caption="Signal mapping detail"
      imageFirst={true}
    >
      The breathing layer was the most critical to get right. A slight timing
      offset made the animation lead the breath rather than follow it —
      creating a subtle biofeedback loop that users described as &ldquo;calming
      without being obvious.&rdquo;
    </CSSplit>

    <CSVideo
      muxPlaybackId="iSRkq8XMMTek00ZKSx5QMBZFUPQTbOyEVrdkv1Ty00opM"
      title="Echo Interactive Showcase"
      caption="Full demo — presented at the Echo product reveal."
    />

    <CSDivider />

    <CSHeading>Reflection</CSHeading>
    <CSBody>
      The biggest surprise was how much small latency changes altered the
      emotional quality of the piece. Under 80ms felt alive; over 120ms felt
      mechanical. That sensitivity shaped how we thought about real-time
      biofeedback for every subsequent Echo feature.
    </CSBody>

    <CSHeading>How this could be useful in the future</CSHeading>
    <CSBody>
      This pattern — using generative visuals as a bridge between raw data and
      human emotion — has applications far beyond EMS. Anywhere you have a
      sensor and a screen, you can make data feel like a conversation rather
      than a report. I&rsquo;m excited to explore this in ambient computing and
      wearable contexts next.
    </CSBody>
  </>
);

// ─── Cards ─────────────────────────────────────────────────────────────────
// Add `tags` to each card for filtering. Add `caseStudy` to attach a sheet.

const CARDS: {
  title: string;
  caption: string;
  muxPlaybackId: string;
  variant?: 'default' | 'fill';
  tags: Tag[];
  caseStudy?: React.ReactNode;
}[] = [
  {
    title: 'Interactive Showcases',
    caption: 'For Echo, an EMS product driven around an AI listening experience, shown here.',
    muxPlaybackId: 'iSRkq8XMMTek00ZKSx5QMBZFUPQTbOyEVrdkv1Ty00opM',
    tags: ['AI', 'Web Design'],
    caseStudy: showcaseCaseStudy,
  },
  {
    title: 'Paper Engineering',
    caption: 'For a pop-up book, I explored the many rabbit holes of interactive paper.',
    muxPlaybackId: '500M3Hv7RsDsx02FwfP8m74cl00thUNjJ6nva7NMbOGYyg',
    variant: 'fill',
    tags: ['Paper Engineering', 'Fabrication'],
  },
  {
    title: 'Typewriters',
    caption: 'As a continuing interest in mechanics, I repaired a 1930s-era desktop typewriter.',
    muxPlaybackId: 'eWKuOiFZF8nftNmXAUrmbuai7Pm8SXE00cpRk00el39700',
    variant: 'fill',
    tags: ['Mechanics'],
  },
  {
    title: 'Light and Shadow.',
    caption: 'Explorations in light and puppeteering for a costume contest in the Industrial Design program at SCAD.',
    muxPlaybackId: 'resxXUro00fFZzD00GuwZ801900rfhViTa16xbmk2OTrl2I',
    tags: ['Fabrication'],
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const toggleTag = (tag: Tag) =>
    setSelectedTag((prev) => (prev === tag ? null : tag));

  return (
    <>
      <main>
        <Nav />
        <div className="flex min-h-screen flex-col items-center font-sans">

          {/* Hero */}
          <header className="flex w-full flex-col items-center gap-12 px-6 pt-24 pb-16">
            <div className="flex w-full min-h-[30vh] items-end">
              <div className="flex w-full max-h-[100px] pt-3">
                <BlitzText text="Amadeus" />
              </div>
            </div>
            <div className="w-full flex flex-col items-center text-center text-2xl max-w-[800px] leading-relaxed text-white/80 gap-8">
              <p>From paper engineering to touchdesigner, I experiment to understand the world around me.</p>
              <p>Here&rsquo;s a quick look at my experiments</p>
            </div>
          </header>

          {/* Tests section */}
          <section className="flex w-full max-w-[800px] flex-col gap-8 px-6 py-16">

            {/* ── Tag filter ── */}
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => {
                const active = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={[
                      'px-4 py-1.5 rounded-full text-sm font-medium',
                      'transition-all duration-200 cursor-pointer',
                      active
                        ? 'bg-white text-gray-900'
                        : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80',
                    ].join(' ')}
                  >
                    {tag}
                  </button>
                );
              })}

              {/* Clear filter — only shown when a tag is active */}
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-white/40 hover:text-white/60 transition-colors cursor-pointer"
                >
                  Clear ×
                </button>
              )}
            </div>

            {/* ── Cards ── */}
            <div className="flex flex-col gap-6">
              {CARDS.map((card) => {
                const visible = !selectedTag || card.tags.includes(selectedTag);
                return (
                  <div
                    key={card.title}
                    className="transition-opacity duration-300"
                    style={{
                      opacity: visible ? 1 : 0.15,
                      pointerEvents: visible ? 'auto' : 'none',
                    }}
                  >
                    <TestCard {...card} />
                  </div>
                );
              })}
            </div>

          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
