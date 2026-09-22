import { useEffect } from 'react';

export function useAOS(trigger?: any) {
  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    const initAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('aos-animate');
        } else {
          observer.observe(el);
        }
      });
    };

    // Run immediate scan
    initAOS();

    // Additional delayed check to catch async sub-components
    const timer = setTimeout(initAOS, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(el => observer.unobserve(el));
    };
  }, [trigger]);
}
