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
  // 'Paper Engineering',
  'Fabrication',
  'Web Design',
] as const;

type Tag = (typeof ALL_TAGS)[number];

// ─── Case studies ──────────────────────────────────────────────────────────
// Each case study is a JSX constant. Compose it from blocks, then reference
// it in the cards array below. Add `caseStudy` to a card to enable the peek.



const movieRatingStudy = (
  <>
    <CSTitle
      title="Movie Rating Experience"
      subtitle="A personal movie ranking system built on the open TMBD API"
    />

    <CSTools
      tools={[
        { name: 'Claude Code', url: 'https://claude.ai' },
        { name: 'TMBD API', url: 'https://developer.themoviedb.org/docs/getting-started' },
      ]}
    />

    <CSHeading>Concept</CSHeading>
    <CSBody>
      To develop an offshoot idea from a different project, I created a 
      movie rating experience that utilizes a similar algorithmic approach to
      rating movies similar to Beli.
    </CSBody>
    <CSTools
      tools={[
        { name: 'Try it out', url: 'https://moviebelly.byamadeus.com/' },
      ]}
    />
    
      <CSVideo
      muxPlaybackId="qIcSzryw2PD8N00IiolO700zEs5vVeQ6cEOScif01Nzz4s"
      title="Movie Rating Experience"
      caption="Full demo — presented at the Movie Rating Experience reveal."
    />

     <CSHeading>Working with Claude</CSHeading>
    <CSBody>
      Prompted claude with the task to develop the experience based off the provided screenshots. Through 
      the development process, where it missed small details, I was able to go in and provide 
      changes myself.
    </CSBody>
    
    <CSImage
      src="/assets/cs-images/movie/csroll.png"
      alt="3 screens of the movie rating experience."
      caption="Design files passed off to claude."
    />

    <CSHeading>Reflection</CSHeading>
    <CSBody>
     Claude was extremely helpful in getting my idea into a prototype. From 
     the prototype, I could already see where my idea fell flat, where it needed
     some more thought. This is the future of the design process for me.
    </CSBody>
    
    <CSImage
      src="/assets/cs-images/movie/data-layer.png"
      alt="Side by side data connectin to UI elements"
      caption="Claude connected the API to the UI within minutes."
    />

    </>
    
);
const penpalStudy = (
  <>

    <CSTitle
      title="Pen Pal - a Digital Zine"
      subtitle="An email-based zine that auto-publishes a static site for free"
    />

    <CSTools
      tools={[
        { name: 'Claude Code', url: 'https://claude.ai' },
        { name: 'Cloudflare workers', url: 'https://developers.cloudflare.com/workers/' },
        { name: 'Github Actions', url: 'https://docs.github.com/en/actions' },
      ]}
    />

    <CSHeading>A zine with cloudflare workers.</CSHeading>
    <CSTools
      tools={[
        { name: 'Check it out', url: 'https://penpals.byamadeus.com/' },
      ]}
    />
    
      <CSVideo
      muxPlaybackId="dwNASXLIv2Qn7Cejrfq1lwCPHhyv7oS2he6eGQPVZwk"
      title="Pen Pal - a Digital Zine"
      caption="Clicking through the blog posts sent via email."
    />

     <CSHeading>Developing in a new domain</CSHeading>
    <CSBody>
      I have had this concept floating in my head for a while, and the complex part of web design
      has been trying to find inexpensive ways to do complex things. With Claude, I was able 
      to set up a workflow that was free, and used automations, not LLMs, to do the work of 
      reading, formatting, and launching each post.
    </CSBody>
    
    <CSImage
      src="/assets/cs-images/penpal/concept.png"
      alt="A diagram of the pen pal workflow"
      caption="User sends post via email with Token, cloudflare reads, and sends to github."
    />

    <CSHeading>Reflection</CSHeading>
    <CSBody>
     It's incredibly satisfying to watch an old concept take life, and cool to use 
     claude for languages and mechanisms that I would never have the ability to use.
     Niche programmatic solutions are now possible, and worth exploring as we experiment a
      new web.
    </CSBody>

    </>
    
);
const paperEngineeringStudy = (
  <>

    <CSTitle
      title="Paper Engineering"
      subtitle="Using paper as a medium for interactive experiences."
    />
    
    <CSTools
      tools={[
        { name: 'Paper', url: 'https://en.wikipedia.org/wiki/Paper' },
        { name: 'Youtube <3', url: 'https://www.youtube.com/watch?v=9xRj1-OUX64&list=PL5MFL836_ysqluKAxLaTjB6EEIrhHpACA&index=3' },
      ]}
    />

    <CSVideo
      muxPlaybackId="resxXUro00fFZzD00GuwZ801900rfhViTa16xbmk2OTrl2I"
      title="Paper Engineering"
      caption="Casting light over layers of paper to create a shadow puppet effect."
    />
    <CSVideo
      muxPlaybackId="500M3Hv7RsDsx02FwfP8m74cl00thUNjJ6nva7NMbOGYyg"
      title="Pop Up Craft"
      caption="A book I created out of a conversation with many friends, made interactive."
    />
    <CSHeading>A glance - paper is a strong medium</CSHeading>
    <CSBody>
     As I build out this section of tests, I have learned how much potential interactions with paper has. As I continue
     to experiment with paper engineering, the effort you put into the art is directly visible in the result.
     Looking forward to having more excuses to collect my experiments here.
    </CSBody>

    </>
    
);

