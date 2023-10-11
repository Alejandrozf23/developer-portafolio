import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import profilePic from "../../public/images/profile/developer-pic-1.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="CodeBucks" className='w-full h-auto' 
                priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Hidden Services Architect? Backend Developer" 
                className='!text-6x1  xl:!text-5x1 lg:!text-center lg:!text=6x1 md:!text-5x1 sm:!text-3x1'/>
              <p className='my-4 text-base font-medium '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web 
                applications. Explore my latest projects and articles, showcasing my expertise in Spring, Django y React.js and web development.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"} className='flex items-center bg-dark text-light 
                  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 
                  border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' 
                  download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
              </div>
            </div>            
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
