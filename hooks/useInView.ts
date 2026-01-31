import { useEffect, useState, useRef } from 'react';

export const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<any>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isInView] as const;
};