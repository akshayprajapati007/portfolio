import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/Button"
import MotionWrapper from "@/components/ui/motionWrapper"
import { headTextAnimation, inViewUpAnimation } from "@/config/motion"

const projects = [
  {
    id: 1,
    title: "ChatKI",
    description:
      "A real-time chat application built with React.js and TypeScript, focusing on delivering a smooth and responsive user experience.",
    link: "https://chat-app-client-indol.vercel.app/",
    code: "https://github.com/akshayprajapati007/chat-app",
    previewVideo: "/videos/ChatKI.mp4",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket",
    ],
  },
  {
    id: 2,
    title: "3D Effect Cards",
    description:
      "An interactive small project built with HTML and CSS, where cards dynamically move on hover, creating a visually appealing 3D effect.",
    link: "https://3d-effect-cards.vercel.app/",
    code: "https://github.com/akshayprajapati007/3d-effect-cards",
    previewVideo: "/videos/3D Card.mp4",
    technologies: ["HTML", "CSS"],
  },
]

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <MotionWrapper {...headTextAnimation}>
        <h1 className="text-2xl font-bold">Projects</h1>
      </MotionWrapper>
      <MotionWrapper {...inViewUpAnimation}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((projectDetails) => {
            const {
              id,
              code,
              description,
              link,
              previewVideo,
              technologies,
              title,
            } = projectDetails

            return (
              <div
                key={id}
                className="flex flex-col border rounded-md dark:border-gray-700"
              >
                <video
                  src={previewVideo}
                  autoPlay
                  muted
                  loop
                  className="rounded-t-md"
                />
                <div className="flex flex-col gap-3 p-4 grow">
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-[4px]">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href={link} target="_blank">
                      <Button variant="default">View</Button>
                    </Link>
                    <Link href={code} target="_blank">
                      <Button variant="outline">Code</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </MotionWrapper>
    </div>
  )
}

export default Projects
