import Link from "next/link"
import React from "react"
import MotionWrapper from "./ui/motionWrapper"
import { headContentAnimation, headTextAnimation } from "./config/motion"

function ContactMe() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <MotionWrapper {...headTextAnimation}>
        <h1 className="text-2xl font-bold">Contact Me</h1>
      </MotionWrapper>
      <MotionWrapper {...headContentAnimation}>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Want to chat? Just shoot me a dm with a{" "}
          <Link
            href="https://www.linkedin.com/in/akshayprajapati007"
            target="_blank"
            className="text-blue-500"
          >
            direct question on twitter
          </Link>{" "}
          or email me directly at{" "}
          <Link href="mailto:akku67877@gmail.com" className="text-blue-500">
            akku67877@gmail.com
          </Link>
        </p>
      </MotionWrapper>
    </div>
  )
}

export default ContactMe
