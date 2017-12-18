import { TweenMax, TweenConfig, Quad } from 'gsap';

const roller = (direction: string, element: HTMLElement, duration: number): void => {
  TweenMax.set(element, {
    // opacity: 1,
    height: 'auto'
  });
  const options = Object.assign({
    // opacity: 0,
    height: 0,
    ease: Quad.easeInOut
  });
  if (direction === 'down') TweenMax.from(element, duration, options);
  else TweenMax.to(element, duration, options);
};

export const rollerUp = (element: HTMLElement, duration: number): void => {
  roller('up', element, duration);
};

export const rollerDown = (element: HTMLElement, duration: number): void => {
  roller('down', element, duration);
};

