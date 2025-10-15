import Layout from "../Components/Layout/Layout";
import HomePageGetStarted from "../Containers/HomePageGetStarted/HomePageGetStarted";
import HomePageHeroSection from "../Containers/HomePageHeroSection/HomePageHeroSection";
import HomePageHowItWorks from "../Containers/HomePageHowItWorks/HomePageHowItWorks";
import HomePageWhyGiddaa from "../Containers/HomePageWhyGiddaa/HomePageWhyGiddaa";
import HomeServicesHeader from "../Containers/HomeServicesHeader/HomeServicesHeader";

const services = [
  {
    title: "Financial Structuring & Capital Readiness",
    description:
      "We specialize in making your asset irresistible to investors.",
    options: [
      {
        title: "Investment-Grade Documentation",
        description:
          "We don't just write reports—we craft definitive documents, including Competent Person's Reports (CPR), that translate technical opportunity into secured capital.",
      },
      {
        title: "Optimal Capital Architecture:",
        description:
          "Strategic advisory on sophisticated financing mechanisms like Reserve-Based Lending (RBL) and structured equity, engineered specifically to suit the Nigerian market and minimize risk exposure.",
      },
      {
        title: "Total Due Diligence Assurance",
        description:
          "Our integrated Technical and Commercial Due Diligence (TCDD) process is rigorous and transparent, providing absolute assurance required by global financial institutions.",
      },
    ],
  },
  {
    title: "Operational Assurance & Logistics Mastery",
    description:
      "We ensure the money raised is translated into uninterrupted field performance.",
    options: [
      {
        title: "Fortified Risk Mitigation: ",
        description:
          "Our proprietary framework moves beyond risk identification to proactive risk elimination, ensuring all operational and commercial threats are neutralized before they impact cash flow.",
      },
      {
        title: "Critical Supply Chain Certainty",
        description:
          "From complex mechanical systems to essential spare parts, we manage the end-to-end global and local procurement and installation on time, every time, financed correctly from the start.",
      },
      {
        title: "Reliable Haulage & Compliance",
        description:
          "We manage complex logistics and transport across challenging terrains, ensuring every delivery is executed with unwavering safety, speed, and regulatory adherence.",
      },
    ],
  },
  {
    title: "It Extends Further, We Also Offer",
    description:
      "Our support ecosystem ensures the long-term health and efficiency of your operations.",
    options: [
      {
        title: "Essential Consumables ",
        description:
          "Dependable, compliant supply of drilling, production, and specialty chemicals to maintain peak operational performance.",
      },
      {
        title: "Safety & Compliance Equipment",
        description:
          "High-quality, certified Personal Protective Equipment (PPE) and safety gear to ensure the protection of your most valuable assets: your people.",
      },
      {
        title: "High-Value Technical Consulting",
        description:
          "On-demand access to specialized engineering and subsurface experts for time-sensitive challenges, including well test interpretation and production flow optimization.",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <HomePageHeroSection />
      <HomePageWhyGiddaa />
      <HomeServicesHeader />
      {services.map((data) => {
        return (
          <HomePageHowItWorks
            title={data?.title}
            description={data?.description}
            menu={data?.options}
            key={data?.title}
          />
        );
      })}
      <HomePageGetStarted />
    </Layout>
  );
};

export default HomePage;
