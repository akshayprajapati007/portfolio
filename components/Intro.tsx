import Image from "next/image"
import ProfilePic from "@/app/images/Akshay.webp"
import { headContentAnimation, headTextAnimation } from "@/config/motion"
import MotionWrapper from "@/components/ui/motionWrapper"

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <MotionWrapper {...headTextAnimation}>
          <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Akshay</h1>
        </MotionWrapper>
        <MotionWrapper {...headContentAnimation}>
          <p className="text-base text-gray-800 dark:text-gray-300 w-full">
            A results-driven React Developer with 4 years of experience in
            building scalable, high-performance web applications. Proficient in
            React.js, TypeScript, and modern front-end technologies, with a
            strong focus on implementing best practices, optimizing performance,
            and ensuring maintainability. Experienced in collaborating with
            cross-functional teams to deliver innovative solutions that enhance
            user experience. Passionate about continuous learning and staying
            ahead of emerging industry trends to create user-centric,
            high-quality products.
          </p>
        </MotionWrapper>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="Akshay Prajapati"
          width={160}
          height={160}
          className="border-2 border-gray-300 rounded-full object-cover"
        />
      </div>
    </div>
  )
}
