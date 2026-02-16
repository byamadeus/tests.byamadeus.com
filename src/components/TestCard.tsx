import MuxPlayer from "@mux/mux-player-react";

interface TestCardProps {
  title: string;
  caption: string;
  media?: React.ReactNode;
  muxPlaybackId?: string;
  variant?: "default" | "fill";
}

export function TestCard({ title, caption, media, muxPlaybackId, variant = "default" }: TestCardProps) {
  const isFill = variant === "fill";
  
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden p-2">
        <div className={`w-full bg-white/5 flex items-center justify-center text-white/20 overflow-hidden rounded-lg ${isFill ? 'aspect-[9/16]' : 'aspect-video'}`}>
          {muxPlaybackId ? (
            <MuxPlayer
              playbackId={muxPlaybackId}
              metadata={{
                video_title: title,
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
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
        </div>
      </div>
      
      <div className="flex w-full flex-col gap pb-4">
        <p className="text-lg text-white/90 font-medium">{title}</p>
        <p className="text-sm text-white/50 mt-2">{caption}</p>
      </div>
    </div>
  );
}