import { useState, useEffect } from 'react';

function useDocumentInteraction() {
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return userInteracted;
}

export default useDocumentInteraction;
