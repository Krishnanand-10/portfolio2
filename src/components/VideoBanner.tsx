"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (nextMuted === false && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* 15-Second Looping Video */}
      <video
        ref={videoRef}
        src="/banner.mp4"
        poster="/banner-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center"
      />

      {/* Ambient overlays for subtle tone and contrast */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-8 pointer-events-none z-[5] bg-gradient-to-b from-black/30 to-transparent" />

      {/* Audio Mute/Unmute Control */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute banner audio" : "Mute banner audio"}
        title={isMuted ? "Unmute audio" : "Mute audio"}
        className="absolute top-3 right-3 z-20 flex items-center justify-center w-7 h-7 rounded-[4px] bg-black/50 hover:bg-black/75 text-zinc-200 hover:text-white backdrop-blur-md border border-white/15 transition-all cursor-pointer shadow-sm active:scale-95"
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 opacity-80" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
        )}
      </button>
    </div>
  );
}
