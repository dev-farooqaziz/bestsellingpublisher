import LETUSHELPSEO from "@/component/SeoContentWriting/LetUsHelpSEO"
import GhostWriting from "@/component/ghostWritingServices/ghostWriting"
import WMODE from "@/component/workMode1"
import CTA3 from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"
// Import Images
import Research from "media/imageAR/research.png"
import Seo from "media/imageAR/seo.png"
import Search from "media/imageAR/search.png"
import Analyse from "media/imageAR/analyse.png"
import Optimization from "media/imageAR/optimization.png"
import Linking from "media/imageAR/linking.png"
const MRContent2Data = [
  {
    title: "Blog Posts",
    desc: "SEO blog posts are very important for website traffic. We create blog posts that people want to read and share. Our team of SEO content writers does a lot of keyword study and niche analysis."
  },
  {
    title: "SEO Optimized Service Pages",
    desc: "We write expert content that is specific to your business. Our team of SEO content writers makes sure that your service pages show off your skills and bring in qualified leads."
  },
  {
    title: "Location Pages",
    desc: "We make geo-specific pages for companies that serve more than one location. We can help you connect with local customers and engage them by using targeted keywords and highlighting specific offers for each location."
  },
  {
    title: "Landing Pages",
    desc: "Optimized landing pages are very important. Our SEO content writing service creates landing pages that work with your advertising efforts. These pages have a strong CTA and interesting copy to get more people to convert."
  },
  {
    title: "Optimized AdCopy",
    desc: "A compelling ad copy is essential for reaching a wider audience. Our SEO content team writes catchy headlines, short copy, and strong calls to action to get your target audience to interact with you online."
  },
  {
    title: "Descriptions of Products",
    desc: "Rank your product pages with details that are based on keywords and get people to buy. We provide top-notch SEO content writing services to make sure that your platform-compliant descriptions are clear, interesting, and detailed so that you can get more conversions."
  }

]
const MRCardData = [
  {
    classes: "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#40BEE2] hover:!text-white text-center",
    content: [
      {
        icon: Research,
        title: "Research <br/> FAQ Section",
      },
      {
        icon: Seo,
        title: "SEO Copywriting <br /> And Editing",
      },
      {
        icon: Search,
        title: "SEO Title And <br /> Meta Description",
      },
      {
        icon: Analyse,
        title: "Professional <br /> Analysis",
      },
      {
        icon: Optimization,
        title: "Effective Keyword <br /> Optimization",
      },
      {
        icon: Linking,
        title: "In-Depth <br /> Page Linking",
      },
    ]
  }]
const MRCardData2 = [
  {
    classes: "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
    stepText: "Step",
    indexing: true,
    content: [
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Provide Your Brief",
        desc: "Share your requirements and instructions to kickstart the process.",
      },
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Refine & Optimize",
        desc: "We enhance your content for SEO, refining it to maximize effectiveness.",
      },
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Review & Approve",
        desc: "You review the optimized content and provide your approval.",
      },
      {
        textColor: "text-[#40BEE2] group-hover:text-white",
        title: "Publish & Amplify",
        desc: "Your SEO-optimized content is published and strategically amplified for maximum impact.",
      },
    ]
  }]
const SEOContentWritingServices = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "SEO Content Writing Services | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/seo-content-writing-services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "SEO Content Writing Services | Best Selling Publisher",
    "url": "https://bestsellingpublisher.com/seo-content-writing-services",
    "logo": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png"
  }
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SEO Content Writing Services | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "url": "https://bestsellingpublisher.com/seo-content-writing-services",
    "telephone": "(012) 345-6789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1001 Wilshire Boulevard #1176",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90017",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0518073,
      "longitude": -118.2613875
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    } 
  }
  const schemaProduct = {
    "@context": "https://schema.org/", 
    "@type": "Product", 
    "name": "SEO Content Writing Services | Best Selling Publisher",
    "image": "https://bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    "description": "If you want to write a professional website content then hire our SEO content writing services",
    "brand": {
      "@type": "Brand",
      "name": "Best Selling Publisher"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1174"
    }
  }
  return (
    <main>
      <Head>
        <title>SEO Content Writing Services | Best Selling Publisher</title>
        <meta name="description" content="Best Selling Publisher offers SEO content writing services tailored to your needs. Start optimizing your website’s SEO by hiring our SEO content writers." />
        <meta name="robots" content="index, follow"/>
        <meta name="DC.title" content="SEO Content Writing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta property="og:url" content="https://bestsellingpublisher.com/seo-content-writing-services" />
        <meta property="og:image" content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public" />

        {/* canonical: */}
        <link rel="canonical" href="https://bestsellingpublisher.com/seo-content-writing-services" />

        {/* Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaWebsite)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaCorporation)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProffesionalService)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaProduct)}}/>



      </Head>
      <MRHero
        title="Increase Your Brand Image Through Top-Rated SEO Content Writing Services"
        desc="Create SEO-optimized content that converts and attracts more organic search traffic to boost your online visibility and credibility."
        logos="images/banner/img2.png"
        classes='bg-[#fefefe] !py-[80px]'
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/seo-search-engine.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Let Us Help You"
        title={`Why Choose Us for Best SEO Writing?`}
        desc="We are experts at creating SEO-led content plans that get your brand's message across the world clearly and with confidence. We're proud of our SEO writing services that meet the high standards that a professional website needs. The quality of our work shows how committed we are to being the best. Here’s what our SEO content writing services has to offer:"
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData} />
      <MRContent1
        subTitle="Our Comprehensive"
        title="SEO Content Writing Services"
        desc="We understand that producing SEO content calls for close client and content marketing specialist cooperation. While we know how to target search engines and the internet community, you know your customers the best. As we write your SEO material, we want you to be as involved as you wish. Our online content writing methodology is simple and efficient:"
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is easy and aims for flawless results in every project."
        textTheme="text-white"
        list={[
          "Understanding Your Vision ",
          "Keyword Research and Marketing Analysis",
          "Content strategy planning and creation",
          "Critical Review and Editing",
          "On-Page SEO Optimization",
          "Internal Linking",
          "Performance Analysis",
          "Ongoing Collaboration"
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our SEO Content Writing Services"
        title="Speak to Your Audience Directly"
        desc="When you think of SEO content writing, blog posts may come to mind first. But there’s a wealth of other services you can get with us that can enhance your SEO and drive engagement. Here is what our SEO writing Includes."
        data={MRContent2Data}
      />
      <CTA3 
      title="Start Your Success Journey with Expert SEO Strategies"
      desc="Our experts, backed by data-driven methods, deeply research your topic and keywords, ensuring content surpasses competitors. As the best SEO content writer, we enhance your site's performance and user experience, sealing SEO gaps."
      />
      <BTM />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`Efficiency is key in our SEO content writing process. Here's how we swiftly deliver exceptional content:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2} />
      <SwiperComponents />
      <MRContact 
      subTitle="Drive Growth With"
      title="Premier SEO Content Writing Services <br class='hidden mr-xl:block' /> that Deliver Real Results!" 
      desc="Whether you're aiming for increased visibility, higher traffic, or enhanced conversions. Our SEO content writers <br class='hidden mr-xl:block' /> offer you customized solutions. It ensures that your goals are met with precision and efficiency. Experience the <br class='hidden mr-xl:block' /> power of our SEO strategies that drive real results for your business."
      titleB="Write Your Success Story with Us! "
      descB="Contact us today for a free consultation and learn <br class='hidden mr-sm:block' /> more about how our SEO content writing services <br class='hidden mr-sm:block' /> can transform your online presence."
      />
    </main>
  )
}

export default SEOContentWritingServices