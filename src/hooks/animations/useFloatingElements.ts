import { RefObject, useEffect } from "react";

interface useFloatingElementsProps {
  elementsRef: RefObject<HTMLDivElement[]>;
  containerRef: RefObject<HTMLDivElement>;
}

export const useFloatingElements = ({
  containerRef,
  elementsRef,
}: useFloatingElementsProps) => {
  useEffect(() => {
    const container = containerRef.current;
    const elements = elementsRef.current;

    if (!container || elements?.length === 0) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const getRandomDirection = () => (Math.random() > 0.5 ? 1 : -1);
    const getRandomPosition = (size: number, containerSize: number) =>
      Math.floor(Math.random() * (containerSize - size));

    const checkCollision = (
      elementA: HTMLDivElement,
      elementB: HTMLDivElement
    ) => {
      const rectA = elementA.getBoundingClientRect();
      const rectB = elementB.getBoundingClientRect();

      return (
        rectA.left < rectB.right &&
        rectA.right > rectB.left &&
        rectA.top < rectB.bottom &&
        rectA.bottom > rectB.top
      );
    };

    elements?.forEach((element) => {
      const moveSpeed = 1.5;
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      let x = getRandomPosition(elementWidth, containerWidth);
      let y = getRandomPosition(elementHeight, containerHeight);
      let directionX = getRandomDirection();
      let directionY = getRandomDirection();

      const moveElement = () => {
        x += directionX * moveSpeed;
        y += directionY * moveSpeed;

        elements.forEach((otherElement) => {
          if (
            otherElement !== element &&
            checkCollision(element, otherElement)
          ) {
            const rectA = element.getBoundingClientRect();
            const rectB = otherElement.getBoundingClientRect();

            const dx = rectA.left - rectB.left;
            const dy = rectA.top - rectB.top;

            if (Math.abs(dx) > Math.abs(dy)) {
              directionX = dx > 0 ? 1 : -1;
            } else {
              directionY = dy > 0 ? 1 : -1;
            }
          }
        });

        if (x >= containerWidth - elementWidth || x <= 0) {
          directionX *= -1;
        }

        if (y >= containerHeight - elementHeight || y <= 0) {
          directionY *= -1;
        }

        element.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveElement);
      };

      requestAnimationFrame(moveElement);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
