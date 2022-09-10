import { useEffect, useState } from 'react';

export default function useIsComponentLoaded() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
}
