import React, { useState } from 'react';
import { useWorkImages } from './useWorkImages';
import { GalleryView } from './GalleryView';
import { FullscreenView } from './FullscreenView';
import { ViewToggle } from './ViewToggle';
import { SketchesView } from './SketchesView';

export const WorkPage = () => {
  const [isGalleryView, setIsGalleryView] = useState(true);
  const [viewMode, setViewMode] = useState('stills');
  const { images, sketchImages } = useWorkImages();

  const currentImages = viewMode === 'stills' ? images : sketchImages;

  return (
    <>
      <div style={{ 
        width: '100%', 
        height: '100%',
        position: 'relative'
      }}>
        {viewMode === 'sketches' && isGalleryView ? (
          <SketchesView images={sketchImages} />
        ) : isGalleryView ? (
          <GalleryView images={currentImages} />
        ) : (
          <FullscreenView images={currentImages} />
        )}
      </div>

      <div style={{ 
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-end',
        background: 'transparent',
        width: 'auto',
        pointerEvents: 'auto'
      }}>
        <div style={{
          position: 'relative',
          marginBottom: '5px'
        }}>
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '15px',
            fontFamily: 'Times New Roman',
            fontSize: '8pt',
            color: '#0D090A',
            whiteSpace: 'nowrap'
          }}>
            clickme~
          </div>
          <ViewToggle 
            isGalleryView={isGalleryView} 
            onClick={() => setIsGalleryView(!isGalleryView)} 
          />
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          marginTop: '10px',
          background: 'transparent',
          width: 'auto'
        }}>
          <button 
            onClick={() => setViewMode('stills')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: viewMode === 'stills' ? '#000' : '#666',
              cursor: 'pointer',
              padding: 0,
              fontWeight: 'bold',
              textAlign: 'right',
              width: 'auto'
            }}
          >
            #stills
          </button>
          <button 
            onClick={() => setViewMode('sketches')}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: viewMode === 'sketches' ? '#000' : '#666',
              cursor: 'pointer',
              padding: 0,
              fontWeight: 'bold',
              textAlign: 'right',
              width: 'auto'
            }}
          >
            #sketches
          </button>
        </div>
      </div>
    </>
  );
};
