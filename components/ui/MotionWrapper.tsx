"use client"

import { motion, MotionProps } from "framer-motion"
import { ReactNode } from "react"

type MotionWrapperProps = MotionProps & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  children: ReactNode
  className?: string
}

export default function MotionWrapper({
  as = "div",
  children,
  ...rest
}: MotionWrapperProps) {
  const MotionComponent = motion(as as any)

  return <MotionComponent {...rest}>{children}</MotionComponent>
}
