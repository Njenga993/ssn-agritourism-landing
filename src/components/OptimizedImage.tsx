// Import without type issues using require or dynamic import
import { useEffect, useRef, useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

// Custom lazy loading implementation (no external dependency needed)
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loading === "eager") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }, // Load images 200px before they enter viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div ref={imgRef} className={`optimized-image-wrapper ${className}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          decoding="async"
        />
      )}
      {!isLoaded && isInView && (
        <div className="image-placeholder" style={{ width, height }} />
      )}
    </div>
  );
};

export default OptimizedImage;
