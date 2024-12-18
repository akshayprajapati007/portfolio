export const transition = { type: "spring", duration: 0.8 }

export const inViewUpAnimation = {
  initial: {
    x: 0,
    y: 50,
    opacity: 0,
    transition: { ...transition, delay: 0.2 },
  },
  whileInView: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0.1 },
  },
  viewport: { once: true },
}

export const headTextAnimation = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
  viewport: { once: true },
}

export const headContentAnimation = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
}
