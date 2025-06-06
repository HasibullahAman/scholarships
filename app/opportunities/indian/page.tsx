"use client"


// about Data

const about = {
  title: "About me",
  description:
    ` I am Hasibullah Aman, a Kabul University graduate and web designer skilled in React
         and Next.js, trained through Meta's Coursera courses. I hold a DeepLearning.ai
        certificate and have a strong passion for Machine Learning, Deep Learning, and Computer
         Vision. I am relentless—working tirelessly until I solve my problems.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hasibullah Aman"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+93) 799757131"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },
    {
      fieldName: "Skype",
      fieldValue: "Aman.01"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Afghan"
    },
    {
      fieldName: "Email",
      fieldValue: "hasib.aman7@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English , German, Persian, Pashto"
    },
  ]
}


// Experience Data

const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus illo
         voluptatem voluptas doloremque incidunt pariatur?`,
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "summer 2021"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance",
      duration: "2023"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistan",
      duration: "2023"
    },
    {
      company: "Digital Agency",
      position: "UI/UX designer",
      duration: "2023"
    },
    {
      company: "Software Developer",
      position: "Junior Developer ",
      duration: "2023"
    },
  ]

}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"



const page1 = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px]
                                                py-6 px-10 rounded-xl flex flex-col justify-center
                                                items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px]
                                                    text-center lg:text-left'>
                            {item.position}
                          </h3>

                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full
                                                        bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6
                                max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center
                                            xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page1;
