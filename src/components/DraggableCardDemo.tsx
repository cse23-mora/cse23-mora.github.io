import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card";

import items from "./lib/photos";

export function DraggableCardDemo() {
  // Shuffle items array using Fisher-Yates algorithm
  const shuffledItems = [...items];
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full h-full items-center justify-center overflow-clip bg-neutral-100 dark:bg-neutral-900">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-500">
        Bound by code, bonded for life. Not just classmates, A family that grew together.
      </p>
      {shuffledItems.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
