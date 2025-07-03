
import { useEffect, useState } from 'react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <header className={`py-8 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="font-bold text-7xl tracking-wide text-center" style={{ 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '75px',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #FFFFFF, #4B3B89)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Builder's OS
      </h1>
    </header>
  );
};

export default Header;
