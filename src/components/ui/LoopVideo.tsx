'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster: string;
  /** Static frame shown instead of the video when the visitor prefers reduced motion. */
  still: string;
  /** Describes what the video shows; used as the video's label and the still's alt. */
  label: string;
  pauseLabel: string;
  playLabel: string;
};

/**
 * A muted, looping decorative video with a pause control.
 *
 * The loop runs past five seconds and never ends, so SC 2.2.2 requires a way
 * to stop it. Visitors who ask for reduced motion get the still frame instead
 * and the video is not mounted at all after hydration.
 */
export default function LoopVideo({ src, poster, still, label, pauseLabel, playLabel }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  if (reducedMotion) {
    // eslint-disable-next-line @next/next/no-img-element -- same-size still of a 5:6 frame; the optimizer adds nothing here
    return <img className="loop-video-media" src={still} alt={label} />;
  }

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="loop-video-media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      <button type="button" className="loop-video-toggle" onClick={toggle}>
        <span className="sr-only">{paused ? playLabel : pauseLabel}</span>
        {paused ? (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <polygon points="7 4 20 12 7 20" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        )}
      </button>
    </>
  );
}
