import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.3;
    }
  }, []);
  return (
    <section className="relative isolate min-h-[75svh] sm:min-h-[70vh]">
      {/* Video-Ebene */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/blue-blocks-poster.jpg"
        >
          <source src="/media/blue-blocks.webm" type="video/webm" />
          <source src="/media/blue-blocks.mp4" type="video/mp4" />
          {/* Optional: .mov als letzter Fallback */}
          <source src="/media/Blue_blocks.mov" type="video/quicktime" />
        </video>

        {/* Lesbarkeits-Overlay */}
        <div className="absolute inset-0 bg-black/35" />
        {/* weiche Abdunklung nach unten */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20  pb-[max(env(safe-area-inset-bottom),6rem)] sm:py-28 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-white">
          Powering tomorrow’s crypto —{" "}
          <span className="text-gray-300 italic">quietly.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg font-normal text-white">
          Sustainable by nature. Secured by disk space.
        </p>
        <p className="mx-auto  max-w-4xl text-lg font-normal text-white">
          <strong>Since 2014</strong> .
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/exchanges" className="btn btn-primary">
            Get SIGNA
          </Link>
          <Link to="/poc-plus" className="btn btn-white text-signum-blue">
            Learn about PoC+
          </Link>
        </div>
      </div>
    </section>
  );
}
