import React, { useState } from 'react';

interface YouTubeEmbedProps { videoId: string; title: string; }

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  const [clicked, setClicked] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  if (clicked) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <iframe className="absolute top-0 left-0 w-full h-full" src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
    );
  }
  return (
    <button onClick={() => setClicked(true)} className="relative w-full h-full overflow-hidden bg-black cursor-pointer group" aria-label={`Reproduzir vídeo: ${title}`} style={{ display: 'block', border: 'none', padding: 0, width: '100%', height: '100%' }}>
      <img src={thumb} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" width="640" height="360" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
    </button>
  );
};
