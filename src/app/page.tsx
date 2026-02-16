'use client';

import { Nav } from '@/components/Nav';
import BlitzText from '@/components/BlitzText';
import { TestCard } from '@/components/TestCard';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
    <main>
      <Nav />
      <div className="flex min-h-screen flex-col items-center font-sans">
        {/* Hero Section */}
        <header className="flex w-full flex-col items-center gap-12 px-6 pt-24 pb-16">
          <div className="flex w-full min-h-[30vh] items-end">
            <div className="flex w-full max-h-[100px] pt-3">
              <BlitzText text="Amadeus" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center text-center text-2xl max-w-[800px] leading-relaxed text-white/80 gap-8">
            <p>From paper engineering to touchdesigner, I experiment to understand the world around me.</p>
            <p>Here’s a quick look at my experiments</p>
          </div>
        </header>

        {/* Tests Section */}
        <section className="flex w-full max-w-[800px] flex-col gap-8 px-6 py-16">
          <div className="flex flex-col gap-6">
            <TestCard 
            title="Interactive Showcases"
            caption="For Echo, an EMS product driven around an AI listening experience, shown here."
            muxPlaybackId="iSRkq8XMMTek00ZKSx5QMBZFUPQTbOyEVrdkv1Ty00opM"
            />
            <TestCard 
            title="Paper Engineering"
            caption="For a pop-up book, I explored the many rabbit holes of interactive paper."
            muxPlaybackId="500M3Hv7RsDsx02FwfP8m74cl00thUNjJ6nva7NMbOGYyg"
            variant="fill"
            />
            <TestCard 
            title="Typewriters"
            caption="As a continuing interest in mechanics, I repaired a 1930s-era desktop typewriter."
            muxPlaybackId="eWKuOiFZF8nftNmXAUrmbuai7Pm8SXE00cpRk00el39700"
            variant="fill"
            />
            <TestCard 
            title="Light and Shadow."
            caption="Explorations in light and puppeteering for a costume contest in the Industrial Design program at SCAD."
            muxPlaybackId="resxXUro00fFZzD00GuwZ801900rfhViTa16xbmk2OTrl2I"
            />
          </div>
        </section>

        <Footer />
      </div>
    </main>
    </>
  );
}
