import React from "react"
import MotionWrapper from "@/components/ui/MotionWrapper"
import { headTextAnimation, inViewUpAnimation } from "@/config/motion"

const skillsData = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Material UI",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "REST API",
  "Unit Testing",
]

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <MotionWrapper {...headTextAnimation}>
        <h1 className="text-2xl font-bold">Skills</h1>
      </MotionWrapper>
      <MotionWrapper {...inViewUpAnimation}>
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </MotionWrapper>
    </div>
  )
}

export default Skills
