import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import data from '@/constants/index'
import HireMe from '@/components/HireMe'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import profilePicture from '@/images/profile/developer01.png'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.head.title}</title>
        <meta name={data.head.meta.name} content={data.head.meta.content}/>
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePicture} alt="CodeBucks"  className='w-full 
                h-auto lg:hidden md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw, 50vw'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text={data.info.title} className='!text-6x1 
                xl:!text-5x1 lg:!text-center lg:!text=6x1 md:!text-5x1 sm:!text-3x1'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>{data.info.description}</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href={data.info.pdf} target={"_blank"} className='flex items-center bg-dark text-light 
                  p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 
                  border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark 
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' 
                  download={true}>{data.info.name}<LinkArrow className={"w-6 ml-1"}/></Link>
              </div>
            </div>            
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
