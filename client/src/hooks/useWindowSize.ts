import { useState, useEffect } from 'react'

interface StateProps {
  height: number | undefined,
  width: number | undefined,
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<StateProps>({
    height: undefined,
    width: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowSize;
}

export default useWindowSize;