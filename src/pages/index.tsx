// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import * as mixpanel from 'mixpanel-browser';
//TEST
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Link from 'next/link';
import { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] })

const Home:NextPage = ({landing}:any) => {
  console.log("LANDING", landing)
  // Mixpanel - needs to be on every page, event
  // Schema <view-start-id>,<view-end-id>, <to-onboard-id>
  // console.log("mixpanel", mixpanel)
  mixpanel.init("815859f9eea207d4aba928dc1a8b61db");
  mixpanel.track("accountb-Page view");
  mixpanel.time_event("exit_elvis");
  
  useEffect(() => { 
  window.addEventListener(`beforeunload`, function() {
    mixpanel.set_config({api_transport: 'sendBeacon'});
    mixpanel.track('exit_elvis'); //shows up under duration
  });
});

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>{landing.title}</h1>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    
            By{' '}
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
      
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <h3>Blog Posts</h3>
      
            {/* {posts.map((post:any) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}-${post._id}`}>
                {post.title}
              </Link>
              </li>
              ))} */}
       



          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
   

   
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
      
     
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
   
      </div>
    </main>
  )
}

export async function getStaticProps() {
  // Todo Update to List and get account by ID in get props, return to display
  const { data } = await client.query({
    query: gql`
    query MyQuery {
      listLandings(filter: {accountId: {eq: "${process.env.BOBBER_ACCOUNTID}"}}) {
        nextToken
        items {
          accountId
          _id
          brand
          ctaLabel
          faqs {
            answer
            question
          }
          features {
            description
            img
            subtitle
            title
          }
          formOnboard {
            answer
            question
          }
          header {
            description
            headline
            img
          }
          logo
          metaSEO {
            description
            keywords
            ogImg
            ogType
            title
            twitterCardDescription
            twitterCardImg
            twitterCardTitle
          }
          pricing {
            img
            period
            priceUSD
            subtitle
            title
          }
          style {
            darkMode
            primaryColor
            primaryFont
            secondaryColor
            secondaryFont
          }
          title
        }
      
      }
    }
    `,
  });
 
  return {
 
    props: {
      landing: data.listLandings.items[0],
      // posts: data.listPosts.items,
    },
 };
}

export default Home;