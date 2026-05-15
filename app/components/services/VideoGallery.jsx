"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/app/lib/supabase'
import '@/app/styles/components/VideoGallery.css'

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Helper to extract YouTube ID from various URL formats
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
          .not('video_url', 'eq', '')
          .limit(20);

        if (error) throw error;

        // Filter out valid youtube URLs and map to our video object format
        const validVideos = (data || [])
          .map(artist => {
            const ytId = getYouTubeId(artist.video_url);
            return {
              id: ytId, // We use the YouTube ID here
              artistId: artist.id,
              title: artist.name,
              originalUrl: artist.video_url
            };
          })
          .filter(v => v.id); // Only keep the ones where we successfully parsed an ID

        setVideos(validVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="video-gallery-section" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-gradient">Loading featured performances...</div>
      </section>
    );
  }

  if (videos.length === 0) {
    return null; // Don't show the gallery if there are no valid videos in the DB
  }

  return (
    <section className="video-gallery-section">
      <div className="video-gallery-header">
        <span className="accent-tag">PORTFOLIO</span>
        <h2>Our <span className="text-gradient">Featured Performances</span></h2>
        <p>Watch some of the most electrifying acts and productions we've curated for past events.</p>
      </div>

      <div className="video-grid">
        {videos.map((video, idx) => (
          <motion.div 
            key={video.id + '-' + idx}
            className="video-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
          >
            <div className="video-wrapper">
              <iframe 
                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`} 
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h4>{video.title}</h4>
              <div className="play-icon-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
                <span>Watch Video</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
