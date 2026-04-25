import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-brand-ink">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
