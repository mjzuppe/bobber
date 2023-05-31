// Extentions
import { useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

// Utils
import * as mixpanel from 'mixpanel-browser';
import { gql } from "@apollo/client";
import client from "../../apollo-client";

// Components
import Layout from "./components/layout";
import Nav from './components/navigation';
import Hero from './components/hero';
import ValueProps from './components/valueprops';
import FAQs from './components/faqs';
import Pricing from './components/pricing';
import Footer from './components/footer';
import { SEO } from '../types/seo';

const Home: NextPage = ({ landing }: any) => {
  // Mixpanel - needs to be on every page, event
  // Schema <view-start-id>,<view-end-id>, <to-onboard-id>
  // console.log("mixpanel", mixpanel)
  mixpanel.init("815859f9eea207d4aba928dc1a8b61db");
  mixpanel.track("accountb-Page view");
  mixpanel.time_event("exit_elvis");

  useEffect(() => {
    window.addEventListener(`beforeunload`, function () {
      mixpanel.set_config({ api_transport: 'sendBeacon' });
      mixpanel.track('exit_elvis'); //shows up under duration
    });
  });


  return (
    <Layout data={{...landing.metaSEO, brand: landing.brand, ctaLabel:landing.ctaLabel}}>
      <Hero data={{...landing.header, ctaLabel:landing.ctaLabel}} />
      <ValueProps data={{features: landing.features, featureSummary: landing.featureSummary}} />
      <FAQs data={landing.faqs}/>
      <Pricing data={landing.pricing} />
    </Layout>
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
          featureSummary {
            title
            subtitle
          }
          features {
            description
            img
            subtitle
            title
          }
          formOnboard {
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