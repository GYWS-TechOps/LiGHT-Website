import React, { useState } from 'react';

/**
 * ProgressiveImage component for progressive image loading.
 * Shows a low-res placeholder while the main image loads.
 * Usage: <ProgressiveImage src="/path/to/image.webp" alt="..." className="..." />
 */
const ProgressiveImage = ({ src, alt, className = '', placeholder = '', ...props }) => {
  const [loaded, setLoaded] = useState(false);

  // Optionally, you can provide a placeholder prop for a low-res image
  // If not provided, fallback to a gray background
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ display: 'inline-block' }}>
      {/* Placeholder (blurred or gray) */}
      {!loaded && (
        placeholder ? (
          <img
            src={placeholder}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover blur-sm scale-105 transition duration-500`}
            aria-hidden="true"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
        )
      )}
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        style={{ display: 'block' }}
        {...props}
      />
    </div>
  );
};

export default ProgressiveImage;
