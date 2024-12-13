interface WorkExperienceItem {
  id: number
  startDate: string
  endDate?: string
  companyName: string
  jobTitle: string
  description: string[]
}

const workExperienceData: WorkExperienceItem[] = [
  {
    id: 2,
    startDate: "Jul 2021",
    endDate: "",
    companyName: "Tatvasoft, Ahmedabad",
    jobTitle: "Software Engineer",
    description: [
      "Collaborated closely with product managers, designers, and backend engineers, leading to the timely delivery of features.",
      "Stayed up-to-date on the latest front-end technologies, introducing and implementing innovative solutions in the company's flagship product.",
      "Worked on three key projects: DEEGEE, which was based on social media NFT sharing, WTT, which was based on e-commerce, and Andrew's app, which was based on a social media platform.",
      "Enhanced skills in React, Typescript, HTML, CSS, JavaScript, JSON, React Hooks, Material UI, Redux, and REST API Integration.",
    ],
  },
  {
    id: 1,
    startDate: "Oct 2020",
    endDate: "Jul 2021",
    companyName: "Tatvasoft, Ahmedabad",
    jobTitle: "Trainee Software Engineer",
    description: [
      "Developed web applications using the .NET MVC framework, focusing on both front-end (Views) and back-end (Models and Controllers).",
      "Gained hands-on experience with HTML, CSS, and JavaScript to create responsive and dynamic user interfaces within the MVC architecture.",
      "Worked on SQL databases, performing CRUD operations and managing data integration with .NET applications.",
      "Collaborated with senior developers to understand MVC architecture, emphasizing code organization, separation of concerns, and efficient database interaction.",
      "Worked on the Notes Market Place project, which is based on selling and buying study notes.",
    ],
  },
]

const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Work Experience</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((experienceDetails, index) => {
          const { id, companyName, description, jobTitle, startDate, endDate } =
            experienceDetails
          return (
            <li
              key={id}
              className={`ms-4 ${
                index === workExperienceData.length - 1 ? "mb-2" : "mb-10"
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {startDate} - {endDate || "Present"}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {jobTitle}
              </h3>
              <h2 className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {companyName}
              </h2>
              <div className="text-base font-normal text-gray-700 dark:text-gray-400">
                <ul>
                  {description.map((desc) => (
                    <li key={desc}>
                      <p className="text-gray-700 dark:text-gray-400">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default WorkExperience
