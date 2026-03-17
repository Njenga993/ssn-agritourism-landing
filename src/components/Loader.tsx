import { useEffect, useState } from 'react';
import '../styles/Loader.css';

interface LoaderProps {
  onLoadingComplete?: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500); // Delay before disappearing
          return 100;
        }
        return prev + 1; // Increment by 1 every 20ms = ~2 seconds total
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loader__container">
        
        <div className="loader__progress">
          <div 
            className="loader__progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loader__text">
          <span className="loader__issue">Vol. 1 • No. 3</span>
          <span className="loader__message">Loading...</span>
          <span className="loader__percentage">{progress}%</span>
        </div>

        <div className="loader__seed">
          <span className="loader__seed-dot"></span>
          <span className="loader__seed-dot"></span>
          <span className="loader__seed-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;