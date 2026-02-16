'use client';

import { useEffect } from 'react';

export function BackgroundColorizer() {
  useEffect(() => {
    const colors = [
      '#1a1a2e', // dark blue
      '#1a2e1a', // dark green
      '#2e1a2e', // dark pink/purple
      '#2e2e1a', // dark yellow/olive
      '#2e2520', // dark beige
      '#2e1f1a', // dark orange
      '#2e1a1a', // dark red
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--bg-color', randomColor);
  }, []);

  return null;
}