const showcaseCaseStudy = (
  <>
    <CSTitle
      title="Interactive Showcase for an EMS Product"
      subtitle="An AI-powered listening experience for an EMS product"
    />

    <CSTools
      tools={[
        { name: 'OpenAI - Code', url: 'https://openai.com' },
        { name: 'OpenAI - Voice', url: 'https://openai.com' },
      ]}
    />

    <CSHeading>Context</CSHeading>
    <CSBody>
      Echo is an EMS product built around an AI assistant. We created a demo 
      experience as a way to help our audience relate, and see the potential impact
       that echo has. 
    </CSBody>

    <CSImage
      src="/assets/cs-images/demoday/finish.jpg"
      alt="Echo prototype showing the listening interface"
      caption="Our full booth setup, from product to interface, branded."
    />
    <CSHeading>Using all our print skills...</CSHeading>
    <CSBody>
      Ending with a big branding display left a strong impression on our audience, Echo is movement, 
      bold ideas, and big impact.
    </CSBody>
    <CSImage
      src="/assets/cs-images/demoday/spread.jpg"
      alt="Echo prototype showing the listening interface"
      caption="Takeaways for the audience."
    />
    <CSBody>
      Every touchpoing was accounted for in the process, to create a cohesive experience that felt like a world. We wanted to show the potential of the product, and create an experience that felt alive, and full of personality.
    </CSBody>
    <CSImage
      src="/assets/cs-images/demoday/close.jpg"
      alt="Echo prototype showing the listening interface"
      caption="Wizard of Oz prototype"
    />
    <CSBody>
      To showcase our digital experience, we created a Wizard of Oz prototype using ChatGPT and the voice model of the time. 
      This allowed us to give the experience of our product, while accounting for the limitations of the space and our prototypes.
    </CSBody>
    <CSImage
      src="/assets/cs-images/demoday/pillars.jpg"
      alt="Echo prototype showing the listening interface"
      caption="Final shot of the showcase — our two main product pillars."
    />

    <CSHeading>Reflection</CSHeading>
    <CSBody>
      Putting on a showcase is a lot of work, but it's an incredible way to show the potential of a product. It's a chance to create a world around your product, read them into the impact it has. With Echo 
      our audience left knowing how vital our product could be for the EMS experience.
    </CSBody>

    {/* <CSSplit
      src="/assets/placeholder.jpg"
      alt="Close-up of the signal mapping detail"
      caption="Signal mapping detail"
      imageFirst={true}
    >
      The breathing layer was the most critical to get right. A slight timing
      offset made the animation lead the breath rather than follow it —
      creating a subtle biofeedback loop that users described as &ldquo;calming
      without being obvious.&rdquo;
    </CSSplit> */}

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
    title: 'Movie Rating Experience',
    caption: 'Creating a web-based prototype to test a concept for a movie rating experience',
    muxPlaybackId: 'qIcSzryw2PD8N00IiolO700zEs5vVeQ6cEOScif01Nzz4s',
    tags: ['AI', 'Web Design'],
    caseStudy: movieRatingStudy,
  },
  {
    title: 'Pen Pal - a Digital Zine',
    caption: 'An email-based zine that auto-publishes a static site for free',
    muxPlaybackId: 'dwNASXLIv2Qn7Cejrfq1lwCPHhyv7oS2he6eGQPVZwk',
    tags: ['AI', 'Web Design'],
    caseStudy: penpalStudy,
  },
  {
    title: 'Interactive Showcases',
    caption: 'For Echo, an EMS product driven around an AI listening experience, shown here.',
    muxPlaybackId: 'iSRkq8XMMTek00ZKSx5QMBZFUPQTbOyEVrdkv1Ty00opM',
    tags: ['AI', 'Web Design'],
    caseStudy: showcaseCaseStudy,
  },
  // {
  //   title: 'Paper Engineering',
  //   caption: 'For a pop-up book, I explored the many rabbit holes of interactive paper.',
  //   muxPlaybackId: '500M3Hv7RsDsx02FwfP8m74cl00thUNjJ6nva7NMbOGYyg',
  //   // variant: 'fill',
  //   tags: ['Paper Engineering', 'Fabrication'],
  // },
  // {
  //   title: 'Typewriters',
  //   caption: 'As a continuing interest in mechanics, I repaired a 1930s-era desktop typewriter.',
  //   muxPlaybackId: 'eWKuOiFZF8nftNmXAUrmbuai7Pm8SXE00cpRk00el39700',
  //   tags: ['Mechanics'],
  // },
  {
    title: 'Paper Engineering.',
    caption: 'Using paper as a medium for interactive experiences.',
    muxPlaybackId: 'resxXUro00fFZzD00GuwZ801900rfhViTa16xbmk2OTrl2I',
    tags: ['Fabrication'],
    caseStudy: paperEngineeringStudy,
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
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col items-center text-center text-2xl max-w-[800px] leading-relaxed text-white/80 gap-8">
              <p>From paper engineering to touchdesigner, I experiment to understand the world around me.</p>
              <p>Here&rsquo;s a quick look at my experiments</p>
            </div>
            {/* ── Tag filter ── */}
            <div className="w-full justify-center flex flex-wrap gap-2">
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
            </div>
          </header>

          {/* Tests section */}
          <section className="flex w-full max-w-[800px] flex-col gap-8 px-6 py-16">

            

            {/* ── Cards ── */}
            <div className="flex flex-col gap-6">
              {CARDS.map((card) => {
                const visible = !selectedTag || card.tags.includes(selectedTag);
                return (
                  <div
                    key={card.title}
                    className="transition-opacity transition-all duration-300"
                    style={{
                      display: visible ? 'block' : 'none',
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
