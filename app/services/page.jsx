"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/app/lib/supabase'
import { SERVICES } from '@/app/constants'
import '@/app/styles/pages/ServicesPage.css'

const HoverVideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="hover-video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-aspect-ratio">
        {!isHovered ? (
          <img 
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
            alt={video.title} 
            className="video-thumbnail"
            onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
          />
        ) : (
          <iframe 
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0`} 
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="auto-playing-iframe"
          ></iframe>
        )}
        
        <div className={`book-now-overlay ${isHovered ? 'visible' : ''}`}>
          <a href={`/artists`} className="book-now-btn">Book Now</a>
        </div>
      </div>
      <div className="hover-video-info">
        <h4>{video.title}</h4>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase
          .from('artists')
          .select('id, name, video_url')
          .not('video_url', 'is', null)
          .not('video_url', 'eq', '');

        if (error) throw error;

        const validVideos = (data || [])
          .map(artist => {
            const ytId = getYouTubeId(artist.video_url);
            return {
              id: ytId,
              artistId: artist.id,
              title: artist.name,
              originalUrl: artist.video_url
            };
          })
          .filter(v => v.id);

        setVideos(validVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Helper to chunk videos for each service category. 
  // If we don't have enough videos, we will loop them so every category has some.
  const getVideosForService = (index) => {
    if (videos.length === 0) return [];
    
    // We want to show up to 3 videos per row.
    // If we only have a few videos in DB, we'll repeat them so the design looks populated.
    const startIdx = (index * 3) % videos.length;
    let selected = [];
    for(let i=0; i<3; i++) {
        selected.push(videos[(startIdx + i) % videos.length]);
    }
    return selected;
  };

  return (
    <main className="services-page-layout">
      <div className="lux-container">
        <header className="services-header">
          <span className="accent-tag">EXPERIENCES</span>
          <h1>Our <span className="text-gradient">Services</span></h1>
          <p>Discover our specialized entertainment categories. Hover over a video to preview the performance.</p>
        </header>

        {loading ? (
          <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="text-gradient">Loading performances...</div>
          </div>
        ) : videos.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#8a8f98', padding: '50px 0' }}>
            No videos available at the moment. Please upload videos in the admin dashboard.
          </div>
        ) : (
          <div className="services-category-rows">
            {SERVICES.map((service, index) => (
              <div key={index} className="service-category-section">
                <h2 className="service-category-title">{service.title}</h2>
                <div className="hover-video-grid">
                  {getVideosForService(index).map((vid, vIndex) => (
                    <HoverVideoCard key={vid.id + vIndex + index} video={vid} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
