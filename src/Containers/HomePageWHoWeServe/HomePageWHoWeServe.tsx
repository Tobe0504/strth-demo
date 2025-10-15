import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageWhoWeServe.module.css";
import diaspora from "../../Assets/Images/disapora.svg";
import diasporaImage from "../../Assets/Images/diasporaImage.png";
import remoteNaija from "../../Assets/Images/remoteNaija.png";
import remoteNaijaImage from "../../Assets/Images/remoteNaijaImage.png";
import privateSector from "../../Assets/Images/privateSector.svg";
import privateSectorImage from "../../Assets/Images/privateSectorImage.png";
import publicSector from "../../Assets/Images/publicSectorr.png";
import publicSectorImage from "../../Assets/Images/publicSectorImage.png";
import businessOwner from "../../Assets/Images/businessOwner.png";
import businessOwnerImage from "../../Assets/Images/businessOwnerImage.png";
import { KeyboardArrowDown } from "@mui/icons-material";

const HomePageWhoWeServe = () => {
  const whoWeServe = [
    {
      icon: diaspora,
      title: "The Diaspora",
      dwscription:
        "Living outside Nigeria? Thinking about buying a place Back Home for viists (No need for hotels, Airbnbs, or your parent’s house), Investment, or is it a personal goal of yours? Or maybe you see yourself spending more time back home . If any of those sounds like you, we can help you along your home purchase journey.",
      advantages: [
        "No Agency Fee, Giddaa is Free",
        "We Eliminate Price Discrimination",
        "Giddaa Is Scam Proof!",
        "Relevant Information To Boost Your Confidence!",
        "We Are Responsive!",
      ],
      image: diasporaImage,
    },
    {
      icon: remoteNaija,
      title: "Naija Remote Workers",
      dwscription:
        "Do you work from home? Your own Home? With Giddaa, that’s possible. You don’t need to have all the money at once to buy a house to become a homeowner. Leverage your job flexibility working remotely and your current earning capacity to build equity in a home of your own.",
      advantages: [
        "Work From “Your Own Home”",
        "Invest In Man’s Greatest Asset Class",
        "Don’t Let Rent Go Up On You, Again!!",
        "No Agency Fees. Giddaa Is Free!",
      ],
      image: remoteNaijaImage,
    },
    {
      icon: privateSector,
      title: "Private Sector Workers",
      dwscription:
        "Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!",
      advantages: [
        "Join The Homeowners Club!",
        "Don’t Let Rent Go Up On You, Again!!",
        "Build A Solid Foundation For Your Family",
        "No Agency Fees. Giddaa is Free!",
      ],
      image: privateSectorImage,
    },
    {
      icon: publicSector,
      title: "Public Sector Workers",
      dwscription:
        "You serve the people, and now let us serve you!. Government workers can effortlessly apply for a National Housing Fund (NHF) loan through a primary mortgage bank with Giddaa—no stress or connections needed. Giddaa ensures a seamless application process for NHF loans, and government workers can seamlessly explore alternative properties and plans beyond NHF.",
      advantages: [
        "Have A Place You Can Call Yours!",
        "Don’t Let Rent Go Up On You, Again!!",
        "Build A Solid Foundation For Your Family.",
        "No Agency Fees. Giddaa is Free!",
      ],
      image: publicSectorImage,
    },
    {
      icon: businessOwner,
      title: "Business Owners & Investors.",
      dwscription:
        "Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!",
      advantages: [
        "Work From “Your Own Home”",
        "Don’t Let Rent Go Up On You, Again!!",
        "Build a Solid Foundation for your Family",
        "No Agency Fees. Giddaa is Free!",
      ],
      image: businessOwnerImage,
    },
  ];
  return (
    <section className={classes.container}>
      <SectionHeader title="Who We Serve" />
      <div className={classes.whoWeServeContainer}>
        {whoWeServe.map((data, i) => {
          return (
            <div className={classes.whoWeServe} key={i}>
              <div className={classes.textSection}>
                <img src={data.icon} alt={data.title} />
                <h4>{data.title}</h4>
                <p>{data.dwscription}</p>
                <div className={classes.advangtagesContainer}>
                  {data.advantages.map((datum, j) => {
                    return (
                      <div className={classes.advantage} key={j}>
                        <span>
                          <KeyboardArrowDown />
                        </span>
                        <span>{datum}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={classes.imageSection}>
                <img src={data.image} alt={data.title} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePageWhoWeServe;
