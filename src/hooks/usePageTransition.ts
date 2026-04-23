'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function usePageTransition() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    // Add page transition class to body
    document.body.classList.add('page-transitioning');

    // Trigger slide-up animation
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      (section as HTMLElement).classList.remove('visible');
      (section as HTMLElement).style.opacity = '0';
      (section as HTMLElement).style.transform = 'translateY(30px)';
    });

    // Animate sections with staggered timing
    setTimeout(() => {
      sections.forEach((section, index) => {
        setTimeout(() => {
          (section as HTMLElement).classList.add('visible');
          (section as HTMLElement).style.opacity = '1';
          (section as HTMLElement).style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 100);

    // Clean up transition class
    setTimeout(() => {
      document.body.classList.remove('page-transitioning');
    }, sections.length * 100 + 500);

    previousPath.current = pathname;
  }, [pathname]);

  return null;
}
