import React from "react";

const VideoFrame = () => {
  return (
    <div className="relative w-full py-20 bg-brand-secondary/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light text-black tracking-tighter">
          About Me
        </h2>

        <div className="w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Rpb-2Agwu0o?si=QkuklUoROi9BBmGh"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
