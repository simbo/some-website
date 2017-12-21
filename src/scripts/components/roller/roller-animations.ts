import { TweenMax, Quad } from 'gsap';

const roller = (direction: string, element: HTMLElement, duration: number): void => {
  TweenMax.set(element, {
    // opacity: 1,
    height: 'auto'
  });
  const options = {
    // opacity: 0,
    ease: Quad.easeInOut,
    height: 0
  };
  if (direction === 'down') TweenMax.from(element, duration, options);
  else TweenMax.to(element, duration, options);
};

export const rollerUp = (element: HTMLElement, duration: number): void => {
  roller('up', element, duration);
};

export const rollerDown = (element: HTMLElement, duration: number): void => {
  roller('down', element, duration);
};

